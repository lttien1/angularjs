import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input()
  activeKey: string;

  @Input()
  menus: [];

  @Output()
  selectMenu = new EventEmitter<string>();

  constructor() { }
  ngOnInit() {
  }

}
