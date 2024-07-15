import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBooking() {
  const { bookingId } = useParams();
  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: () => getBooking(bookingId),
    //react query fetches data three time incase it fails in the begining we are disabling it to fetch only once and if it fails meaning theres no data there
    retry: false,
  });

  return { isLoading, booking, error };
}
