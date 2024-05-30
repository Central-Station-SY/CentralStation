import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div id="About" className="about_section layout_padding">
      <motion.div className="container  ">
        <motion.div className="row">
          <motion.div className="col-md-6 ">
            {/* <motion.div className="img-box">
              <img src={about} alt="" />
            </motion.div> */}
          </motion.div>
          <motion.div className="col-md-6">
            <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 3 % 2 === 0 ? 0 : 300,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 2, // Animation duration
                },
              }}
              viewport={{ once: true }}
              className="detail-box"
            >
              <motion.div className="heading_container">
                <h2>WE ARE CENTRAL STATION</h2>
              </motion.div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All
              </p>
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
