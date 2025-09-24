const COURSE_DATA = {
    "week0": [
        {
            path: 'lessons/week0/1_what_is_code.html',
            code: {
                html: `<h1>Hello, World!</h1>\n<p>This is my first line of code.</p>`,
                css: ``,
                js: ``
            },
            quiz: [
                {
                    question: "What is the best description of 'code'?",
                    options: [
                        "A set of instructions for a computer to follow.",
                        "A secret message system.",
                        "A type of computer hardware."
                    ],
                    correctAnswer: 0
                },
                {
                    question: "Which of the following is NOT a primary role of code?",
                    options: [
                        "To solve problems.",
                        "To create websites and applications.",
                        "To design the physical look of a computer."
                    ],
                    correctAnswer: 2
                }
            ]
        },
        {
            path: 'lessons/week0/2_how_websites_work.html',
            code: {
                html: `<h1>My Awesome House</h1>\n\n<p>This is the foundation of my website.</p>`,
                css: ``,
                js: ``
            }
        },
        {
            path: 'lessons/week0/3_your_toolkit.html',
            code: {
                html: `<h1>Hello!</h1>`,
                css: ``,
                js: ``
            }
        },
        {
            path: 'lessons/week0/4_thinking_in_steps.html',
            code: {
                html: `<!-- Try planning your own page here using comments! -->`,
                css: ``,
                js: ``
            }
        }
    ],
    "week1": [
        {
            path: 'lessons/week1/1_document_structure.html',
            code: {
                html: `<!DOCTYPE html>
<html>
    <head>
        <title>My First Page</title>
    </head>
    <body>
        <h1>Hello, Browser Tab!</h1>
    </body>
</html>`,
                css: ``,
                js: ``
            }
        },
        {
            path: 'lessons/week1/2_text_and_headings.html',
            code: {
                html: `<h1>Main Title</h1>
<h2>Subtitle</h2>
<p>
    This is a paragraph. You can make text <strong>bold</strong>,
    <em>italic</em>, or <mark>highlighted</mark>.
</p>
<blockquote>
    <p>This is a famous quote.</p>
    <cite>A. Person</cite>
</blockquote>`,
                css: ``,
                js: ``
            }
        },
        {
            path: 'lessons/week1/3_links_and_attributes.html',
            code: {
                html: `<p>
    Visit <a href="https://www.google.com" target="_blank" title="Go to Google">Google</a>.
</p>
<p>
    Jump to the <a href="#contact">Contact Section</a>.
</p>

<div id="contact" style="margin-top: 500px;">
    <h2>Contact Section</h2>
    <p>Here is my contact info.</p>
</div>`,
                css: ``,
                js: ``
            }
        },
        {
            path: 'lessons/week1/4_images_and_file_paths.html',
            code: {
                html: `<!-- We don't have an images folder yet, so this will show the alt text -->
<img src="images/logo.png" alt="A description of the logo">`,
                css: ``,
                js: ``
            }
        },
        {
            path: 'lessons/week1/5_lists_and_tables.html',
            code: {
                html: `<h3>My Favorite Foods</h3>
<ul>
    <li>Pizza</li>
    <li>Sushi</li>
</ul>

<h3>How to Make Tea</h3>
<ol>
    <li>Boil water</li>
    <li>Add tea bag</li>
    <li>Wait 3 minutes</li>
</ol>`,
                css: ``,
                js: ``
            }
        },
        {
            path: 'lessons/week1/6_structural_elements.html',
            code: {
                html: `<div id="header">
    <h1>My Website</h1>
</div>

<div class="main-content">
    <p>This is the main area of my page.</p>
    <span>This is an inline element.</span>
</div>

<!-- This is a comment -->`,
                css: ``,
                js: ``
            }
        }
    ]
};
