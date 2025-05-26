export interface Location {
  id: number;
  name: string;
}

export interface Route {
  id: number;
  start: Location;
  finish: Location;
}

export interface RoutesCardProps {
  id: number;
  start: string;
  finish: string;
  selected?: boolean;
  className?: string;
  onClick?: () => void;
}

export interface DriverCardProps {
  id: number;
  start: string;
  finish: string;
  className?: string;
  onClick?: () => void;
}
