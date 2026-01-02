import "./RoomModal.css";
import { useEffect, useState } from "react";

function RoomModal({ room, onClose }) {
  const [isOpen, setIsOpen] = useState(false);

  // 1) ENTRY ANIMATION: dodaj .is-open dopiero po mount (next frame)
  useEffect(() => {
    if (!room) return;

    setIsOpen(false);

    const raf = requestAnimationFrame(() => {
      setIsOpen(true);
    });

    return () => cancelAnimationFrame(raf);
  }, [room]);

  // 2) ESC CLOSE
  useEffect(() => {
    if (!room) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [room, onClose]);

  if (!room) return null;

  return (
    <div className={`room-modal ${isOpen ? "is-open" : ""}`} role="dialog" aria-modal="true">
      <div className="room-modal__backdrop" onClick={onClose} />

      <div className="room-modal__panel">
        <button className="room-modal__close" type="button" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="room-modal__media">
          <img src={room.image} alt={room.name} />
        </div>

        <div className="room-modal__content">
          <h3 className="room-modal__title">{room.name}</h3>
          <p className="room-modal__desc">{room.description}</p>

          <ul className="room-modal__meta">
            <li>{room.size}</li>
            <li>Up to {room.guests} guests</li>
            <li>Breakfast included</li>
            <li>Free Wi-Fi</li>
          </ul>
        </div>

        <div className="room-modal__footer">
          <div className="room-modal__price">€{room.priceFrom} / night</div>
          <button className="room-modal__cta" type="button">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoomModal;
