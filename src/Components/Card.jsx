import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/OverLay.css";
import Modal from "./Modal";

function Card({ id, name, description, price, image }) {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <motion.div
      key={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: id * 2 }} // Adjust delay as needed
      className="col-sm-6 col-lg-4"
    >
      <motion.div onClick={openModal} className="box">
        <motion.div>
          <motion.div className="img-box">
            <img src={require("../assets/images/" + image)} alt="" />
          </motion.div>
          <motion.div className="detail-box">
            <h4>{name}</h4>
            <p>{description}</p>
            <motion.div className="options">
              <h6>{price}</h6>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {open && (
          <Overlay close={closeModal}>
            <Modal
              key={id}
              id={id}
              name={name}
              description={description}
              price={price}
              image={image}
              close={closeModal}
            />
          </Overlay>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const Overlay = ({ children, close }) => {
  const variants = {
    open: { backgroundColor: "rgba(0,0,0,0.6)" },
    closed: { backgroundColor: "rgba(0,0,0,0)" },
  };

  return (
    <motion.div
      className="overlay"
      onClick={close}
      variants={variants}
      initial={"closed"}
      animate={"open"}
      exit={"closed"}
      key="overlay"
    >
      {children}
    </motion.div>
  );
};

export default Card;
