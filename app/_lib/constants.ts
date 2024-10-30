import { FaReact, FaGitAlt, FaPython, FaJava, FaHtml5, FaJsSquare, FaNodeJs } from "react-icons/fa";
import { SiCplusplus, SiVisualstudiocode, SiArduino, SiPycharm, SiIntellijidea, SiEclipseide, SiR, SiMongodb, SiSqlite, SiFirebase, SiTailwindcss } from "react-icons/si";
export const techCardsItems = [
  {
    name: "Python",
    description: "High-level language",
    imageUrl: "/imgs/logos/python.svg",
    bgColor: "bg-[#3776AB]/20",
    icon: FaPython,
  },
  {
    name: "Java",
    description: "OOP language",
    imageUrl: "/imgs/logos/java.svg",
    bgColor: "bg-[#007396]/20",
    icon: FaJava,
  },
  {
    name: "JavaScript",
    description: "High-level, compiled language",
    imageUrl: "/imgs/logos/javascript.svg",
    bgColor: "bg-[#F7DF1E]/20",
    icon: FaJsSquare,
  },
  {
    name: "HTML/CSS",
    description: "Markup and styling languages",
    imageUrl: "/imgs/logos/htmlcss.svg",
    bgColor: "bg-[#E34F26]/20",
    icon: FaHtml5,
  },
  {
    name: "Tailwind",
    description: "CSS framework",
    imageUrl: "/imgs/logos/tailwind.svg",
    bgColor: "bg-[#0EA5E9]/20",
    icon: SiTailwindcss,
  },
  {
    name: "SQLite",
    description: "Database management system",
    imageUrl: "/imgs/logos/sqlite.svg",
    bgColor: "bg-[#003B57]/20",
    icon: SiSqlite,
  },
  {
    name: "Firebase",
    description: "Mobile and web development",
    imageUrl: "/imgs/logos/firebase.svg",
    bgColor: "bg-[#FFCA28]/20",
    icon: SiFirebase,
  },
  {
    name: "MongoDB",
    description: "NoSQL database program",
    imageUrl: "/imgs/logos/mongodb.svg",
    bgColor: "bg-[#47A248]/20",
    icon: SiMongodb,
  },
  {
    name: "React",
    description: "JavaScript library",
    imageUrl: "/imgs/logos/react.svg",
    bgColor: "bg-[#61DAFB]/20",
    icon: FaReact,
  },
  {
    name: "Node.js",
    description: "JavaScript runtime",
    imageUrl: "/imgs/logos/nodejs.svg",
    bgColor: "bg-[#339933]/20",
    icon: FaNodeJs,
  },
  {
    name: "Git",
    description: "Version control system",
    imageUrl: "/imgs/logos/git.svg",
    bgColor: "bg-[#F1502F]/20",
    icon: FaGitAlt,
  },
  {
    name: "Visual Studio Code",
    description: "Source-code editor",
    imageUrl: "/imgs/logos/vscode.svg",
    bgColor: "bg-[#007ACC]/20",
    icon: SiVisualstudiocode,
  },
  {
    name: "PyCharm",
    description: "Python IDE",
    imageUrl: "/imgs/logos/pycharm.svg",
    bgColor: "bg-[#000000]/20",
    icon: SiPycharm,
  },
  {
    name: "IntelliJ IDEA",
    description: "Java IDE",
    imageUrl: "/imgs/logos/intellij.svg",
    bgColor: "bg-[#000000]/20",
    icon: SiIntellijidea,
  },
  {
    name: "Eclipse",
    description: "Java IDE",
    imageUrl: "/imgs/logos/eclipse.svg",
    bgColor: "bg-[#2C2255]/20",
    icon: SiEclipseide,
  },
  {
    name: "Arduino",
    description: "Electronics platform",
    imageUrl: "/imgs/logos/arduino.svg",
    bgColor: "bg-[#00979D]/20",
    icon: SiArduino,
  },
];

