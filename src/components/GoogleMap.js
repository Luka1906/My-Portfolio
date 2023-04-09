import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import classes from "./GoogleMap.module.css";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className={classes.map}>
      <div className={classes['map-info']}>
          <p>Luka Matovic,</p><br/>
          <p>546 1/2 W Surf St</p><br/>
          <p>Chicago,IL</p><br/><br/>
          <p className={classes.email}>lukamatovic1994@gmail.com</p>

      </div>
      <LocationMap />
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
      <Marker
        draggable={true}
        position={center}
      />
    
    </GoogleMap>
        
  );
}
