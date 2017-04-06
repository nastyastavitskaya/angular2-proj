import { Component, OnInit } from '@angular/core';
import { Popup } from './popup.model';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  popupList: Popup[] = [];
  private lastId: number = 1;

  constructor() { }

  ngOnInit() {}

  doShow(popupParams) {
    let myPopup = new Popup(popupParams, this.lastId);
    console.log(myPopup);
    this.popupList.push(myPopup);
    this.lastId++;
  }

  onClosed(popup: Popup){
    this.popupList = this.popupList.filter(closedPopup => closedPopup.id  ===  popup.id);
  }
}

