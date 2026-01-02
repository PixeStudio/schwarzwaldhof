import "./Rooms.css";
import {roomsData} from "./rooms.data";
import RoomModal from "./RoomModal";
import { useState, useEffect } from "react";
import { FiEye, FiSearch } from "react-icons/fi";

function Rooms() {

  const openModal = (room) => setSelectedRoom(room);
  const [selectedRoom, setSelectedRoom] = useState(null);
  useEffect(() => {
    const page = document.querySelector(".page")
    if (!page) return;
    if (selectedRoom) page.style.overflow = "hidden";
    else page.style.overflow = "scroll";

    return () => {
      page.style.overflow = "scroll";
    };
  }, [selectedRoom]);

  return (
    <div className="rooms">
      <header className="rooms__header">
        <h2 className="rooms__title">Rooms & Suites</h2>
        <p className="rooms__intro">
          Comfortable rooms inspired by the calm and beauty of the Black Forest.
        </p>
      </header>

      <div className="rooms__content">
        {roomsData.map((room) => (
           <article key={room.id} className="room-card">
            <div className="room-card__media">
              <img src={room.image} alt={room.name} loading="eager" decoding="async" />
              <div className="room-card__icons">
                <button className="room-card__icon" aria-label="View gallery" onClick={() => openModal(room)}><FiEye /></button>
              </div>
            </div>

            <div className="room-card__body">
              <h3 className="room-card__title">{room.name}</h3>
              <p className="room-card__description">{room.description}</p>
              <ul className="room-card__meta">
                <li>{room.size}</li>
                <li>Up to {room.guests} guests</li>
                <li>From €{room.priceFrom}</li>
              </ul>
              <div className="room-card__actions">
                <button className="room-card__btn" onClick={() => openModal(room)}>View details</button>
              </div>
            </div>
          </article>
        ))}
       
      </div>
      <RoomModal room={selectedRoom} onClose={() => setSelectedRoom(null)}/></div>
    
  );
  
}

export default Rooms;
