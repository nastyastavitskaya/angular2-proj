import { Injectable } from '@angular/core';
import { Popup } from './popup/popup.model';

@Injectable()

export class PopupService {
  popupList: Popup[] = [];
  private lastId: number = 1;

  doShow(popupParams) {
    let myPopup = new Popup(popupParams, this.lastId);
    console.log(myPopup);
    this.popupList.push(myPopup);
    this.lastId++;
  }

  onClosed(closedPopup: Popup){
    this.popupList = this.popupList.filter(popup => closedPopup.id  !==  popup.id);
  }
}