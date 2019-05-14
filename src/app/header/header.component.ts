import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() linkClicked = new EventEmitter<string>();

  constructor() { }

  onSelect(feature: string) {
    this.linkClicked.emit(feature);
  }
}
