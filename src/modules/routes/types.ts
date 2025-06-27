export declare namespace IApi {
  export namespace Single {
    export interface Response {
      data: IEntity.Routes;
    }
  }
}

export declare namespace IEntity {
  interface Location {
    id: number;
    name: string;
  }

  export interface Routes {
    id: number;
    start: Location;
    finish: Location;
  }
}

export declare namespace IQuery {
  export interface List {
    routes: IEntity.Routes[];
  }
}
