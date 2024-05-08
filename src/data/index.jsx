import {SiFiverr,SiMongodb,SiAdobexd} from 'react-icons/si'
import {AiFillGithub} from 'react-icons/ai'
import {CiLinkedin} from 'react-icons/ci'
import {FaYoutube,FaHtml5,FaCss3Alt,FaBootstrap,
  FaNodeJs,FaPhp,FaPython,FaFigma, FaSketch
} from 'react-icons/fa'
import { RiJavascriptFill ,RiTailwindCssFill} from "react-icons/ri";
import { TbBrandReact,TbBrandReactNative,TbBrandMysql } from "react-icons/tb";
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { IoCallOutline,IoLocationOutline } from 'react-icons/io5';
import { profile2,profile3,profile4,profile5,
          amazon,facebook,google,
         linkedin,microsoft,netflix,paypal,samsung,
         skype, whatsapp, 
         } from '../assets/images'


export const menus = [
    {name:"Home"},
    {name:"About"},
    {name:"Education"},
    {name:"Skills"},
    {name:"Projects"},
    {name:"Clients"},
    {name:"Contact"},
];


export const partners = [
  {
    name:"Amazon",
    logo:amazon,
  },
  {
    name:"Facebook",
    logo:facebook,
  },
  {
    name:"Google",
    logo:google,
  },
  {
    name:"LinkedIn",
    logo:linkedin,
  },
  {
    name:"Microsoft",
    logo:microsoft,
  },
  {
    name:"Netflix",
    logo:netflix,
  },
  {
    name:"PayPal",
    logo:paypal,
  },
  {
    name:"Samsung",
    logo:samsung,
  },
  {
    name:"Skipe",
    logo:skype,
  },
  {
    name:"Whatsapp",
    logo:whatsapp,
  },
]


export const education = [
  {
    schoolName:"University of Abuja",
    dateRange:"2021 - 2022",
    certification:"Bsc Computer Science",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum qui veniam ut molestiae dignissimos aliquid voluptates nesciunt saepe dicta similique natus, velit et explicabo dolor, laudantium hic odit ad. Molestiae!",
  },
  {
    schoolName:"Adinuba Computer School",
    dateRange:"2019 - 2020",
    certification:"Web Development Certifications",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum qui veniam ut molestiae dignissimos aliquid voluptates nesciunt saepe dicta similique natus, velit et explicabo dolor, laudantium hic odit ad. Molestiae!",
  },
  {
    schoolName:"Coursera",
    dateRange:"2016 - 2018",
    certification:"Programming course",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum qui veniam ut molestiae dignissimos aliquid voluptates nesciunt saepe dicta similique natus, velit et explicabo dolor, laudantium hic odit ad. Molestiae!",
  },
  {
    schoolName:"Adinuba Computer School",
    dateRange:"2013 - 2015",
    certification:"Design & Technology",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum qui veniam ut molestiae dignissimos aliquid voluptates nesciunt saepe dicta similique natus, velit et explicabo dolor, laudantium hic odit ad. Molestiae!",
  },
]

export const skills = [
  {
    category:"UI/UX",
    data:[
      {skill:"Figma",progress:80,icon:<FaFigma/>},
      {skill:"Sketch",progress:75,icon:<FaSketch/>},
      {skill:"XD",progress:85,icon:<SiAdobexd/>},
    ]
  },
  {
    category:"Frontend Development",
    data:[
      {skill:"HTML",progress:90,icon:<FaHtml5/>},
      {skill:"CSS",progress:85,icon:<FaCss3Alt/>},
      {skill:"JavaScript",progress:80,icon:<RiJavascriptFill/>},
      {skill:"Tailwind",progress:90,icon:<RiTailwindCssFill/>},
      {skill:"Bootstrap",progress:85,icon:<FaBootstrap/>},
      {skill:"React",progress:85,icon:<TbBrandReact/>},
      {skill:"React Native",progress:75,icon:<TbBrandReactNative/>},
    ]
  },
  {
    category:"Backend Development",
    data:[
      {skill:"Node JS",progress:85,icon:<FaNodeJs/>},
      {skill:"MangoDB",progress:80,icon:<SiMongodb/>},
      {skill:"PHP",progress:80,icon:<FaPhp/>},
      {skill:"Python",progress:75,icon:<FaPython/>},
      {skill:"MySQL",progress:70,icon:<TbBrandMysql/>},
    ]
  },
]


