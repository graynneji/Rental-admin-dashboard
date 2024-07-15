import BookingDetail from "../features/bookings/BookingDetail";

function Booking() {
  return <BookingDetail />;
}

export default Booking;

// RULE
// a page should not fetch data and also should not have any other side effects. not a hard rule but many people use it it makes the pages much cleaner and leaves much of the development work in the features folder
