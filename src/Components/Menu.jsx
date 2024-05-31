import React, { useEffect, useState, useRef } from "react";
import { data } from "../assets/data";
import Card from "./Card";
import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";
import { FaArrowCircleLeft } from "react-icons/fa";

export default function Menu() {
  const [isActiveCategory, setIsActiveCategory] = useState(null);
  const [card, setCard] = useState([]);
  const [category, setCategory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showItem, setShowItem] = useState(false);
  const [showCategory, setShowCategory] = useState(true);
  const itemsPerPage = 6;
  const containerRef = useRef(null); // Ref for the main container
  const firstItemRef = useRef(null); // Ref for the first item

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = card.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setCategory(data.menu.map((category) => category));
    setCurrentPage(1); // Reset current page to 1 when category changes
    const selectedMenu = data.menu.find(
      (item) => item.categoryName === isActiveCategory
    );
    if (selectedMenu) {
      setCard(selectedMenu.items);
    } else {
      setCard(data.menu.flatMap((item) => item.items));
    }

    if (isActiveCategory !== null) {
      setShowCategory(false);
      setShowItem(true);
      window.history.pushState(
        { category: isActiveCategory },
        "",
        `#${isActiveCategory}`
      );
    } else {
      setShowCategory(true);
      setShowItem(false);
      window.history.pushState({}, "", "");
    }
  }, [isActiveCategory]);

  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.category) {
        setIsActiveCategory(event.state.category);
      } else {
        setIsActiveCategory(null);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to top of the container
    }
    if (firstItemRef.current) {
      firstItemRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the first item
    }
  }, [isActiveCategory, currentPage]); // Run effect when isActiveCategory or currentPage changes

  return (
    <motion.div
      id="Menu"
      className="main_div"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 3 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      ref={containerRef} // Set ref on the container
    >
      <motion.div className="food_section layout_padding-bottom">
        <motion.div className="container">
          <motion.div className="heading_container heading_center">
            <h2>Our Menu</h2>
          </motion.div>
          <motion.div className="filters_menu">
            <motion.div>
              <motion.div className="filters_menu">
                <motion.div className="row grid glow">
                  {showCategory === true
                    ? category.map((item, index) => (
                        <CategoryCard
                          key={index}
                          setIsActiveCategory={setIsActiveCategory}
                          id={item.id}
                          categoryName={item.categoryName}
                          categoryDescription={item.categoryDescription}
                          categoryImage={item.categoryImage}
                        />
                      ))
                    : null}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* menu item */}
            {showItem === true ? (
              <motion.div>
                <motion.div className="filters_menu">
                  <motion.div
                    whileTap={() =>
                      (document.querySelector(".main_div").style.opacity = 0)
                    }
                    style={{ paddingRight: "110%" }}
                  >
                    <FaArrowCircleLeft
                      size={"50px"}
                      onClick={() => {
                        setIsActiveCategory(null);
                      }}
                    />
                  </motion.div>
                  <motion.div className="row grid">
                    {currentItems.map((item, index) => (
                      <Card
                        key={item.id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                        ref={index === 0 ? firstItemRef : null} // Set ref on the first item
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
            ) : null}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
