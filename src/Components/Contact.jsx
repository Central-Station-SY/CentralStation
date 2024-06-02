import React, { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const customMarker = new L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_1e28toq", "template_g00yk9e", form.current, {
        publicKey: "YEbS7uza8DR4S6p9U",
      })
      .then(
        (res) => {
          if (res.status === 200 && res.text === "OK") {
            Swal.fire({
              icon: "success",
              text: "sent successfully , Thank you",
              timer: 2000,
              background: "#221F1F",
              color: "#EFF1DC",
            });

            form.current.name.value = "";
            form.current.phoneNumber.value = "";
            form.current.email.value = "";
            form.current.description.value = "";
          }
        },
        (error) => {
          Swal.fire({
            icon: "error",
            text: "something wrong , try agian",
            timer: 2000,
            background: "#221F1F",
            color: "#EFF1DC",
          });
        }
      );
  };

  return (
    <motion.section id="Contact" className="book_section layout_padding">
      <motion.div className="container">
        <motion.div
          initial={{
            opacity: 0,
            // if odd index card,slide from right instead of left
            x: 3 % 2 === 0 ? 0 : '-60%',
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
              x: 3 % 2 === 0 ? 0 : '-60%',
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
              <form ref={form} onSubmit={sendEmail}>
                <motion.div>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                  />
                </motion.div>
                <motion.div>
                  <input
                    type="text"
                    className="form-control"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Phone Number"
                  />
                </motion.div>
                <motion.div>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                  />
                </motion.div>
                <motion.div>
                  <textarea
                    className="form-control nice-select wide"
                    name="description"
                    id="description"
                    placeholder="description"
                    style={{ height: "100px" }}
                  ></textarea>
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
              y: 3 % 2 === 0 ? 0 : '60%',
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
                  center={[33.515364, 36.317377]}
                  zoom={20}
                  scrollWheelZoom={false}
                  style={{ height: 340 }}
                  zoomControl={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[33.515364, 36.317377]} icon={customMarker}>
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
