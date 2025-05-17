export declare namespace IEntity {
  export interface Order {}
}

export declare namespace IApi {
  export interface Single {}
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
