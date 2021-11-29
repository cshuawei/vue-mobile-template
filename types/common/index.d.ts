
export namespace Ux {
  export type Msg = string
}

export namespace Http {
  export type Url = string
  export interface Data {
    [prop: string]: any
  }
  export interface Options {
    method?: 'post' | 'get';
    url: string;
    withCredentials?: boolean,
    baseURL?: string,
    timeout?: number,
    isErrorHint?: boolean,
    headers?: { [prop: string]: any },
    data?: { [prop: string]: any },
    params?: { [prop: string]: any }
  }
}

export namespace Util {
  export type StorageType = 'local' | 'session'
  export type StorageAction = 'set' | 'get' | 'del'
}
