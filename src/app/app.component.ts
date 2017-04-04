import { Component, ViewChild, OnInit } from '@angular/core';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(PopupComponent) popupComponent: PopupComponent

  ngOnInit() {
    this.popupComponent.doShow();
  }
}
