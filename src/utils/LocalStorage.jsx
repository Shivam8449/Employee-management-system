localStorage.clear()

const employees = [
  {
    "id": "1",
    "firstName": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Prepare Monthly Report",
        "taskDescription": "Prepare the report for the department's performance this month.",
        "taskDate": "2025-03-15",
        "category": "Reporting",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Client Meeting",
        "taskDescription": "Meeting with the client to discuss new project requirements.",
        "taskDate": "2025-03-18",
        "category": "Meeting",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Complete Onboarding",
        "taskDescription": "Complete the employee onboarding process for the new hire.",
        "taskDate": "2025-03-20",
        "category": "Onboarding",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": "2",
    "firstName": "Isha",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Website Maintenance",
        "taskDescription": "Fix bugs and improve the performance of the website.",
        "taskDate": "2025-03-16",
        "category": "Technical",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Social Media Post",
        "taskDescription": "Create and schedule the next social media post for the company.",
        "taskDate": "2025-03-17",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Review Sales Data",
        "taskDescription": "Analyze and review the sales data for the last quarter.",
        "taskDate": "2025-03-22",
        "category": "Analysis",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Team Training Session",
        "taskDescription": "Conduct a training session for the team on the new software.",
        "taskDate": "2025-03-25",
        "category": "Training",
        "active": false,
        "newTask": true,
        "completed": true,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 3,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": "3",
    "firstName": "Ravi",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Prepare Presentation",
        "taskDescription": "Create a presentation for the upcoming conference.",
        "taskDate": "2025-03-10",
        "category": "Presentation",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Project Update",
        "taskDescription": "Provide an update on the current project's status to the team.",
        "taskDate": "2025-03-12",
        "category": "Project Management",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "Customer Feedback",
        "taskDescription": "Collect and analyze customer feedback from the survey.",
        "taskDate": "2025-03-14",
        "category": "Feedback",
        "active": false,
        "newTask": true,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Email Campaign",
        "taskDescription": "Create and send an email campaign to potential clients.",
        "taskDate": "2025-03-20",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 3,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": "4",
    "firstName": "Priya",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Schedule Interviews",
        "taskDescription": "Schedule interviews for the new position opening.",
        "taskDate": "2025-03-11",
        "category": "Recruitment",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Inventory Check",
        "taskDescription": "Perform a physical check of the office supplies and inventory.",
        "taskDate": "2025-03-13",
        "category": "Inventory",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Supplier Negotiation",
        "taskDescription": "Negotiate with suppliers for better contract terms.",
        "taskDate": "2025-03-18",
        "category": "Procurement",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": "5",
    "firstName": "Neha",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Develop New Feature",
        "taskDescription": "Develop a new feature for the upcoming product release.",
        "taskDate": "2025-03-14",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Fix Bugs",
        "taskDescription": "Fix the bugs reported in the latest software version.",
        "taskDate": "2025-03-16",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Code Review",
        "taskDescription": "Review the code submitted by the team for the new feature.",
        "taskDate": "2025-03-17",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Prepare Deployment Plan",
        "taskDescription": "Prepare the plan for the next software deployment.",
        "taskDate": "2025-03-19",
        "category": "Deployment",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Documentation Update",
        "taskDescription": "Update the software documentation for the new version.",
        "taskDate": "2025-03-22",
        "category": "Documentation",
        "active": false,
        "newTask": true,
        "completed": true,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 3,
      "newTask": 2,
      "completed": 2,
      "failed": 0
    }
  }
];

  

    const admin =[{
      "id": "1",
      "email": "admin@example.com",
      "password": "123"
    }]
  



    export const setLocalStorage = ()=>{
        localStorage.setItem('employees', JSON.stringify(employees))
        localStorage.setItem('admin', JSON.stringify(admin))
    }

    export const getLoacalStorage = ()=>{
        const employees = JSON.parse(localStorage.getItem('employees'))
        const admin = JSON.parse(localStorage.getItem('admin'))
          return {employees, admin}
    }