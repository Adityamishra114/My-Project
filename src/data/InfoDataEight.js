import Intm from "../images/Intm.png";
import Frenc from "../images/Frenc.png";
import logo from "../images/logo.png";
import { AiOutlineCheck } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

export const InfoDataEight = [
  {
    heading: "Internal Team",
    image: Intm,
    icon: <IoMdClose />,
    title: [
      "6- 20 weeks onboard",
      "Individual Engagement",
      "No Strategy Advisory",
      "Dedicated Resources",
      " High Management Time",
      "Medium Time to Market",
    ],
  },
  {
    heading: "Freelancers",
    image: Frenc,
    icon: <IoMdClose />,
    title: [
      "4- 10 weeks onboard",
      "Individual Engagement",
      "No Strategy Advisory",
      "Multiple projects at a time",
      " High Management Time",
      " Slow Time to Market",
    ],
  },
  {
    heading: "SynergyLabs",
    image: logo,
    icon: <AiOutlineCheck />,
    title: [
      " 4 - 6 weeks to onboard",
      "Organizational Engagement",
      "Monthly Strategy Advisory",
      "Dedicated Resources",
      " Low Management Time",
      "Fast Time to Market",
    ],
    buttonLabel: "Contact Now",
  },
];
