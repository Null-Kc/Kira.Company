import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { SobreNos, SobreNoscontainer, SobreNosvariants } from '../components/data'
import CardAbout from "../components/CardAbout";

const About = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });


  //Chama a animacao quando o Pagina About entra no campo de visao do usuario.
  useEffect(() => {
    if (inView && !animationPlayed) {
      controls.start("visible");
      setAnimationPlayed(true);
    }
  }, [controls, inView, animationPlayed]);

  return (
    <div  className="flex justify-center w-full">
      <div ref={(el) => { ref(el); containerRef.current = el; }} className="w-11/12 rounded-2xl bg-opacity-20 max-w-screen-lg">
        <motion.ul variants={SobreNoscontainer} initial="hidden" animate={controls} className="w-full h-full flex-wrap flex max-[800px]:flex-col">
          {SobreNos.map((item) => (
            <CardAbout key={item.id} item={item} variantsSobreNos={SobreNosvariants}  />
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default About;