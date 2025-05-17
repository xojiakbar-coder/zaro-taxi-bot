export interface Location {
  id: number;
  name: string;
}

export interface Route {
  id: number;
  start: Location;
  finish: Location;
}

export interface CardProps {
  id: number;
  start: string;
  finish: string;
  className?: string;
  onClick?: () => void;
}

