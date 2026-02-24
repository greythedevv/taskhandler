📝 Simple To-Do List App

A beginner-friendly JavaScript To-Do List application that allows users to add and delete tasks dynamically using DOM manipulation.

🚀 Features

Add new tasks

Prevent empty tasks from being added

Delete tasks individually

Dynamic DOM updates (no page refresh)

🛠️ Built With

HTML5

CSS3

JavaScript (Vanilla JS)

📂 Project Structure
├── index.html
├── index.css
├── index.js
└── README.md
📌 How It Works

The page loads and waits for the DOM to fully initialize.

When the "Add Task" button is clicked:

The input value is collected.

If the input is empty, nothing happens.

A new <li> element is created.

A Delete button is attached to the task.

Clicking the Delete button removes the task from the list instantly.

💻 How to Run

Clone the repository:

git clone [https://github.com/your-username/your-repo-name.git](https://github.com/greythedevv/taskhandler.git)

Open index.html in your browser.

That’s it 🎉

📖 What I Learned

DOMContentLoaded event

Selecting elements with getElementById

Creating elements dynamically with createElement

Event handling with addEventListener

Removing elements using .remove()

🎯 Future Improvements

Add task completion (strike-through)

Add local storage support

Add edit task feature

Improve UI styling
