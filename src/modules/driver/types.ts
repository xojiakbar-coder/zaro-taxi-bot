export declare namespace IApi {
  export namespace Single {
    export interface Response {
      data: IEntity.Driver;
    }
  }
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
    createdAt: string;
    updatedAt: string;
    name: string;
    price: string;
    durationDays: number;
    rideLimit: number;
    comission: number;
  }

  export interface CurrentTariff {
    selectedTariff: SelectedTariff;
    isPaid: boolean;
    paidAt: string;
    tariffEnd: string;
  }

  interface Passenger {
    id: number;
    fullName: string;
    phoneNumber: string;
    telegramId: string;
    promoCode: string;
    cashbackPercentage: number;
    cashbackAmount: number;
  }

  export interface Bookings {
    id: number;
    passenger: Passenger;
    createdAt: string;
    updatedAt: string;
    frontSeat: boolean;
    extraLuggage: string;
    isDelivery: boolean;
    ridePrice: string;
    isCashbackUsed: boolean;
    cashbackUsedPercent: number;
    paymentType: string;
    dateOfDeparture: string;
    carType: string;
    paymentScreenshot: string | null;
    routeId: number;
  }

  export interface RecentRide {
    id: number;
    commissionPaymentScreenshot: string | null;
    createdAt: string;
    updatedAt: string;
    isCompleted: boolean;
    driver: Driver;
    route: Route;
    bookings: Bookings[];
  }

  export interface Driver {
    id: number;
    carNumber: string;
    isActive: boolean;
    carModelName: string;
    currentTariff: CurrentTariff;
    recentRides: RecentRide[];
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
    item: IEntity.Driver;
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
