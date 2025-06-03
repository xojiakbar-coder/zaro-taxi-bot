export type OrderFormData = {
  telegram_id: string;
  front_seat: boolean;
  route: number;
  extra_luggage: string | null;
  is_delivery: boolean;
  ride_price: string | null;
  is_cashback_used: boolean;
  cashback_used_percent: number | null;
  payment_type: 'Cash' | 'Card' | null;
  date_of_departure: string | null;
  car_type: 'Standart' | 'Comfort' | 'Biznes' | null;
};

interface Location {
  id: number;
  name: string;
}

export interface Route {
  id: number;
  start: Location;
  finish: Location;
}

export interface UseRouteList {
  data: Route[];
  loading: boolean;
  success: boolean;
  error: string | null;
}
