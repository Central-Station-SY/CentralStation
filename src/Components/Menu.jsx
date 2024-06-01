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
  const [langEn, setLangEn] = useState();
  const [activeButton, setActiveButton] = useState(
    langEn ? "English" : "Arabic"
  );
  const itemsPerPage = 50;
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
    if (isActiveCategory !== null) {
      const selectedCategoryEn = data.menu.find(
        (category) => category.categoryName_en === isActiveCategory
      );
      const selectedCategoryAr = data.menu.find(
        (category) => category.categoryName_ar === isActiveCategory
      );

      if (langEn) {
        if (selectedCategoryEn) {
          setCard(selectedCategoryEn.items);
        }
      } else {
        if (selectedCategoryAr) {
          setCard(selectedCategoryAr.items);
        }
      }

      setShowCategory(false);
      setShowItem(true);
      window.history.pushState(
        { category: isActiveCategory },
        "",
        `#${isActiveCategory}`
      );
    } else {
      setCard([]); // Reset card state when no category is selected
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
          <motion.div
            style={{
              // display: "-webkit - box",
              // display: "-webkit - box",
              // display: "-ms - flexbox",
              display: "flex",
              justifyContent: "center",
              marginTop: "45px",
            }}
          >
            <motion.button
              style={{
                padding: "1px 12px 1px 11px",
                backgroundColor: "#EF8621",
                color: activeButton === "Arabic" ? "#851619" : "#EFF1DC",
                borderRadius: "54px",
                transition: "all 0.3s ease 0s",
                border:
                  activeButton === "Arabic" ? "2px solid #851619" : "none",
                width: "73px",
                marginRight: "20px",
                height: "56px",
                scale: activeButton === "Arabic" ? 1.3 : 1,
                boxShadow:
                  activeButton === "Arabic"
                    ? "0px 0px 25px rgba(239, 241, 220, 0.5)"
                    : "none",
              }}
              // whileHover={{ scale: 1.1 }}
              // whileTap={{ scale: 0.9 }}
              onClick={() => {
                if (langEn) {
                  setLangEn(false);
                  setActiveButton("Arabic");
                }
              }}
            >
              Arabic
            </motion.button>
            <motion.button
              style={{
                padding: "1px 12px 1px 11px",
                backgroundColor: "#EF8621",
                color: activeButton === "English" ? "#851619" : "#EFF1DC",
                borderRadius: "54px",
                transition: "all 0.3s ease 0s",
                border:
                  activeButton === "English" ? "2px solid #851619" : "none",
                width: "73px",
                marginRight: "20px",
                height: "56px",
                scale: activeButton === "English" ? 1.3 : 1,
                boxShadow:
                  activeButton === "English"
                    ? "0px 0px 25px rgba(239, 241, 220, 0.5)"
                    : "none",
              }}
              // whileHover={{ scale: 1.1 }}
              // whileTap={{ scale: 0.9 }}
              onClick={() => {
                if (!langEn) {
                  setLangEn(true);
                  setActiveButton("English");
                }
              }}
            >
              English
            </motion.button>
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
                          categoryName_en={item.categoryName_en}
                          categoryName_ar={item.categoryName_ar}
                          // categoryDescription_en={item.categoryDescription_en}
                          categoryImage={item.categoryImage}
                          lang={langEn}
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
                        window.history.back();
                      }}
                    />
                  </motion.div>
                  <motion.div className="row grid">
                    {currentItems.map((item, index) => (
                      <Card
                        lang={langEn}
                        key={item.id}
                        name={item.name}
                        description_en={item.description_en}
                        description_ar={item.description_ar}
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
