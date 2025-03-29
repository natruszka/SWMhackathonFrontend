import React, { useState, useRef, useEffect } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import { GeocodingControl } from "@maptiler/geocoding-control/maptilersdk";
import "@maptiler/geocoding-control/style.css";
import "./Map.css";

const localizations = [
  {
    business_name: "Olimp Galeria Kazimierz",
    longitude: 19.95632845621571,
    latitude: 50.05395204215157,
    discount: 15,
    color: "green",
  },
  {
    business_name: "Pizzatopia",
    longitude: 19.93379159497496,
    latitude: 50.063074839342995,
    discount: 30,
    color: "red",
  },
  {
    business_name: "Weselże się pizza",
    longitude: 19.897852450259162,
    latitude: 50.07909885198227,
    discount: 20,
    color: "blue",
  },
  {
    business_name: "Ikea restauracja",
    longitude: 19.896996442338256,
    latitude: 50.09107978590599,
    discount: 12,
    color: "yellow",
  },
  {
    business_name: "Corner Burger",
    longitude: 19.949498706014293,
    latitude: 50.05072253795349,
    discount: 40,
    color: "orange",
  },
  {
    business_name: "Okrąglak",
    longitude: 19.94513732300949,
    latitude: 50.052044895190356,
    discount: 4,
    color: "gray",
  },
  {
    business_name: "Bistro akademickie KRAKUS",
    longitude: 19.917133850606643,
    latitude: 50.065349885938694,
    discount: 40,
    color: "gold",
  },
  {
    business_name: "Awokado Lunch Bar",
    longitude: 19.9360165339074,
    latitude: 50.07637024018192,
    discount: 40,
    color: "magenta",
  },
];

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

    localizations.forEach(
      ({ business_name, latitude, longitude, discount, color }) => {
        new maptilersdk.Marker({ color: color })
          .setLngLat([longitude, latitude])
          .setPopup(
            new maptilersdk.Popup().setHTML(
              `<div class="markerBody">
                  <h1 class="markerTop">${business_name}</h1>
                  <p class="markerBottom">!!! Zniżka studencka: ${discount}% !!!</p>
                  <p class="markerCord">${latitude}, ${longitude}</p>
                  
              </div>
              `,
            ),
          )
          .addTo(map.current);
      },
    );
  }, [cracow.lng, cracow.lat, zoom, localizations]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
