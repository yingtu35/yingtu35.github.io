// GitHub Issues Manager
import githubIssuesManagerLogo from "../images/issues-manager/issues-logo.jpg"
import githubIssuesManagerDashboard from "../images/issues-manager/issues-dashboard.jpg"
import githubIssuesManagerForm from "../images/issues-manager/issues-form.jpg"

// eBay Search
import ebaySearchHome from "../images/eBay-search/search-form-min.png"
import ebaySearchResult from "../images/eBay-search/search-result-min.png"
import ebaySearchProduct from "../images/eBay-search/product-detail-min.png"
// BlogApp
import blogAppLogo from "../images/blog-app/blogAppLogo.png"
import blogAppLogin from "../images/blog-app/blogAppLogin.png"
import blogAppBlogs from "../images/blog-app/blogAppBlogs.png"
// Rate Repository
import rateRepositoryLogo from "../images/rate-repository/rateRepoLogo-min.png"
import rateRepositoryHome from "../images/rate-repository/rateRepoHome-min.png"
import rateRepositoryRepo from "../images/rate-repository/rateRepoRepo-min.png"
// Lets Chat
import letsChatLogo from "../images/lets-chat/LetsChatLogo.png"
import letsChatLobby from "../images/lets-chat/LetsChatLobby-min.png"
import letsChatRoom from "../images/lets-chat/LetsChatRoom-min.png"
// Don't touch the wall
import DontTouchTheWallLogo from "../images/dont-touch-the-wall/game_menu.PNG"
import level_1 from "../images/dont-touch-the-wall/level_1.png"
import level_2 from "../images/dont-touch-the-wall/level_2.png"
// Web Calculator
import webCalculatorImage from "../images/web-calculator/web-calculator.png"
import calculatorImage from "../images/web-calculator/screenshot.png"

// Christmas Attractions Map
import christmasMapLogo from "../images/christmas-map/ChristmasLogo.png"
import christmasMap1 from "../images/christmas-map/ChristmasMap1-min.png"
import christmasMap2 from "../images/christmas-map/ChristmasMap2-min.png"
// House Prediction
import analysis from "../images/house-price-predictions/analysis.png"
import loss from "../images/house-price-predictions/loss.png"
// TodoList
import todoListMain from "../images/todo-list/todo-list-main.png"
import todoListSignup from "../images/todo-list/todo-list-signup.png"
// JustPostIt
import justPostItLogo from "../images/just-post-it/just-post-it.PNG"
import justPostItInput from "../images/just-post-it/just-post-it-input.PNG"
// Space Invaders
import gameplay from "../images/space-invaders/screenshot_1.png"
import gameover from "../images/space-invaders/gameover.PNG"
import spaceInvaderImage from "../images/space-invaders/screenshot_2.png"
// Music Paradise