export const portfolioProjects = [
  {
    id: "relaxEDAI",
    heading: "RelaxED AI",
    subheading: "Manage stress, improve productivity and health",
    description:
      "Second place in best hardware hack at Hack the Hill II! Our project, RelaxED AI, was inspired by our experiences as STEM students constantly juggling busy schedules, often leading to academic stress. RelaxED AI directly helps students manage that stress by tracking stress-related metrics and providing a fine-tuned AI chatbot to offer guidance on managing and reducing stress.",
    imageUrl: "/imgs/projects/relaxEDAI.png",
    techStack: [
      "React",
      "MongoDB",
      "TypeScript",
      "Express",
      "Node",
      "Python",
      "C",
    ],
    liveDemoUrl: "https://devpost.com/software/relaxed-ai",
    sourceCodeUrl: "https://github.com/MarcVidalCodes/HTH-RelaxEDAI",
  },
  {
    id: "terraSphere",
    heading: "TerraSphere",
    subheading: "Help make the planet green",
    description:
      "A project submitted to Terrahacks. TerraSphere encourages users to live an eco-friendly and sustainable lifestyle by rewarding users with points when they take photos of eco-friendly activities. Gain a streak when snapping pics multiple days in a row, which multiplies your score, further incentivizing users to be sustainable every day. Redeem points for cool eco-related rewards!",
    imageUrl: "/imgs/projects/terraSphere.png",
    techStack: [
      "ReactNative",
      "Redux Toolkit",
      "TailwindCSS",
    ],
    liveDemoUrl: "https://devpost.com/software/terrasphere",
    sourceCodeUrl: "https://github.com/MarcVidalCodes/TerraSphere",
  },
  {
    id: "armbot",
    heading: "Arduino Armbot",
    subheading: "3D printed robotic arm controlled by Arduino",
    description:
      "Designed the base and arms of the robot using CAD. Used Arduino electronics, servo motors, joysticks along with 3D printed parts to put together. Code written in C++ using Arduino.",
    imageUrl: "/imgs/projects/armbot.jpg",
    techStack: [
      "Arduino",
      "C++",
      "CAD",
    ],
    liveDemoUrl: "",
    sourceCodeUrl: "https://github.com/Aneesh05/3DPrintedArmBot",
  },
  {
    id: "dice",
    heading: "Arduino Dice",
    subheading: "3D printed Dice controlled by Arduino",
    description:
      "Die created with Arduino, various electrical components, and 3d parts. Wave hand over infrared sensor to play a short jingle and start rolling sequence.",
    imageUrl: "/imgs/projects/dice.jpg",
    techStack: [
      "Arduino",
      "C++",
      "CAD",
    ],
    liveDemoUrl: "",
    sourceCodeUrl: "https://github.com/Aneesh05/3DPrintedDice",
  },
  {
    id: "lineFollow",
    heading: "Line-Following Robot",
    subheading: "Robot that follows a black line on a white surface",
    description:
      "3-D printing Robot that follows a black line on a white surface. Designed with CAD and put together with arduino electronics, DC motors,ultrasonic sensors and more.",
    imageUrl: "/imgs/projects/lineFollow.jpg",
    techStack: [
      "Arduino",
      "C++",
      "CAD",
    ],
    liveDemoUrl: "",
    sourceCodeUrl: "https://github.com/Aneesh05/LineFollowingRobot",
  },
  {
    id: "dancingRobot",
    heading: "Dancing Robot",
    subheading: "Robot that dances to Star Wars Imperial March",
    description:
      "3D printed robot that dances to Star Wars Imperial March. Designed with CAD and put together with arduino electronics, servo motors as well as an ultrasonic sensor.",
    imageUrl: "/imgs/projects/dancingRobot.jpg",
    techStack: [
      "Arduino",
      "C++",
      "CAD",
    ],
    liveDemoUrl: "https://youtu.be/aPNmQgB2trs?si=tVEZ-fX26bTFSjDW",
    sourceCodeUrl: "",
  },
];

