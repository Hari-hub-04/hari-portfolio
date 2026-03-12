import { Feather, Github, LayoutPanelTop } from 'lucide-react'

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export const skillGroups = []

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
    role: 'Hardware Developer and System Designer',
    description:
      'Next Gen Fire Safety is an intelligent fire detection and suppression system designed for electric vehicles. It detects flame or abnormal temperature and automatically activates suppression to control fire quickly.',
    technologies: [
      'Arduino Nano',
      'Flame Sensor',
      'W1209 Temperature Controller',
      'Submersible Pump',
      'Nozzle System',
      'GSM SIM800L Module',
    ],
    badges: [
      'National Level Competition Winner',
      '?30,000 Project Sponsorship',
      'Patent Filed',
    ],
    stages: [
      {
        title: 'Initial Prototype - Competition Model',
        description:
          'First version showcased at the VISAI competition. A flame sensor and W1209 controller monitor risk conditions, and the Arduino Nano triggers a submersible pump to spray extinguishing liquid through a nozzle while GSM SIM800L sends alerts.',
        images: [
          '/src/assets/IMG-20240512-WA0052.jpg',
          '/src/assets/IMG-20240514-WA0016.jpg',
          '/src/assets/IMG-20240515-WA0043.jpg',
          '/src/assets/IMG-20240515-WA0044.jpg',
        ],
        videos: [
          {
            type: 'youtube',
            src: 'src/assets/VID_20240221_085759.mp4',
            title: 'Competition Prototype Demo',
          }
        ],
      },
      {
        title: 'Product Prototype - Improved Model',
        description:
          'After receiving ?30,000 sponsorship, an upgraded product model was built with improved structure and 3D printed design for better integration, reliability, and physical durability over the initial prototype.',
        images: [
          '/projects/next-gen-stage2-1.svg',
          '/projects/next-gen-stage2-2.svg',
          '/projects/next-gen-stage2-3.svg',
        ],
        videos: [
          {
            type: 'html5',
            src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
            title: 'Improved Model Demo',
          },
        ],
      },
    ],
  },
  {
    title: 'Smart Agricultural Rover',
    description:
      'National-level competition project focused on precision farm monitoring and automated irrigation triggers based on sensor input.',
    technologies: ['IoT Sensors', 'Embedded C', 'Arduino', 'Motor Driver'],
    images: [
      '/projects/hardware-1-1.svg',
      '/projects/hardware-1-2.svg',
      '/projects/hardware-1-3.svg',
    ],
    videos: [
      {
        type: 'youtube',
        src: 'https://www.youtube.com/embed/aqz-KE-bpKQ',
        title: 'Rover Demo',
      },
    ],
    badges: ['National Prize Winner', 'Patent Filed'],
  },
  {
    title: 'Intelligent Waste Segregation Unit',
    description:
      'Prototype machine that identifies dry and wet waste categories through sensor logic and directs items to separate bins automatically.',
    technologies: ['Sensor Module', 'Controller Board', 'Relay Unit'],
    images: ['/projects/hardware-2-1.svg', '/projects/hardware-2-2.svg'],
    videos: [
      {
        type: 'html5',
        src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        title: 'Waste Unit Demo',
      },
    ],
    badges: [],
  },
]

export const stats = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Projects Delivered', value: '25+' },
  { label: 'Tech Stack Breadth', value: '12+' },
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

