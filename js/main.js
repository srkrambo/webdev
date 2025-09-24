document.addEventListener('DOMContentLoaded', () => {
    // --- Data ---
    const allLessons = Object.values(COURSE_DATA).flat();

    // --- DOM Elements ---
    const lessonPane = document.getElementById('lesson-pane');
    const quizPane = document.getElementById('quiz-pane');
    const contentTabsContainer = document.querySelector('.content-tabs');
    const contentTabButtons = document.querySelectorAll('.content-tab-button');
    const quizTabButton = document.querySelector('[data-tab="quiz"]');

    const htmlEditor = document.getElementById('html-editor');
    const cssEditor = document.getElementById('css-editor');
    const jsEditor = document.getElementById('js-editor');
    const previewPane = document.getElementById('preview-pane');
    const runButton = document.getElementById('run-button');
    const editorTabsContainer = document.querySelector('.editor-tabs');
    const editorPanes = document.querySelectorAll('.editor-pane');
    const editorTabButtons = document.querySelectorAll('.tab-button');

    // --- State ---
    let currentLessonIndex = 0;
    let score = 0;
    let totalQuestions = 0;

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

    const renderQuiz = (quizData) => {
        quizPane.innerHTML = ''; // Clear previous quiz
        score = 0;
        totalQuestions = quizData.length;

        const quizTitle = document.createElement('h3');
        quizTitle.textContent = `Quiz (${totalQuestions} Questions)`;
        quizPane.appendChild(quizTitle);

        const scoreDisplay = document.createElement('p');
        scoreDisplay.id = 'score-display';
        scoreDisplay.textContent = `Score: 0 / ${totalQuestions}`;
        quizPane.appendChild(scoreDisplay);

        quizData.forEach((q, index) => {
            const questionWrapper = document.createElement('div');
            questionWrapper.className = 'question-wrapper';

            const questionText = document.createElement('p');
            questionText.innerHTML = `<strong>${index + 1}. ${q.question}</strong>`;
            questionWrapper.appendChild(questionText);

            const optionsList = document.createElement('ul');
            optionsList.className = 'quiz-options';
            q.options.forEach((option, optionIndex) => {
                const optionItem = document.createElement('li');
                optionItem.textContent = option;
                optionItem.dataset.questionIndex = index;
                optionItem.dataset.optionIndex = optionIndex;
                optionsList.appendChild(optionItem);
            });
            questionWrapper.appendChild(optionsList);
            quizPane.appendChild(questionWrapper);
        });
    };

    const loadLesson = async (index) => {
        const lesson = allLessons[index];
        if (!lesson) return;

        try {
            const response = await fetch(lesson.path);
            if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);
            const lessonHtml = await response.text();
            lessonPane.innerHTML = lessonHtml;

            htmlEditor.value = lesson.code.html || '';
            cssEditor.value = lesson.code.css || '';
            jsEditor.value = lesson.code.js || '';

            // Handle Quiz display
            if (lesson.quiz) {
                quizTabButton.style.display = 'block';
                renderQuiz(lesson.quiz);
            } else {
                quizTabButton.style.display = 'none';
                quizPane.innerHTML = '';
            }
            // Always default to lesson tab on new lesson load
            contentTabButtons.forEach(button => button.classList.toggle('active', button.dataset.tab === 'lesson'));
            document.querySelectorAll('.content-pane').forEach(pane => pane.classList.toggle('active', pane.id === 'lesson-pane'));


            document.getElementById('prev-lesson-button').disabled = (index === 0);
            document.getElementById('next-lesson-button').disabled = (index === allLessons.length - 1);

            updatePreview();
        } catch (error) {
            lessonPane.innerHTML = `<p class="error">Error loading lesson: ${error.message}</p>`;
        }
    };

    // --- Event Listeners ---
    runButton.addEventListener('click', updatePreview);

    editorTabsContainer.addEventListener('click', (e) => {
        if (e.target.matches('.tab-button')) {
            const targetTab = e.target.dataset.tab;
            editorTabButtons.forEach(button => button.classList.toggle('active', button.dataset.tab === targetTab));
            editorPanes.forEach(pane => pane.classList.toggle('active', pane.id.startsWith(targetTab)));
        }
    });

    contentTabsContainer.addEventListener('click', (e) => {
        if (e.target.matches('.content-tab-button')) {
            const targetTab = e.target.dataset.tab;
            contentTabButtons.forEach(button => button.classList.toggle('active', button.dataset.tab === targetTab));
            document.querySelectorAll('.content-pane').forEach(pane => pane.classList.toggle('active', pane.id.endsWith(`-${targetTab}-pane`)));
        }
    });

    lessonPane.addEventListener('click', (e) => {
        if (e.target.id === 'prev-lesson-button') {
            if (currentLessonIndex > 0) {
                currentLessonIndex--;
                loadLesson(currentLessonIndex);
            }
        }
        if (e.target.id === 'next-lesson-button') {
            if (currentLessonIndex < allLessons.length - 1) {
                currentLessonIndex++;
                loadLesson(currentLessonIndex);
            }
        }
    });

    quizPane.addEventListener('click', (e) => {
        if (e.target.matches('.quiz-options li') && !e.target.parentElement.classList.contains('answered')) {
            const questionIndex = parseInt(e.target.dataset.questionIndex);
            const selectedOptionIndex = parseInt(e.target.dataset.optionIndex);
            const lesson = allLessons[currentLessonIndex];
            const question = lesson.quiz[questionIndex];

            e.target.parentElement.classList.add('answered'); // Mark question as answered

            if (selectedOptionIndex === question.correctAnswer) {
                e.target.style.backgroundColor = '#d4edda'; // Green for correct
                score++;
            } else {
                e.target.style.backgroundColor = '#f8d7da'; // Red for incorrect
                // Highlight the correct answer
                e.target.parentElement.children[question.correctAnswer].style.backgroundColor = '#d4edda';
            }
            document.getElementById('score-display').textContent = `Score: ${score} / ${totalQuestions}`;
        }
    });

    // --- Initial Load ---
    loadLesson(currentLessonIndex);
});
