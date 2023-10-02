import {Highlight} from "@/app/Models/Highlight";

export const  mockData : Highlight[]= [
    {
        id: 1,
        title: 'Deployed Full-Stack App on AWS',
        description: 'Developed and deployed a full-stack web application on Amazon Web Services (AWS), utilizing various AWS services.',
        image: 'https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU',
        linkToGithub: 'https://github.com/yourusername/yourproject',
        linkToPDFFile: 'https://example.com/project-report.pdf',
        linkToLiveSite:'https://github.com/yourusername/yourproject',
        challenges: [
            'Managing AWS resources and configurations',
            'Ensuring high availability and scalability',
            'Optimizing cost and performance',
        ],
        skillsUtilized: [
            'AWS (EC2, S3, RDS, Lambda, etc.)',
            'Node.js',
            'Express.js',
            'React',
            'Docker',
            'Database design (MySQL)',
            'Continuous Integration/Continuous Deployment (CI/CD)',
        ],
    },

    {
        id: 2,
        linkToLiveSite:'https://github.com/yourusername/yourproject',
        title: 'Built RESTful API for E-commerce Platform',
        description: 'Designed and implemented a RESTful API for an e-commerce platform, enabling seamless product catalog management and user authentication.',
        image: 'https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU',
        linkToGithub: 'https://github.com/yourusername/ecommerce-api',
        linkToPDFFile: '',
        challenges: [
            'Data modeling and database integration',
            'User authentication and authorization',
            'API testing and documentation',
        ],
        skillsUtilized: [
            'Node.js',
            'Express.js',
            'MongoDB',
            'JWT authentication',
            'Swagger for API documentation',
        ],
    },


    {
        id: 3,
        linkToLiveSite:'https://github.com/yourusername/yourproject',

        title: 'Machine Learning Model for Image Classification',
        description: 'Developed a deep learning model using TensorFlow and Keras for image classification, achieving an accuracy rate of 95% on a benchmark dataset.',
        image: 'https://example.com/ml-image.png',
        linkToGithub: 'https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU',
        linkToPDFFile: '',
        challenges: [
            'Data preprocessing and augmentation',
            'Model training and hyperparameter tuning',
            'Deployment of the model for real-time inference',
        ],
        skillsUtilized: [
            'Python',
            'TensorFlow',
            'Keras',
            'Convolutional Neural Networks (CNN)',
            'Docker',
            'Model deployment (Flask)',
        ],
    }
    ,
    {
        id: 4,
        linkToLiveSite:'https://github.com/yourusername/yourproject',

        title: 'Continuous Integration and Deployment (CI/CD) Pipeline',
        description: 'Implemented a CI/CD pipeline for automating the build, test, and deployment process of multiple projects, reducing manual intervention and ensuring code quality.',
        image: 'https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU',
        linkToGithub: 'https://github.com/yourusername/cicd-pipeline',
        linkToPDFFile: '',
        challenges: [
            'Integration with source control (e.g., GitHub)',
            'Configuring automated tests and code quality checks',
            'Deployment to various environments (staging, production, etc.)',
        ],
        skillsUtilized: [
            'Jenkins',
            'Docker',
            'Shell scripting',
            'Version control (Git)',
            'Infrastructure as Code (IaC)',
        ],
    }
    ,{
        id: 5,
        linkToLiveSite:'https://github.com/yourusername/yourproject',

        title: 'Optimized Database Performance for High-Traffic App',
        description: 'Identified and resolved performance bottlenecks in a high-traffic web application by optimizing database queries, reducing response times by 50%.',
        image: 'https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU',
        linkToGithub: '',
        linkToPDFFile: '',
        challenges: [
            'Query optimization',
            'Database indexing and schema redesign',
            'Monitoring and profiling',
        ],
        skillsUtilized: [
            'SQL (e.g., PostgreSQL)',
            'Database profiling tools',
            'Query optimization techniques',
            'Performance monitoring (e.g., New Relic)',
        ],
    }

]