import MyImage from './assets/images/me.webp'
import MyIcon from './assets/images/icon.webp'
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { javascript, html, css, reactjs, vue, postgre, bootstrap, golang, mysql, tailwind, nodejs, git, threejs, } from "./assets/tech";
import { waysfood, dewetour } from './assets/projectImage';
export const images = [
    {
        mine: MyImage,

    },
    {
        iconMe: { MyIcon },
    },
];

export const profile = [
    {
        name: 'Malchiram',
        content: "I'm Fullstack Developer ,who uses coding to operate on both Front-end & Back-end system.",
        textAbout: "I'm a dedicated full-stack developer with a strong foundation in both frontend and backend development. With a year of industry experience as a frontend engineer, I have successfully developed and maintained applications that deliver seamless user experiences and efficient backend systems. My passion lies in building scalable, responsive, and robust web solutions, and I enjoy working on both the client and server sides to bring ideas to life. I am always eager to learn and improve, driven by a commitment to high-quality code and a user-centered approach to development.",
        projects: [
            {
                title: 'Ways-food',
                desc: 'Waysfood is my project used React.Js & Golang . this website for make it easily user for orders food from anywhere.',
                vercel: 'https://waysfood-inky.vercel.app',
                github: 'https://github.com/Malchi0403/FinalWaysfood',
                image: waysfood,
                tags: [
                    {
                        name: "react",
                        color: "blue-text-gradient",
                    },
                    {
                        name: "restapi",
                        color: "green-text-gradient",
                    },
                    {
                        name: "golang",
                        color: "pink-text-gradient",
                    },
                ],
            },
            {
                title: 'Dewe-tour',
                desc: 'Dewe-Tour is website offering personalized tour packages for holidaymakers and staycation seekers. User-friendly interface enables easy exploration, booking, and customization of itineraries. Emphasis on transparency reliability, and convenience for an enhanced customer experience.',
                vercel: 'https://dw-tour-final-a15oc8hw8-malchi0403.vercel.app',
                github: 'https://github.com/Malchi0403/dw-tour-final_',
                image: dewetour,
                tags: [
                    {
                        name: "react",
                        color: "blue-text-gradient",
                    },
                    {
                        name: "restapi",
                        color: "green-text-gradient",
                    },
                    {
                        name: "golang",
                        color: "pink-text-gradient",
                    },
                ],
            }
        ]
    }
]

export const social = [
    {
        icon: <FiLinkedin />,
        href: 'https://www.linkedin.com/in/malchiram',
        color: "text-blue-500",
        colorHover: "hover:text-blue-900",
    },
    {
        icon: <FiGithub />,
        href: 'https://github.com/Malchi0403',
        color: "text-white",
        colorHover: "hover:text-gray-500",
    },
    {
        icon: <FiInstagram />,
        href: 'https://www.instagram.com/misaeeeelt',
        color: "text-purple-500",
        colorHover: "hover:text-purple-700",
    },
    {
        icon: <FiFacebook />,
        href: 'https://www.facebook.com/misaeltimpolas',
        color: "text-blue-500",
        colorHover: "hover:text-blue-600",
    },
]

export const navigation = [
    {
        name: 'Home',
        id: 'home',
    },
    {
        name: 'About',
        id: 'about',
    },
    {
        name: 'Projects',
        id: 'project',
    },
    {
        name: 'Contact',
        id: 'contact',
    },
]

export const skills = [
    {
        name: "Javascript",
        icon: javascript,
    },
    {
        name: "Golang",
        icon: tailwind,
    },
    {
        name: "C#",
        icon: bootstrap,
    },
    {
        name: "React JS",
        icon: css,
    },
    {
        name: "Next JS",
        icon: mysql,
    },
    {
        name: "Vue JS",
        icon: postgre,
    },
    {
        name: "Animation 3D",
        icon: golang,
    },
    {
        name: "AWS",
        icon: html,
    },
    {
        name: "Linux System Operation",
        icon: vue,
    },
    {
        name: "CMS",
        icon: threejs,
    },
    {
        name: "Nginx",
        icon: reactjs,
    },
    {
        name: "Git",
        icon: git,
    },
]