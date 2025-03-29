import { useState } from "react";
import "./NewPinForm.css";
import axios from "axios";

export default function NewPinForm({ coordinates, setNewPinCoordinates }) {
  const [newPinData, setNewPinData] = useState({
    name: "",
    discount: "",
    latitude: coordinates.latitude,
    longitude: coordinates.longitude,
  });

  function handleInputChange(id, value) {
    setNewPinData((prevState) => {
      return { ...prevState, [id]: value };
    });
  }

  function handleOnCancelClick() {
    setNewPinCoordinates((prevState) => {
      return { ...prevState, ["openForm"]: false };
    });
  }

  async function handleSubmit() {
    const { data } = await axios.post("/api/business", {
      business_name: newPinData.name,
      latitude: newPinData.latitude,
      longitude: newPinData.longitude,
      discount: newPinData.discount,
    });

    console.log(data);
  }

  return (
    <div className="flex flex-col" id="newPinForm">
      <label>Nazwa</label>
      <input
        type="text"
        value={newPinData.name}
        placeholder="Nazwa"
        onChange={(e) => handleInputChange("name", e.target.value)}
        required
      />
      <label>Zniżka</label>
      <input
        type="text"
        value={newPinData.discount}
        placeholder="Zniżka"
        onChange={(e) => handleInputChange("discount", e.target.value)}
        required
      />
      <label>Szerokość geograficzna</label>
      <input
        type="text"
        value={newPinData.latitude}
        placeholder="Szerokość geograficzna"
        disabled
      />
      <label>Długość geograficzna</label>
      <input
        type="text"
        value={newPinData.longitude}
        placeholder="Długość geograficzna"
        disabled
      />
      <div className="flex flex-row place-content-between px-4">
        <button
          className="bg-red-200 border-2 p-1 rounded-lg"
          onClick={handleOnCancelClick}
        >
          Anuluj
        </button>
        <button
          className="bg-green-200 border-2 p-1 rounded-lg"
          type="submit"
          onClick={handleSubmit}
        >
          Zapisz
        </button>
      </div>
    </div>
  );
}
