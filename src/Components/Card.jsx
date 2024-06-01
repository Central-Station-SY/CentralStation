import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/OverLay.css";
import Modal from "./Modal";

function Card({
  lang,
  id,
  name,
  description_en,
  description_ar,
  price,
  image,
}) {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const truncateDescription = (description, wordLimit = 7) => {
    const words = description.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + " ...";
    }
    return description;
  };

  const description = lang ? description_en : description_ar;
  const truncatedDescription = truncateDescription(description);
  const textDirection = lang ? "ltr" : "rtl";

  useEffect(() => {
    // Load Cairo font stylesheet when lang is false (Arabic)
    if (!lang) {
      const link = document.createElement("link");
      link.href =
        "https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap";
      link.rel = "stylesheet";
      document.head.appendChild(link);

      return () => {
        // Remove the dynamically added stylesheet when the component unmounts
        document.head.removeChild(link);
      };
    }
  }, [lang]);

  return (
    <motion.div
      key={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: id * 2 }}
      className="col-sm-6 col-lg-4 flex-1"
      style={{ fontFamily: !lang ? "'Cairo', sans-serif" : "" }} // Apply font here
    >
      <motion.div onClick={openModal} className="box">
        <motion.div>
          <motion.div className="img-box">
            <img src={require("../assets/images/" + image)} alt={name} />
          </motion.div>
          <motion.div className="detail-box">
            <h4>{name}</h4>
            <p
              style={
                lang
                  ? { direction: textDirection }
                  : { direction: textDirection, fontFamily: "Cairo" }
              }
            >
              {truncatedDescription}
            </p>
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
              lang={lang}
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
      initial="closed"
      animate="open"
      exit="closed"
      key="overlay"
    >
      {children}
    </motion.div>
  );
};

export default Card;
