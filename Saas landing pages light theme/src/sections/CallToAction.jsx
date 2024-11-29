import ArrowRight from "../assets/arrow-right.svg";
import starImage from "../assets/star.png";
import springImage from "../assets/spring.png";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const CallToAction = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: null,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-t from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <motion.img
            src={starImage}
            width={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={springImage}
            width={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{
              translateY: translateY,
            }}
          />
        </div>

        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button
            className="btn btn-text gap-1
          "
          >
            <span>Learn more</span>
            <img src={ArrowRight} width={20} height={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
