import { Component, OnInit } from '@angular/core';
import { Popup } from './popup.model';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  popupList: Popup[] = [];
  myPopup = new Popup({text: ""});

  constructor() { }

  ngOnInit() { }

  doShow(myPopup) {
    this.popupList.push(myPopup);
  }
}

