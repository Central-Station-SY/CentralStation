import React from "react";
import { motion } from "framer-motion";


const About = () => {
  return (
    <motion.div className="outer">
      <motion.div id="About" className="about_section layout_padding">
        <motion.div className="container  ">
          <motion.div className="row">
            <motion.div className="col-md-6 "></motion.div>
            <motion.div className="col-md-6">
              <motion.div
                initial={{
                  opacity: 0,
                  // if odd index card,slide from right instead of left
                  y: 3 % 2 === 0 ? 0 : '60%',
                }}
                whileInView={{
                  opacity: 1,
                  y: 0, // Slide in to its original position
                  transition: {
                    duration: 2, // Animation duration
                  },
                }}
                viewport={{ once: true }}
                className="detail-box"
              >
                <motion.div className="heading_container">
                  <img
                    src={require("../assets/images/train.jpg")}
                    style={{
                      width: "75%",
                      marginBottom: "21%",
                      marginTop: "-15%",
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
