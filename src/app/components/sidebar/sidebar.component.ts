import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  mode = new FormControl('side');
  hasBackdrop = new FormControl(false);

  @HostBinding('class.is-open')
  isOpen = false;

  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit() {
    this.headerService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

  onToggleDrawer() {
    this.headerService.toggle();
  }
}
