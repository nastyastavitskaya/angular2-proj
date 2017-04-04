import { Component, ViewChild, OnInit } from '@angular/core';
import { PopupComponent } from './popup/popup.component';
import { Popup } from './popup/popup.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(PopupComponent) popupComponent: PopupComponent
  myPopup = new Popup({text: "App works!"});

  ngOnInit() {
    this.popupComponent.doShow(this.myPopup);
  }
}
