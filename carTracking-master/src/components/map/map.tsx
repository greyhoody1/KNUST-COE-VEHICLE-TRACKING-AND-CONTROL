import {  useState } from "react";
import { icons, svgs } from "../../assets";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";


const center = {
  lat: 5.7348,
  lng: 0.0302,
};


function App() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB23waC3S6u-wsPymyniqNhkD5sDO726bk",
  });
  return isLoaded ? (
    <>
      <GoogleMap
        center={center}
        zoom={10}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={{
          zoomControl: true,
          streetViewControl: true,
          mapTypeControl: true,
          fullscreenControl: true,
        }}
      >
        <Marker position={center} icon={svgs.carTopView}/>
      </GoogleMap>
    </>
  ) : (
    <></>
  );
}
export default App;