export const siteConfig = {
  name: "Vybhav Ilindra",
  title: "Roborics Software Engineer",
  description: "Portfolio website of Vybhav Ilindra",
  accentColor: "#1d4ed8",
  social: {
    email: "ibr.vybhav@gmail.com",
    linkedin: "https://www.linkedin.com/in/vybhav-ibr/",
    github: "https://github.com/vybhav-ibr",
  },
  aboutMe:
    "I am a robotics software developer, and I spend my days teaching robots how to do cool stuff, or rather teach them how to teach themselves. I’m all about making machines smarter and more autonomous, so we cab finally use them for all the lame stuff in our lives. I try to do it all, whether it’s coding for robots that can navigate tricky environments or building systems that help them think on their feet (or wheels, or whatever they’ve got going on).If you’re into robots, AI, or solving problems no one thought were possible a decade ago, hit me up! Let’s collaborate and build something awesome together!",
  skills: ["AI","RL","ROS","Docker","Linux","Simulation"],
  projects: [
    {
      name: "RL Drone Racer",
      description:
        "A drone learning to race using reinforcement learning, adaptable to any changes in its environment, like position and size of obstacles and lighting conditions ",
      skills: ["RL", "Simulation", "Computer Vision", "Lidar odometry" ],
    },
    {
      name: "Smart Palletiser",
      description:
        "A mobile manipulator robot to stack boxes of various sizes into pallets, made possible using a fusion of modern approaxhes such as reinforcement learning and classical approaches such as sampling based path planing",
      skills: ["RL", "Simulation", "Path Planning"],
    },
    {
      name: "Genesis-ROS",
      description:
        "An Open-source, lightweight pythonic bridge between the genesis simulator and ROS2, featured on the open-robotics newsletter",
      link: "https://github.com/vybhav-ibr/genesis_ros",
      skills: ["Python","Genesis"],
    },
  ],
  experience: [
    {
      company: "Control of networked systems research group(CNS), klagenfurt, Austria",
      title: "Roborics software developer",
      dateRange: "Feb 2024 - March 2025",
      bullets: [
        "Contributed to research in the field of GNSS denied drone navigation",
        "Made opensource contributions to ultra wide band(UWB) based state estimation uisng modular sensor fusion",
        "Worked in a diverse team of researchers and industry experts to push the boundary of robotics",
      ],
    },
  ],
  education: [
    {
      school: "University of klagenfurt, Austria",
      degree: "Study abroad",
      dateRange: "2023-2024",
    },
    {
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2020-2024",
    },
  ],
};
