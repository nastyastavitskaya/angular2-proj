export class Popup {
  public type?: string = 'info';
  public text: string;
  public dismissible?: boolean = true;
  public delay?: number = 2500;

  constructor(params: Popup, text: string){
    Object.assign(this, params);
    this.text = text;
  }
}