# Employee Management System

This is a simple **Employee Management System** built using **React.js** and **JavaScript**. The system allows administrators to assign tasks to employees. The application stores data locally in the browser using the **Local Storage** API to ensure task and employee information persists even after a page refresh.

## Features

- **Add Employee**: Add new employees with basic information (name, position).
- **Assign Tasks**: Assign tasks to employees and set deadlines.
- **View Tasks**: View a list of all tasks assigned to employees.
- **Login System**: Admin and employees can log in with their respective credentials.
- **Data Persistence**: Employee and task data are stored in the browser's local storage.

## Technologies Used

- **Frontend**: React.js, JavaScript, HTML, CSS
- **Data Storage**: Local Storage (browser)

## Installation

To set up and run this project locally, follow the steps below:

### 1. Clone the repository:

```bash
git clone https://github.com/Shivam8449/Employee-management-system.git
2. Install dependencies:
Navigate to the project directory and install the necessary dependencies:

cd Employee-management-system
npm install
3. Run the application:
Start the development server:

npm start
This will launch the app on http://localhost:3000/.

Usage

1. Login:
The system requires a login to access the functionalities. There are two types of user roles:
Admin: The admin can add employees, assign tasks, and view all tasks.
Employee: Employees can view the tasks assigned to them after logging in.
Login Credentials:

Admin:
Username: admin@example.com
Password: 123
Employee:
Username: employee1@example.com
Password: 123
2. Assign Tasks:
Once you add an employee, you can assign tasks to them by entering the task description and deadline, and clicking the "Assign Task" button.
3. View Tasks:
Both Admin and Employee can view the tasks assigned to the employees.
Admin can see all the tasks for all employees, while an Employee can only see their own tasks.
4. Data Persistence:
The data (employees and tasks) are stored in the browser's local storage. This means the information will persist across page reloads and sessions, unless the local storage is cleared manually.
Data Persistence

All data, including employee details and tasks, are stored in the browser’s localStorage. This allows the data to persist even if the page is refreshed or the browser is closed and reopened.

To clear the data, you can open the browser's Developer Tools (usually by pressing F12), go to the Application or Storage tab, and clear the local storage for this website.

Contributing

Contributions are welcome! If you'd like to contribute to this project, fork the repository, create a new branch, and submit a pull request with your changes.

License

This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments

Special thanks to React.js Documentation for the excellent resources and documentation.
Thanks to the MDN Web Docs for localStorage documentation and usage examples.

### Key Updates:
1. **React.js and JavaScript**: The README now specifies that the project is built using **React.js** and **JavaScript**.
2. **Login Credentials**: A section has been added for logging in as **Admin** and **Employee**, including default credentials.
3. **Features**: Describes the task assignment and login features in detail.
4. **Data Persistence**: Emphasizes how local storage is used to persist data across sessions.

Let me know if you'd like to adjust anything further or add additional details!

Live view:  https://luxury-froyo-8f3de9.netlify.app