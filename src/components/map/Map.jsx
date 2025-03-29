import React, { useState, useRef, useEffect } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import { GeocodingControl } from "@maptiler/geocoding-control/maptilersdk";
import "@maptiler/geocoding-control/style.css";
import "./Map.css";
import NewPinForm from "../NewPinForm.jsx";

export function Map() {
  const [newPinCoordinates, setNewPinCoordinates] = useState({
    openForm: false,
    coordinates: {
      latitude: 0,
      longitude: 0,
    },
  });

  const mapContainer = useRef(null);
  const map = useRef(null);
  const cracow = { lng: 19.93658, lat: 50.06143 };
  const zoom = 10;
  maptilersdk.config.apiKey = "3rFoKCI4N2NINwDwxOM9";

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once
    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [cracow.lng, cracow.lat],
      zoom: zoom,
    });

    //click events
    map.current.on("click", function (e) {
      if (!newPinCoordinates.openForm) {
        setNewPinCoordinates({
          openForm: true,
          coordinates: { latitude: e.lngLat.lat, longitude: e.lngLat.lng },
        });
      }
    });

    const gc = new GeocodingControl({
      country: "PL",
    });
    map.current.addControl(gc);

    const marker = new maptilersdk.Marker({ color: "#ba1a1a" })
      .setLngLat([19.93, 50.06])
      .setPopup(new maptilersdk.Popup().setHTML("Hello World!"))
      .addTo(map.current);
  }, [cracow.lng, cracow.lat, zoom]);

  return (
    <div className="flex flex-row gap-3">
      <div className="map-wrap">
        <div ref={mapContainer} className="map" />
      </div>
      {newPinCoordinates.openForm && (
        <NewPinForm
          coordinates={newPinCoordinates.coordinates}
          setNewPinCoordinates={setNewPinCoordinates}
        />
      )}
    </div>
  );
}
