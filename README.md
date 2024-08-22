# NextFinance 🏦

NextFinance is a modern Finance Tracker application built using Next.js 14, Tailwind CSS, and Firebase. It provides an easy-to-use interface for tracking income and expenses with features like user authentication, secure data storage, protected routes, and responsive design.

## Features ✨

- **User Authentication**: Secure login using Google Authentication with Firebase.
- **Expense Tracking**: Track multiple expense categories with a detailed history of individual transactions.
- **Income Management**: Manage your income sources with a detailed transaction history.
- **Real-Time Data Storage**: Uses Firebase Firestore to securely store and retrieve data in real-time.
- **Responsive Design**: Styled with Tailwind CSS to provide a responsive and visually appealing UI.
- **Charts and Statistics**: Visualize your expenses with dynamic charts.

## Screenshots 📸

![NextFinance Cover](./public/nextfinance-cover.png)

## Getting Started 🚀

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v14 or later)
- **npm** (v6 or later)
- **Firebase Account**: Set up Firebase for authentication and Firestore database.

### Installation

1. **Clone the Repository:**

   git clone https://github.com/mdzohairansari/NextFinance.git
   cd NextFinance

   Install Dependencies:
  npm install
  Set Up Firebase:
  
  Create a Firebase project.
  
  Enable Google Authentication.
  
  Set up Firestore with the necessary collections (income and expenses).
  
  Add your Firebase configuration to a .env.local file in the root of your project:
  
  NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
  NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
  NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
  Run the Application:
  
  npm run dev
  Visit http://localhost:3000 in your browser to see the application in action.

Project Structure 📁
/components: Reusable React components like Modal, ExpenseCategoryItem, and others.
/lib: Utility functions and context providers (finance-context.js, auth-context.js).
/pages: Contains Next.js pages like index.js, and _app.js.
/public: Static assets like images, favicons, and configuration files.
/styles: Global CSS styles using Tailwind CSS.

Contributing 🤝
Contributions are welcome! Feel free to open issues or submit pull requests to help improve this project.

Steps to Contribute:
Fork the repository.
Create a new branch for your feature or bug fix:

git checkout -b feature-name
Make your changes and commit them:

git commit -m "Description of changes"
Push your changes to your forked repository:

git push origin feature-name
Open a pull request against the main branch.

Acknowledgements 🙌
Next.js
Tailwind CSS
Firebase
Feel free to customize this README.md file further to suit your specific needs. Happy coding! 💻

### Key Sections:

- **Project Overview**: Explains what the project is and its key features.
- **Getting Started**: Instructions for setting up and running the project locally.
- **Project Structure**: An overview of the file organization.
- **Contributing**: Guidelines for contributing to the project.
- **Acknowledgements**: Credit to the tools and platforms used in the project.
