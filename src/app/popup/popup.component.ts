import { Component, OnInit } from '@angular/core';
import { Popup } from './popup.model';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  popupList: Popup[] = [];
  private lastId: number;

  constructor() { }

  ngOnInit() {}

  doShow(popupParams) {
    let myPopup = new Popup(popupParams);
    this.popupList.push(myPopup);
    this.lastId++;
    console.log(this.lastId);
  }

  onClosed(popup: Popup){
    this.popupList.filter(popup => popup.id === this.lastId)
  }
}

