import { useRef } from "react";
import ProductImage from "../assets/product-image.png";
import pyramidImage from "../assets/pyramid.png";
import TubeImage from "../assets/tube.png";
import { motion, useScroll, useTransform } from "motion/react";

const ProductShowcase = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective eay to track progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            SaaS website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <img src={ProductImage} alt="Product Image" className="mt-10" />
          <motion.img
            src={pyramidImage}
            alt="Image"
            className="hidden md:block absolute -right-36 -top-32"
            height={262}
            width={262}
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={TubeImage}
            alt="image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY: translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