export const projects = [
  {
    title: "GitHub Issues Manager",
    type: "Web",
    createdAt: new Date(2024, 3),
    logo: githubIssuesManagerLogo,
    src: [githubIssuesManagerDashboard, githubIssuesManagerForm],
    description: `A simple issue manager website for your GitHub repositories 
    The app is created with Next.js, TypeScript and TailwindCSS. Treating issues as blogs, users can create, edit, and close on issues. Users can also view all the issues in a list view, and click on each issue to view the details.`,
    bulletpoints: [
      "Server-side rendering with Next.js",
      "Type-safe with TypeScript",
      "Responsive design with TailwindCSS",
      "OAuth 2.0 for GitHub authentication",
    ],
    footer: "Learn more by trying the app!",
    link: "https://issues-manager-zeta.vercel.app/"
  },
  {
    title: "eBay Search Mobile App",
    type: "Mobile",
    createdAt: new Date(2023, 12),
    logo: ebaySearchHome,
    src: [ebaySearchResult, ebaySearchProduct],
    description: `As a course project, eBay Search Mobile app is a android mobile application for searching products on eBay. 
    The app features a customized search form and easy-to-view product page for product information. A wish list is also available for users to save their favorite products.`,
    bulletpoints: [
      "Android app development with Java",
      "REST API for handling request",
    ],
    footer: "Credits to Chi-Ting Hou for helping me with the project.",
    link: "https://github.com/yingtu35/eBay_Search_app"
  },
  {
    title: "Blog App",
    type: "Web",
    logo: blogAppLogo,
    src: [blogAppLogin, blogAppBlogs],
    createdAt: new Date(2023, 4),
    description: "Wanna share your blogs? You have come to thr right place! Blog App is a awesome blog platform to share yourself with the world!",
    bulletpoints: [
      "Created a full-stack application with React, Express.js, Node.js, and MongoDB for users to view, post, and share blogs",
      "Containerized the app with Docker for quick development and deployment",
      "Automated testing and linting with GitHub Actions to ensure software quality and shorten overall time by 50%"
    ],
    footer: "Learn more in the git repository!",
    link: "https://github.com/yingtu35/blogApp"
  },
  {
    title: "Rate Repository",
    type: "Mobile",
    logo: rateRepositoryLogo,
    src: [rateRepositoryHome, rateRepositoryRepo],
    createdAt: new Date(2023, 6),
    description: "Rate Repository is a mobile application to search, view, rate, comment GitHub repositories (currently offline) with a single touch.",
    bulletpoints: [
      "Designed a front-end view using React Native and Apollo Client to search, rate, comment, and link to mock GitHub repositories",
      "Utilized caching for data retrieval to lower 20% network requests, debouncing to reduce page re-render on repository searching, and pagination for a responsive interface",
    ],
    footer: "Try it and you'll like it!",
    link: "https://github.com/yingtu35/Rate-Repository-App"
  },
  {
    title: "Let's Chat",
    type: "Web",
    logo: letsChatLogo,
    src: [letsChatLobby, letsChatRoom],
    createdAt: new Date(2023, 3),
    description: "Lets-Chat is a web application built on React and Flask. Using WebSocket protocol, users can chat easily in chat rooms they create or from other users.",
    bulletpoints: [
      "Built a full-stack chatting app with React for frontend design, SocketIO for bidirectional communication, Flask and MySQL for backend and database",
      "Leveraged Google SSO feature for fast authentication, decreasing sign-up and login time by 80%",
    ],
    footer: "Let's chat together!",
    link: "https://github.com/yingtu35/Lets-Chat"
  },
  {
    title: "Don't Touch the Wall",
    type: "Game",
    logo: DontTouchTheWallLogo,
    src: [level_1, level_2],
    createdAt: new Date(2022, 7),
    description: "Don't Touch The Wall is a game built to challenge your abilities of judgment, speed, and experience! You have to move the ball from the starting line to the end without touching any of the walls in the game. Also, be careful of the timer! The game has a total of 3 levels and the difficulty gets crazy level after level. Can you pass all of them?",
    bulletpoints: [
      "Used Object-oriented programming language Jack to build the game",
      "Transformed high-level language into low-level machine code with self-made compiler and VM translator",
    ],
    footer: "I felt accomplished to have completed this game project from the online course called “Build a Modern Computer from First Principles: From Nand to Tetris” created by Shimon Schocken and Noam Nisan. From the very basics of Gate Logic, I built on the knowledge to learn more complex components, such as ALU, RAM, and finally the CPU. In addition, the course also taught me the process of transforming high-level language into low-level machine code, by letting us build tools such as compilers, virtual machines, and assemblers by ourselves! It was a long journey and I enjoyed it a lot. If you want to be able to build a game like me and also learn what the computer does behind the screen, I highly recommend this course.",
    link: "https://github.com/yingtu35/Dont-Touch-The-Wall"
  },
]

