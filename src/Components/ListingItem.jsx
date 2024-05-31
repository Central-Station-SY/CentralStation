import React from "react";

import { motion } from "framer-motion";
import Card from "./Card";

function ListingItem({ currentItems, card, itemsPerPage, paginate }) {
  return (
    <motion.div>
      <motion.div className="filters_menu">
        <motion.div
          whileTap={() =>
            (document.querySelector(".main_div").style.opacity = 0)
          }
          style={{ paddingRight: "110%" }}
        >
          {/* <FaArrowCircleLeft
              size={"50px"}
              onClick={() => {
                setIsActiveCategory(null);
                setShowCategory(true);
                setShowItem(false);
              }}
            /> */}
        </motion.div>
        <motion.div className="row grid">
          {currentItems.map((item, index) => (
            <Card
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </motion.div>
      </motion.div>
      <div className="btn-box">
        {Array(Math.ceil(card.length / itemsPerPage))
          .fill()
          .map((_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          ))}
      </div>
    </motion.div>
  );
}

export default ListingItem;
