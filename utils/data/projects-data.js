import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Nostalgio',
        description: 'A unique app designed to connect music and travel memories by integrating Spotify with geolocation features. Users can create playlists, save memories with locations, and visualize them on a memory map. The app uses a combination of cloud-based services for authentication, database management, image storage, and geolocation APIs. Future goals include AR integration and social features.',
        techStack: [
            'Cognito (Authentication)', 
            'DynamoDB (NoSQL Database)', 
            'Lambda (Serverless Functions)', 
            'API Gateway (REST APIs)', 
            'S3 (File Storage)', 
            'Cloudinary (Image Processing)', 
            'Google Maps API (Geolocation)', 
            'React Native', 
            'Spotify API', 
            'Serverless Framework'
        ],
        role: 'Full Stack Developer',
        code: 'https://github.com/andresgrc/nostalgio',
        demo: '',
        image: '', // Add the actual image path
        source: 'https://github.com/acm-projects/Nostalgio', // Placeholder, replace with actual site if deployed
    },
    {
        id: 2,
        name: 'Smart-Brain App',
        description: 'A facial recognition web app where users can submit images, and the app highlights faces in the photo. Built with React, Node.js, and Clarifai API for image recognition, with authentication managed using PostgreSQL and bcrypt.',
        techStack: ['React', 'Node.js', 'PostgreSQL', 'Clarifai API', 'Express', 'bcrypt', 'Render'],
        role: 'Full Stack Developer',
        code: 'https://github.com/andresgrc/smart-brain',
        demo: '',
        image: '', // Add the actual image path
        source: 'https://smart-brain-frontend-kw4t.onrender.com/', // Placeholder, replace with actual site if deployed
    },
    {
        id: 3,
        name: 'RoboFriends',
        description: 'A responsive React app built to showcase a list of robots fetched via an API. Users can search through the robot names using a dynamic search bar. It is optimized for performance and developed using Vite for fast builds.',
        techStack: ['React', 'Vite', 'API Integration', 'CSS'],
        role: 'Frontend Developer',
        code: 'https://github.com/andresgrc/roboSearchVite',
        demo: '',
        image: 'robofriends.png', // Add the actual image path
        source: 'https://andresgrc.github.io/roboSearchVite', // Placeholder, replace with actual site if deployed
    },
    {
        id: 4,
        name: 'Picture-in-Picture App',
        description: 'A simple web app that allows users to select a screen or window and enable Picture-in-Picture mode. Built using modern JavaScript APIs like `getDisplayMedia` and `requestPictureInPicture` for seamless multitasking.',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        role: 'Frontend Developer',
        code: 'https://github.com/andresgrc/picture-in-picture',
        demo: '',
        image: '', // Add the actual image path
        source: 'andresgrc.github.io/picture-in-picture', // Placeholder, replace with actual site if deployed
    },
    {
        id: 5,
        name: 'Ping Pong Game',
        description: 'A classic Pong game implemented in JavaScript using the HTML5 Canvas API. Features include dynamic paddle control, responsive computer AI, and increasing difficulty as the ball speed increases. Designed for both desktop and mobile browsers.',
        techStack: ['HTML5', 'CSS', 'JavaScript', 'Canvas API'],
        role: 'Frontend Developer',
        code: 'https://github.com/andresgrc/ping-pong',
        demo: '',
        image: '', // Add the actual image path
        source: 'https://andresgrc.github.io/ping-pong', // Placeholder, replace with actual site if deployed
    },
    {
        id: 6,
        name: 'Enhanced Video Player',
        description: 'A custom-built video player with enhanced features, allowing users to load YouTube videos via URL. Integrated with the YouTube IFrame API for smooth playback and a polished UI with modern styling.',
        techStack: ['HTML', 'CSS', 'JavaScript', 'YouTube IFrame API'],
        role: 'Frontend Developer',
        code: 'https://github.com/andresgrc/youtube-video-player',
        demo: '',
        image: '', // Add the actual image path
        source: 'https://andresgrc.github.io/youtube-video-player', // Placeholder, replace with actual site if deployed
    },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },