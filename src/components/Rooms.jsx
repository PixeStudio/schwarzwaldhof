import "./Rooms.css";
import { roomsData } from "./rooms.data";

function Rooms() {
  return (
    <div className="rooms">
      <header className="rooms__header">
        <h2 className="rooms__title">Rooms & Suites</h2>
        <p className="rooms__intro">
          Comfortable rooms inspired by the calm and beauty of the Black Forest.
        </p>
      </header>

      <div className="rooms__content">
        {roomsData.map(room => (
            <div key={room.id} className="rooms__item">
                <h3 className="rooms__item-title">{room.name}</h3>
                <p className="rooms__item-desc">{room.description}</p>
                <p className="rooms__item-meta">
                    {room.size} · up to {room.guests} guests · from €{room.priceFrom}
                </p>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
