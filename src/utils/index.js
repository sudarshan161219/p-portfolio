import mongoDb from "../../public/tech-icons/mongodb-icon.png"
import express from "../../public/tech-icons/express-js-icon.png"
import react from "../../public/tech-icons/react-js-icon.png"
import nodejs from "../../public/tech-icons/node-js.png"

const projectz = [
  {
    id:1 ,
    span:"latest Project",
    name: "Domain website",
    info: "This is a homepage design for a concept project –a Domain Ragistrar Comapny. I have designed the page first.",
    img: "/img/pr1.jpg",
    techstack:[mongoDb, express, react, nodejs]
  },
  {
    id:2 ,
    span:"latest Project",
    name: "Luxery Clothing Brand",
    info: "A full website design and build for a concept team collaboration platform. This website also includes a beautiful blog. I have built the website and the blog in Webflow which has one of the best CMS for blog hosting.",
    img: "/img/pr2.jpg",
    techstack:[mongoDb, express, react, nodejs]
  },
];

export default projectz