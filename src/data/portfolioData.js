import { Feather, Github, LayoutPanelTop, Microchip, Wifi, Zap, Code2 } from 'lucide-react'
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.jpg"
import img6 from "../assets/6.jpg"
import img7 from "../assets/7.jpg"
import img8 from "../assets/8.png"
import img9 from "../assets/9.png"
export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export const skillGroups = [
  {
    title: 'Frontend',
    icon: Code2,
    items: [
      { name: 'HTML', icon: Code2 },
      { name: 'CSS', icon: Code2 },
      { name: 'React', icon: Code2 },
      
    ],
  },
  {
    title: 'Backend',
    icon: LayoutPanelTop,
    items: [
      { name: 'JavaScript', icon: Github },
      { name: 'Node.js', icon: Github },
      { name: 'SQL', icon: Github },
      { name: 'Java' , icon: Github },
    ],
  },
  {
    title: 'IoT & Embedded',
    icon: Microchip,
    items: [
      { name: 'Arduino', icon: Zap },
      { name: 'ESP32 & ESP8266', icon: Wifi },
      { name: 'Sensors (Ultrasonic, IR, PIR, Flame)', icon: Microchip },
      { name: 'Embedded C', icon: Github },
    ],
  }
]

export const softwareProjects = [
  {
    title: 'Your Hundred Makes Wonder',
    role: 'Front-End Developer',
    tagline: 'Small Contributions, Big Impact - A digital platform built to support meaningful change.',
    description:
      'Designed and developed the full frontend with responsive pages and smooth navigation to support a charity trust platform that turns small donations into collective impact.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'React.js'],
    link: 'https://yourhundredmakeswonder.org',
    buttonLabel: 'Visit Website',
    linkType: 'live',
  },
]

export const hardwareProjects = [
  {
    title: 'Next Gen Fire Safety',
    featured: true,
    description:
      'Next Gen Fire Safety is an intelligent fire detection and suppression system designed for electric vehicles. It detects flame or abnormal temperature and automatically activates suppression to control fire quickly.',
    technologies: [
      'Arduino Nano',
      'Flame Sensor',
      'W1209 Temperature Controller',
      'MQ5 Sensor',
      'PIR Sensor',
      'Submersible Pump',
      'Nozzle System',
      'GSM SIM800L Module',
    ],
    badges: [
      'International Level Competition Winner',
      'Patent Filed',
      '₹30,000 Project Sponsorship',
    ],
    images: [
      img1,
      img2,
      img3,
      img4,
      img5,

    ],
  },
  {
    title: 'Smart Agricultural Rover',
     featured: true,
    description:
      'An autonomous waste collection prototype designed to demonstrate smart city waste management. The truck follows a guided path, detects obstacles, identifies collection points, and uses a robotic arm to pick and store garbage automatically while monitoring bin capacity.',
    technologies: ['TCS3200 Color Sensor',
      'Load Cell Sensor',
      'Embedded C',
      'Arduino AtMega',
      'Robotic Arm(4 DoF)',
      'UltraSonic Sensor',
      'LED Display',
      'L298 Motor Driver',
    ],
      

    images: [
      img9,
      img7,
      img8,
      img6,
    ],
    badges: [
      'International Level Competition Runner',
      'Patent Ongoing',
    ],
  },

]

export const stats = [
{ label: 'Specialization', value: 'Frontend Development' },
{ label: 'Tech Stack', value: 'HTML / CSS / JS / React' },
{ label: 'Focus', value: 'Responsive UI & Clean Design' },
]

export const contacts = [
  {
    label: 'Email',
    value: 'harikumarat04@gmail.com',
    href: 'mailto:harikumarat04@gmail.com',
    icon: Feather,
  },
  {
    label: 'GitHub',
    value: 'github.com/harikumar',
    href: 'https://github.com/',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/harikumar',
    href: 'https://www.linkedin.com/',
    icon: LayoutPanelTop,
  },
]

