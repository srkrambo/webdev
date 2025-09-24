document.addEventListener('DOMContentLoaded', () => {
    // --- Data ---
    const lessons = [
        {
            path: 'lessons/week0/1_what_is_code.html',
            code: `<h1>Hello, World!</h1>\n<p>This is my first line of code.</p>`
        },
        {
            path: 'lessons/week0/2_how_websites_work.html',
            code: `<h1>My Awesome House</h1>\n\n<p>This is the foundation of my website.</p>`
        },
        {
            path: 'lessons/week0/3_your_toolkit.html',
            code: `<h1>Hello!</h1>`
        },
        {
            path: 'lessons/week0/4_thinking_in_steps.html',
            code: `<!-- Try planning your own page here using comments! -->`
        }
    ];

    // --- DOM Elements ---
    const lessonContent = document.querySelector('.lesson-content');
    const htmlEditor = document.getElementById('html-editor');
    const cssEditor = document.getElementById('css-editor');
    const jsEditor = document.getElementById('js-editor');
    const previewPane = document.getElementById('preview-pane');
    const runButton = document.getElementById('run-button');
    const tabsContainer = document.querySelector('.editor-tabs');
    const editorPanes = document.querySelectorAll('.editor-pane');
    const tabButtons = document.querySelectorAll('.tab-button');

    // Event listener for tab switching
    tabsContainer.addEventListener('click', (e) => {
        if (e.target.matches('.tab-button')) {
            const targetTab = e.target.dataset.tab;
            tabButtons.forEach(button => button.classList.toggle('active', button.dataset.tab === targetTab));
            editorPanes.forEach(pane => pane.classList.toggle('active', pane.id.startsWith(targetTab)));
        }
    });

    // --- State ---
    let currentLessonIndex = 0;

    // --- Functions ---
    const updatePreview = () => {
        const htmlCode = htmlEditor.value;
        const cssCode = cssEditor.value;
        const jsCode = jsEditor.value;

        const sourceDocument = `
            <!DOCTYPE html>
            <html><head><style>${cssCode}</style></head>
            <body>${htmlCode}<script>${jsCode}<\/script></body>
            </html>`;
        previewPane.srcdoc = sourceDocument;
    };

    const loadLesson = async (index) => {
        const lesson = lessons[index];
        try {
            const response = await fetch(lesson.path);
            if (!response.ok) {
                throw new Error(`Failed to fetch lesson: ${response.statusText}`);
            }
            const lessonHtml = await response.text();
            lessonContent.innerHTML = lessonHtml;

            // Update code editor
            htmlEditor.value = lesson.code || '';
            cssEditor.value = ''; // Reset for each lesson
            jsEditor.value = '';  // Reset for each lesson

            // Re-attach event listeners to the new buttons
            document.getElementById('prev-lesson-button').addEventListener('click', () => {
                if (currentLessonIndex > 0) {
                    currentLessonIndex--;
                    loadLesson(currentLessonIndex);
                }
            });
            document.getElementById('next-lesson-button').addEventListener('click', () => {
                if (currentLessonIndex < lessons.length - 1) {
                    currentLessonIndex++;
                    loadLesson(currentLessonIndex);
                }
            });

            // Update button states
            document.getElementById('prev-lesson-button').disabled = (index === 0);
            document.getElementById('next-lesson-button').disabled = (index === lessons.length - 1);

            updatePreview();
        } catch (error) {
            lessonContent.innerHTML = `<p class="error">Error loading lesson: ${error.message}</p>`;
        }
    };

    // --- Event Listeners ---
    runButton.addEventListener('click', updatePreview);

    tabsContainer.addEventListener('click', (e) => {
        if (e.target.matches('.tab-button')) {
            const targetTab = e.target.dataset.tab;
            tabButtons.forEach(button => button.classList.toggle('active', button.dataset.tab === targetTab));
            editorPanes.forEach(pane => pane.classList.toggle('active', pane.id.startsWith(targetTab)));
        }
    });

    // --- Initial Load ---
    loadLesson(currentLessonIndex);
});
