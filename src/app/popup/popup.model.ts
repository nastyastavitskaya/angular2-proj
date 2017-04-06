export class Popup {
  type?: string = 'info';
  text: string;
  dismissible?: boolean = true;
  delay?: number = 2500;
  id: number;

  constructor(params: Popup, id: number) {
    Object.assign(this, params);
    this.id = id;
  }
}