##Cars Dealership Full-Stack Application##

Project Overview
This project is a full-stack web application developed as part of the IBM Full-Stack Cloud Application Development Capstone.

The application represents a national Cars Dealership platform in the United States. It allows users to browse dealership branches, view dealer details, read customer reviews, and submit new reviews after logging in. Sentiment analysis is applied to customer reviews using natural language processing services.

##Features##
1.View a list of car dealerships
2.Filter dealerships by state
3.View dealer details and customer reviews
4.User registration, login, and logout
5.Submit new reviews for dealerships (authenticated users)
6.Sentiment analysis on submitted reviews
7.Admin management of car makes and models
8.Continuous Integration and Continuous Deployment (CI/CD)
9.Containerized deployment using Docker

##Technology Stack##
Frontend
-React
-HTML5
-CSS3
-JavaScript

##Backend##
-Django (Python)
-Node.js
-Express
-MongoDB
-SQLite

##Cloud & DevOps##
-Docker
-Kubernetes
-GitHub Actions (CI/CD)
-IBM Cloud Code Engine
-IBM Cloud services for deployment and NLP

##Application Architecture##

The application follows a microservices architecture:
-Django handles user authentication, dynamic pages, and proxy services
-Node.js and Express manage dealership and review APIs
-MongoDB stores dealer and review data
-Django models manage car makes and car models
-Sentiment analysis service processes review text

##Functional Highlights##
-Static pages: About Us and Contact Us
-Dynamic dealer listing and filtering
-Review submission workflow
-Admin interface for managing car data
-Automated build and deployment pipeline

##CI/CD Pipeline##

The project includes a GitHub Actions workflow that:
-Builds the application
-Runs required checks
-Builds Docker images
-Deploys the application to IBM Cloud

##How to Run the Application (Development)##

Clone the repository
-Set up the Python virtual environment
-Install backend dependencies
-Start the Django server
-Start the Node.js services
-Access the application via browser

Author
Mak
IBM Full-Stack Cloud Application Development Capstone
GitHub: https://github.com/RanMacSG

License
This project is licensed under the Apache 2.0 License.
