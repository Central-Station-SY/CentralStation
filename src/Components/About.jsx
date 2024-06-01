import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div id="About" className="about_section layout_padding">
      <motion.div className="container  ">
        <motion.div className="row">
          <motion.div className="col-md-6 ">
          </motion.div>
          <motion.div className="col-md-6">
            <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                y: 3 % 2 === 0 ? 0 : 300,
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
                <img src={require('../assets/images/train.png')} style={{
                  width: '20%',
                  height:'20%'
                }} />
                {/* <h2>DON'T MISS THE TRAIN</h2>  */}
                {/* <h2 style={{ color: }}>/h2> */}
              </motion.div>
              {/* <a href="">Read More</a> */}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="vertical-space">
        <span></span>
      </motion.div>
    </motion.div>
  );
};

export default About;
