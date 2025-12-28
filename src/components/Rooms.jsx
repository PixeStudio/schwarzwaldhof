import "./Rooms.css";
import {roomsData} from "./rooms.data";

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
        {roomsData.map((room) => (
           <article key={room.id} className="room-card">
            <div className="room-card__media">
              <img src={room.image} alt={room.name} loading="eager" decoding="async" />
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
                <button className="room-card__btn">View details</button>
              </div>
            </div>
          </article>
        ))}
       
      </div>
    </div>
  );
}

export default Rooms;
