export interface ICurrentUser {
  first_name: string;
  last_name: string;
}

export interface IActionType {
  type: string;
  [key: string]: any;
}
