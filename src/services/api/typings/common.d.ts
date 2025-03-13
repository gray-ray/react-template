declare namespace API_COMMON {
  type Restful<T> = {
    success?: boolean;
    code: number;
    msg: string;
    data: T;
  };

  type Page_Vo<T> = {
    total: number;
    list: T[];
    [prop: string]: unknown;
  };
}
