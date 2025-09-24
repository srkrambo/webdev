document.addEventListener('DOMContentLoaded', () => {
    const htmlEditor = document.getElementById('html-editor');
    const cssEditor = document.getElementById('css-editor');
    const jsEditor = document.getElementById('js-editor');
    const previewPane = document.getElementById('preview-pane');
    const runButton = document.getElementById('run-button');
    const tabsContainer = document.querySelector('.editor-tabs');
    const editorPanes = document.querySelectorAll('.editor-pane');
    const tabButtons = document.querySelectorAll('.tab-button');

    // Function to update the preview pane
    const updatePreview = () => {
        const htmlCode = htmlEditor.value;
        const cssCode = cssEditor.value;
        const jsCode = jsEditor.value;

        const sourceDocument = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>${cssCode}</style>
            </head>
            <body>
                ${htmlCode}
                <script>${jsCode}<\/script>
            </body>
            </html>
        `;
        previewPane.srcdoc = sourceDocument;
    };

    // Event listener for the run button
    runButton.addEventListener('click', updatePreview);

    // Event listener for tab switching
    tabsContainer.addEventListener('click', (e) => {
        if (e.target.matches('.tab-button')) {
            const targetTab = e.target.dataset.tab;

            // Update active state for buttons
            tabButtons.forEach(button => {
                button.classList.toggle('active', button.dataset.tab === targetTab);
            });

            // Update active state for panes
            editorPanes.forEach(pane => {
                pane.classList.toggle('active', pane.id.startsWith(targetTab));
            });
        }
    });

    // Optional: A simple initial render
    updatePreview();
});
