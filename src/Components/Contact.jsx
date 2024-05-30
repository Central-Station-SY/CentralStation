import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { motion } from "framer-motion";

const customMarker = new L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});

export default function Contact() {
  return (
    <motion.section id="Contact" className="book_section layout_padding">
      <motion.div className="container">
        <motion.div
          initial={{
            opacity: 0,
            // if odd index card,slide from right instead of left
            x: 3 % 2 === 0 ? 0 : -300,
          }}
          whileInView={{
            opacity: 1,
            y: 0, // Slide in to its original position
            x: 0,
            transition: {
              duration: 1, // Animation duration
            },
          }}
          viewport={{ once: true }}
          className="heading_container"
        >
          <h2>CONTACT US</h2>
        </motion.div>
        <motion.div className="row">
          <motion.div
            initial={{
              opacity: 0,
              // if odd index card,slide from right instead of left
              x: 3 % 2 === 0 ? 0 : -300,
            }}
            whileInView={{
              opacity: 1,
              y: 0, // Slide in to its original position
              x: 0,
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
            className="col-md-6"
          >
            <motion.div className="form_container">
              <form action="">
                <motion.div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </motion.div>
                <motion.div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                  />
                </motion.div>
                <motion.div>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </motion.div>
                <motion.div>
                  <select className="form-control nice-select wide">
                    <option value="" disabled selected>
                      Reason
                    </option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                  </select>
                </motion.div>
                <motion.div className="btn_box">
                  <button>send</button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              // if odd index card,slide from right instead of left
              x: 3 % 2 === 0 ? 0 : 300,
            }}
            whileInView={{
              opacity: 1,
              y: 0, // Slide in to its original position
              x: 0,
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
            className="col-md-6"
          >
            <motion.div className="map_container">
              <motion.div id="googleMap">
                <MapContainer
                  className="leaflet-control-attribution"
                  center={[33.515989, 36.3156141]}
                  zoom={20}
                  scrollWheelZoom={false}
                  style={{ height: 340 }}
                  zoomControl={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker
                    position={[33.515989, 36.3156141]}
                    icon={customMarker}
                  >
                    <Popup>We're waiting for you 😊</Popup>
                  </Marker>
                </MapContainer>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
