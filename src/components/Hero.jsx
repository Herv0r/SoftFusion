import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas, StarsCanvas } from "./canvas";
import LogoRosa from "../assets/LogoRosa.svg";

import Tilt from "react-parallax-tilt";
import Typewriter from "typewriter-effect";


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto dark:bg-white">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col lg:flex-row items-center gap-5`}>
        <div className="w-full lg:w-1/2 lg:pl-16">
          <h1 className={`${styles.heroHeadText} text-white text-center lg:text-left dark:text-black`}>
            Hi <span className="text-pink">!</span> we're
              <Typewriter options={{ wrapperClassName: "text-[#FF006C]", loop: true }} onInit={(typewriter) => {
                typewriter
                  .typeString("SOFTFUSION")
                  .pauseFor(2000)
                  .deleteAll()
                  .pauseFor(1000)
                  .start();
              }} />
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-center lg:text-left dark:text-black`}>
            A company specialized in software and web application development.
          </p>
        </div>

        <div className="w-1/2 lg:w-1/2 lg:pl-44">
          <Tilt
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            transitionSpeed={400}>
            <img
              src={LogoRosa}
              alt="LogoRosa"
              className="object-contain max-w-md lg:max-w-none"
            />
          </Tilt>
        </div>
      </div>
    </section>


  );
};

export default Hero;
