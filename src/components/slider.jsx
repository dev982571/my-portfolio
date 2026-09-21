import ecommerce from "../assets/e-commerce.png";
import socialmedia from "../assets/socialmedia.png";
import payment from "../assets/payment.png";


import {useState} from "react";

function Slider() {
    const[current ,setcurrent] = useState(0);

  const projects = [
    {
        image: ecommerce,
        name: "E-commerce Website"
    },
    {
        image: socialmedia,
        name: "Social Media Platform"
    },
    {
        image: payment,
        name: "Payment Gateway"
    }
];

  return(
    <section className="slider">
        
        <h2>{projects[current].name}</h2>
        <img src={projects[current].image} alt="project" />

        <button onClick={() => setcurrent((current-1 + projects.length) % projects.length)}>
         previous
        </button>

        <button onClick={() => setcurrent((current+1 + projects.length) % projects.length)}>
         next
        </button>

    </section>
  );
}

export default Slider