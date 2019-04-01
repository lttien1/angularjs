import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class HeaderService {

  isOpen = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  toggle() {
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
  }
}
