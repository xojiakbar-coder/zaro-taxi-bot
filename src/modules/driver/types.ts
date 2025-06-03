export declare namespace IApi {
  export namespace Single {
    export interface Response {
      data: IEntity.User;
    }
  }

  export interface User {}
}

export declare namespace IEntity {
  export interface Order {
    telegram_id: string;
    route: number;
    is_delivery: boolean;
    ride_price: string | null;
    cashback_used_percent: number | null;
    front_seat: boolean;
    extra_luggage: string | null;
    is_cashback_used: boolean;
    car_type: 'Standart' | 'Comfort' | 'Biznes';
    date_of_departure: string;
    payment_type: 'Cash' | 'Card';
  }

  interface Route {
    id: number;
    start: {
      id: number;
      name: string;
    };
    finish: {
      id: number;
      name: string;
    };
  }

  interface MyOrders {
    id: string;
    route: Route;
    created_at: string;
    updated_at: boolean;
    ride_price: string | null;
    front_seat: boolean;
    extra_luggage: string | null;
    date_of_departure: string;
    car_type: 'Standart' | 'Comfort' | 'Biznes';
    payment_type: 'Cash' | 'Card';
  }

  export interface User {
    id: string;
    first_name?: string;
    last_name?: string;
    username?: string;
    language_code?: string;
    allows_write_to_pm?: boolean;
    photo_url?: string;
  }

  export interface SelectedTariff {
    id: number;
    created_at: string;
    updated_at: string;
    name: string;
    price: string;
    duration_days: number;
    ride_limit: number;
    comission: number;
  }

  export interface CurrentTariff {
    selected_tariff: SelectedTariff;
    is_paid: boolean;
    paid_at: string;
    tariff_end: string;
  }

  interface Passenger {
    id: number;
    full_name: string;
    phone_number: string;
    telegram_id: string;
    promo_code: string;
    cashback_percentage: number;
    cashback_amount: number;
  }

  interface Bookings {
    id: number;
    passenger: Passenger;
    created_at: string; // ISO date-time string
    updated_at: string; // ISO date-time string
    front_seat: boolean;
    extra_luggage: string;
    is_delivery: boolean;
    ride_price: string; // This is a string in the data, but you might convert to number
    is_cashback_used: boolean;
    cashback_used_percent: number;
    payment_type: string;
    date_of_departure: string; // ISO date-time string
    car_type: string;
    payment_screenshot: string | null;
    route: number;
  }

  export interface RecentRide {
    id: number;
    commission_payment_screenshot: string | null;
    created_at: string;
    updated_at: string;
    is_completed: boolean;
    driver: number;
    route: Route;
    bookings: Bookings[];
  }

  export interface Driver {
    id: number;
    car_number: string;
    car_model_name: string;
    is_active: boolean;
    current_tariff: CurrentTariff;
    recent_rides: RecentRide[];
  }

  export interface Tariff {
    id: number;
    name: string;
    price: string;
    comission: number;
    updated_at: string;
    created_at: string;
    ride_limit: number;
    duration_days: number;
  }
}

export declare namespace IQuery {
  export interface List {
    items: IEntity.User[];
  }

  export interface Single {
    item: IEntity.User;
  }

  export interface Delete {
    id: number;
  }
}

export declare namespace IForm {
  export interface Create {
    telegram_id: string;
    is_delivery: boolean;
    ride_price: string;
    cashback_used_percent: number;
    front_seat: boolean;
    extra_luggage: string;
    is_cashback_used: boolean;
    car_type: 'Standart' | 'Comfort' | 'Biznes';
    date_of_departure: string;
    payment_type: 'Cash' | 'Card';
  }
}
