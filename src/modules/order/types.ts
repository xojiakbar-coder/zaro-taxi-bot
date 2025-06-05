import * as Types from '@/modules/driver/types';
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
    car_type: 'Standart' | 'Comfort' | 'Biznes' | null;
    date_of_departure: string | null;
    payment_type: 'Cash' | 'Card' | null;
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

  export interface IDriver {
    id: number;
    full_name: string;
    phone_number: string;
    telegram_id: string;
    car_number: string;
    car_model: string;
    car_type: string;
    is_paid_comission: boolean;
    is_active: boolean;
  }

  export interface IRide {
    id: number;
    is_completed: boolean;
    created_at: string;
    updated_at: string;
    driver: IDriver;
    route: Route;
    bookings: Types.IEntity.Bookings[];
    commission_payment_screenshot: string | null;
  }

  interface MyOrders {
    id: string;
    route: Route;
    created_at: string;
    updated_at: boolean;
    ride_price: string | null;
    front_seat: boolean;
    date_of_departure: string;
    related_ride: IRide | null;
    extra_luggage: string | null;
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

  export interface Update {}
}
