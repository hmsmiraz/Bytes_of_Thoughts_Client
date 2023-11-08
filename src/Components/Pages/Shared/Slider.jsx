import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { motion } from "framer-motion";

const Slider = () => {
  const spanStyle = {
    width: "800px",
    padding: "20px",
    // background: "'rgba(0, 0, 0, 0.3)'",
    color: "white",
    textAlign: "center", // Center the text horizontally
    fontWeight: "bold",
    fontSize: "42px",
    background:
      "-webkit-linear-gradient(45deg, #00c3ff, #ff99cc, #ff6699), rgba(255, 255, 255, 0.2)", // Gradient background with a light background
    WebkitBackgroundClip: "text", // Clip text to background
    WebkitTextFillColor: "white", // Hide original text color
    display: "inline-block",
  };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "700px",
    borderRadius: "2%",
    margin: "2px",
  };
  const slideImages = [
    {
      url: "https://i.ibb.co/2KTbbtz/slide-3.jpg",
      caption:
        "Unlock the Power of Code: Exploring the World of Programming 🚀",
    },
    {
      url: "https://i.ibb.co/nrHKX2v/slide-2.jpg",
      caption: "From Zero to Hero: Your Journey Through the Code Jungle 🌐",
    },
    {
      url: "https://i.ibb.co/3hqFDPf/slide-1.jpg",
      caption: "Code Craftsmanship: Building the Future One Line at a Time 💻",
    },
  ];
  return (
    <motion.div
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        ease: "linear",
        duration: 2,
        x: { duration: 1 },
      }}
    >
      <div className="slide-container my-5">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              >
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </motion.div>
  );
};

export default Slider;
