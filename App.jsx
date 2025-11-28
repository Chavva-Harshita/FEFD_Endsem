import React, { useCallback } from "react";

export default function EventPortal() {
  const handleBookEvent = useCallback((eventName) => {
    console.log(`Event booked: ${eventName}`);
  }, []);

  return (
    <div>
      <h2>Event Booking Portal</h2>
      <EventButton title="Music Event" onBook={handleBookEvent} />
      <EventButton title="Dance Event" onBook={handleBookEvent} />
    </div>
  );
}

function EventButton({ title, onBook }) {
  return (
    <button onClick={() => onBook(title)}>
      Book {title}
    </button>
  );
}

