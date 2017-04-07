import { Component } from '@angular/core';
import { PopupService } from 'app/popup.service';
import { Popup } from './popup.model';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html'
})
export class PopupComponent {
  popupList = this.popupService.popupList;

  constructor(private popupService: PopupService) { }

  public onClosed(popup: Popup): void {
    this.popupService.onClosed(popup);
  }
}