export const projects = [
  {
    name:'Food App',
    description:`adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, 
                 vitae cupiditate totam quia`,
    image:"https://cdn.dribbble.com/users/1615584/screenshots/15710288/media/6c7a695e5d4f0a947b2714c4edb39899.jpg?resize=400x300&vertical=center",
    url:'https://github.com',
  },
  {
    name:'Mobile ecommerce website',
    description:`adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, 
                 vitae cupiditate totam quia`,
    image:"https://s3-alpha.figma.com/hub/file/3191449246/22f98b38-ccd9-4dbf-80c1-41d6ee983dc0-cover.png",
    url:'https://github.com',
  },
  {
    name:'Ride sharing App',
    description:`adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, 
                 vitae cupiditate totam quia`,
    image:"https://miro.medium.com/v2/resize:fit:1400/0*lrz788UiRbPakyVe.png",
    url:'https://github.com',
  },
  {
    name:'WhatsApp Clone',
    description:`adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, 
                 vitae cupiditate totam quia`,
    image:"https://cdn.dribbble.com/userupload/8606261/file/original-591d573b6e1715663cf3c4f29da1f1c5.png?resize=400x0",
    url:'https://github.com',
  },
  {
    name:'Task Management',
    description:`adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, 
                vitae cupiditate totam quia`,
    image:"https://i.pinimg.com/originals/dc/bf/5f/dcbf5f8ba32d8ff36cd30d36a820aa5e.png",
    url:'https://github.com',
  },
  {
    name:'Music And Video Streaming App',
    description:`adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, 
                 vitae cupiditate totam quia`,
    image:"https://cdn.dribbble.com/users/4813218/screenshots/14667363/dribbble_shot_hd_-_1__1_.png",
    url:'https://github.com',
  },
];


export const clients = [
  {
    image:profile2,
    name:'Samuel Eze',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  },
  {
    image:profile3,
    name:'Emmanuel Joseph',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  },
  {
    image:profile4,
    name:'Gloria Chiwendu',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  },
  {
    image:profile5,
    name:'Precious Stone',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  }

];


export const socialHandles = [
  {
    name:"Fiverr",
    icon:<SiFiverr/>,
    link:"",
  },
  {
    name:"Github",
    icon:<AiFillGithub/>,
    link:"",
  },
  {
    name:"LinkedIn",
    icon:<CiLinkedin/>,
    link:"",
  },
  {
    name:"Youtube",
    icon:<FaYoutube/>,
    link:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  },
];
  

export const contactInfo = [
  {
    name:"Email",
    icon:<MdOutlineAlternateEmail />,
    value:"mradinuba@gmail.com",
  },
  {
    name:"Phone",
    icon:<IoCallOutline/>,
    value:"+2347039681695",
  },
  {
    name:"Address",
    icon:<IoLocationOutline/>,
    value:"Gwarinpa, Abuja, Nigeria",
  },
]

export const footer = [
  {
    group:"Hot Links",
    routes:[
      {name:"Home"},
      {name:"About"},
      {name:"Education"},
      {name:"Skills"},
      {name:"Projects"},
      {name:"Clients"},
      {name:"Contact"},
    ]
  },
  {
    group:"Others",
    routes:[
      {name:"Privacy Policy"},
      {name:"Terms and Conditions"},
      {name:"Cookie Policy"},
    ]
  },
  {
    group:"Contacts",
    routes:[
      {
        name:"mradinuba@gmail.com",
        icon:<MdOutlineAlternateEmail />,
      },
      {
        name:"+2347039681695",
        icon:<IoCallOutline/>,
      },
      {
        name:"Gwarinpa, Abuja, Nigeria",
        icon:<IoLocationOutline/>,
      },
    ]
  },
]