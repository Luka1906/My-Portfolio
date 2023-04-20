import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import classes from "./GoogleMap.module.css";
import { motion } from "framer-motion";
import { mapAnimation,infoAnimation } from "../animations/animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserNinja,
  faHouse,
  faMapPin,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className={classes["map-wrap"]}>
      <motion.div
        variants={mapAnimation}
        initial={"hidden"}
        animate={"visible"}
        className={classes.map}
      >
        <LocationMap />
      </motion.div>
      <motion.div
      variants={infoAnimation}
      initial={"hidden"}
      animate={"visible"}
      className={` global-candidate__info ${classes["candidate-info"]}`}>
        <div className={classes["candidate-name"]}>
        <FontAwesomeIcon className={classes.ninja} icon={faUserNinja} />
        <p>Luka Matovic,</p>
        </div>
        <div className={classes["candidate-street"]}>
          <FontAwesomeIcon className={`global-house ${classes.house}`} icon={faHouse} />
          <p>546 1/2 W Surf St</p>
        </div>
        <div className={classes["candidate-home"]}>
          <FontAwesomeIcon className={classes.pin} icon={faMapPin} /> <p>Chicago,IL</p>
        </div>
        <div className={classes["candidate-email"]}>
          <FontAwesomeIcon  className={`global-envelope ${classes.envelope}`} icon={faEnvelope} />{" "}
          <p className={classes.email}>lukamatovic1994@gmail.com</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Map;

function LocationMap() {
  const center = useMemo(() => ({ lat: 41.934557, lng: -87.643286 }), []);
  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName={classes["map-container"]}
    >
      <Marker draggable={true} position={center} />
    </GoogleMap>
  );
}
