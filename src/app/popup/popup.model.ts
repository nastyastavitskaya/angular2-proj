export class Popup {
  type?: string = 'info';
  text: string;
  dismissible?: boolean = true;
  delay?: number = 2500;

  constructor(
    params: {
      type?: string,
      text: string,
      dismissible?: boolean,
      delay?: number
    }){
    Object.assign(this, params)
  }
}