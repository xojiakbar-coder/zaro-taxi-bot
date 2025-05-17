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

  export interface User {
    id: number;
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
}
