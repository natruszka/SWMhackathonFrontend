import React, { useState, useRef, useEffect } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import { GeocodingControl } from "@maptiler/geocoding-control/maptilersdk";
import "@maptiler/geocoding-control/style.css";
import "./Map.css";

export function Map() {
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
      console.log("A click event has occurred at " + e.lngLat);
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
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
