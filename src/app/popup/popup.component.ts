import { Component } from '@angular/core';
import { PopupService } from 'app/popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html'
})
export class PopupComponent {
  popupList = this.popupService.popupList;

  constructor(private popupService: PopupService){ }
}

