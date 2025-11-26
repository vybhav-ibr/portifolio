export const siteConfig = {
  name: "Vybhav Ilindra",
  title: "Robotics Software Engineer",
  description: "Portfolio website of Vybhav Ilindra",
  accentColor: "#1d4ed8",
  social: {
    email: "ibr.vybhav@gmail.com",
    linkedin: "https://www.linkedin.com/in/vybhav-ibr/",
    github: "https://github.com/vybhav-ibr",
  },
  aboutMe:
    "I am a robotics software developer, and I spend my days teaching robots how to do cool stuff, or rather teach them how to teach themselves. I’m all about making machines smarter and more autonomous, so we can finally use them for all the lame stuff in our lives. I try to do it all, whether it’s coding for robots that can navigate tricky environments or building systems that help them think on their feet (or wheels, or whatever they’ve got going on). If you’re into robots, AI, or solving problems no one thought were possible a decade ago, hit me up! Let’s collaborate and build something awesome together!",
  skills: ["AI", "RL", "ROS", "Docker", "Linux", "Simulation"],
  projects: [
    {
      name: "RL Drone Racer",
      description:
        "A drone learning to race using reinforcement learning, adaptable to any changes in its environment, such as obstacle position, size, and lighting conditions.",
      skills: ["RL", "Simulation", "Computer Vision", "LiDAR Odometry"],
    },
    {
      name: "Smart Palletiser",
      description:
        "A mobile manipulator robot to stack boxes of various sizes onto pallets, made possible using a fusion of modern approaches such as reinforcement learning and classical approaches such as sampling-based path planning.",
      skills: ["RL", "Simulation", "Path Planning"],
    },
    {
      name: "Genesis-ROS",
      description:
        "An open-source, lightweight Pythonic bridge between the Genesis simulator and ROS2, featured in the Open Robotics newsletter.",
      link: "https://github.com/vybhav-ibr/genesis_ros",
      skills: ["Python", "Genesis"],
    },
  ],
  experience: [
    {
      company:
        "Control of Networked Systems Research Group (CNS), Klagenfurt, Austria",
      title: "Robotics Software Developer",
      dateRange: "Feb 2024 - March 2025",
      bullets: [
        "Contributed to research in the field of GNSS-denied drone navigation",
        "Made open-source contributions to ultra-wideband (UWB) based state estimation using modular sensor fusion",
        "Worked in a diverse team of researchers and industry experts to push the boundaries of robotics",
      ],
    },
  ],
  education: [
    {
      school: "University of Klagenfurt, Austria",
      degree: "Study abroad",
      dateRange: "2023-2024",
      achievements: [
        "Learnt about cutting-edge research in the field of robotics and was invited to contribute to ongoing research projects",
      ],
    },
    {
      school: "Lovely Professional University, India",
      degree: "Bachelors in Robotics and Automation",
      dateRange: "2020-2024",
      achievements: [
        "Graduated with a CGPA of 8.0, making it to the top 10% of the class",
      ],
    },
  ],
};
