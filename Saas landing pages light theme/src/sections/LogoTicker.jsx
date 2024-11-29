import acmeLogo from "../assets/logo-acme.png";
import quantumLogo from "../assets/logo-quantum.png";
import echLogo from "../assets/logo-echo.png";
import celestialLogo from "../assets/logo-celestial.png";
import pulseLogo from "../assets/logo-pulse.png";
import apexLogo from "../assets/logo-apex.png";
import { motion } from "motion/react";

const LogoTicker = () => {
  return (
    <div className="py-8 bg-white md:py-12">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_25%,black_75%,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <img src={acmeLogo} alt="Logo" className="logo-ticker-image" />
            <img src={quantumLogo} alt="Logo" className="logo-ticker-image" />
            <img src={echLogo} alt="Logo" className="logo-ticker-image" />
            <img
              src={celestialLogo}
              alt=" Logo"
              className="logo-ticker-image"
            />
            <img src={pulseLogo} alt=" Logo" className="logo-ticker-image" />
            <img src={apexLogo} alt=" Logo" className="logo-ticker-image" />
            {/* Second set of logos for animation */}
            <img src={acmeLogo} alt="Logo" className="logo-ticker-image" />
            <img src={quantumLogo} alt="Logo" className="logo-ticker-image" />
            <img src={echLogo} alt="Logo" className="logo-ticker-image" />
            <img
              src={celestialLogo}
              alt=" Logo"
              className="logo-ticker-image"
            />
            <img src={pulseLogo} alt=" Logo" className="logo-ticker-image" />
            <img src={apexLogo} alt=" Logo" className="logo-ticker-image" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