export const moreProjects = [
  // TODO: change description of Youtube-Clone"
  {
    title: "Web Calculator",
    type: "Web",
    logo: webCalculatorImage,
    src: [calculatorImage],
    createdAt: new Date(2023, 1),
    description: "This app features a simple web calculator written in HTML, CSS, and vanilla JavaScript. It supports basic arithmetic calculations, including addition, subtraction, multiplication, and division. It also supports the toggle positive/negative button and percent button. The logic of the calculator is meant to mimic the iPhone built-in calculator, but I add a \"backspace\" button to enhance the usability of the calculator.",
    bulletpoints: [
      "Designed a full-fledged calculator with HTML, CSS for displaying pages, and JavaScript for complex logic",
    ],
    footer: "Have a try at the calculator, I am sure you will be pleased!",
    link: "https://github.com/yingtu35/Web-Calculator"
  },
  {
    title: "Youtube Clone",
    type: "Web",
    createdAt: new Date(2023, 9),
    src: [todoListSignup, todoListMain],
    description: `Youtube Clone is a user-friendly web application built on Next.js with TypeScript. 
    It offers seamless integration with Google OAuth for hassle-free sign-ins. 
    Users can explore an extensive library of uploaded videos and effortlessly upload their own content upon authentication. 
    Enjoy a streamlined experience with intuitive browsing and straightforward video sharing capabilities.`,
    bulletpoints: [
      "full-stack web development with React and FastAPI",
      "JWT authentication",
    ],
    footer: "Empower Your Video Journey with Youtube Clone!",
    link: "https://github.com/yingtu35/youtube-clone"
  },
  {
    title: "TodoList",
    type: "Web",
    createdAt: new Date(2022, 12),
    src: [todoListSignup, todoListMain],
    description: `Todo List is a web application that uses basic CRUD operations for accessing and storing users' to-do lists. 
    This app is built on the React.js framework as the frontend and FastAPI as the backend. 
    The app features a user account system that each user can create and modify their own to-do lists. 
    OAuth 2.0 is applied so that the risks of securities are minimized.`,
    bulletpoints: [
      "full-stack web development with React and FastAPI",
      "JWT authentication",
    ],
    footer: "Got something to do? Use TodoList!",
    link: "https://github.com/yingtu35/Todo-List"
  },
  {
    title: "JustPostIt",
    type: "Web",
    createdAt: new Date(2022, 12),
    logo: justPostItLogo,
    src: [justPostItInput],
    description: `Just Post It is a web application that helps you remember tasks, schedules, homework assignments, meeting appointments, etc 
    by putting yellowish cards on your browser. It is built on the React.js framework as the frontend and Django as the backend. 
    The app uses Django to provide a REST API for the frontend application, and it uses lightweight SQLite3 databases to store user data.`,
    bulletpoints: [
      "full-stack web development with React and Django",
      "rest api for handling request",
    ],
    footer: `This is the first app that I created all by myself as a side project to practice my full-stack web development skills, 
    as well as hone my programming skills in both JavaScript and Python. 
    The design of the page is far from perfect but at least it is working!`,
    link: "https://github.com/yingtu35/Just-Post-It"
  },
  {
    title: "Housing Prediction",
    type: "ML",
    createdAt: new Date(2022, 10),
    src: [analysis, loss],
    description: "This is a self-motivated project to predict the house prices from 1,500 houses with each having 72 features. In the project, I significantly enhanced my skills in:",
    bulletpoints: [
      "Data analysis",
      "Data preprocessing",
      "Machine learning model building",
      "Model hyperparameters tuning"
    ],
    footer: "I also get a good amount of practice in multiple Python third-party libraries such as Numpy, Pandas, Matplotlib.",
    link: "https://github.com/yingtu35/House-Prices-Prediction-AI"
  },
  {
    title: "Music Paradise",
    type: "Web",
    createdAt: new Date(2022, 11),
    src: [],
    description: `Music Paradise is a collaborative music controlling web application
    You can be a host, create a room, and invite your friends to join by sharing the room code.
    When creating the room, you can specify whether you allow your guests to control the music.`,
    bulletpoints: [
      "Developed a full-stack web music controller with React and Django for users to collaboratively view or choose music being played",
      "Integrated Spotify Web API into backend system for user authentication, authorization, and music control",
    ],
    footer: "Learn more about Music Paradise in the link below",
    link: "https://github.com/yingtu35/Space-Invaders"
  },
  {
    title: "Space Invaders",
    type: "Game",
    logo: spaceInvaderImage,
    createdAt: new Date(2022, 7),
    src: [gameplay, gameover],
    description: `Space Invaders is a classic arcade video game built using a functional programming language called Beginning Student Language (BSL).
    In the game, the space invaders keep randomly jamming into the screen. 
    As the guardian of the human race, use your tank and missiles to save us!`,
    bulletpoints: [
      "Functional programming paradigm",
      "Write tests for software quality and consistency",
      "Domain analysis for game creation",
    ],
    footer: `Hope you enjoy the game. Feel free to check my source code below.`,
    link: "https://github.com/yingtu35/Space-Invaders"
  },
  {
    title: "Christmas Attractions Map",
    type: "Desktop",
    logo: christmasMapLogo,
    src: [christmasMap1, christmasMap2],
    createdAt: new Date(2022, 1),
    description: "Christmas Attractions Map is a team project of the Fall 2021 ccClub online Python courses. It features a map rich of Christmas Attractions in Taiwan.",
    bulletpoints: [
      "Led a team of four members to develop a Christmas Attractions-oriented map in Taiwan using Selenium, Folium, and wxPython",
      "Assigned tasks and orchestrated collaboration by verifying data coherence; Completed project one week ahead of schedule",
    ],
    footer: "Let's find out where to go on Christmas!",
    link: "https://github.com/yingtu35/Christmas-Attractions-Map"
  },
]