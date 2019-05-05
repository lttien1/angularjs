import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-setting-title',
  templateUrl: './setting-title.component.html',
  styleUrls: ['./setting-title.component.css']
})
export class SettingTitleComponent implements OnInit {

  @Input()
  title: string;

  @Output()
  clickButton = new EventEmitter();

  @Output()
  openToggle = new EventEmitter();

  constructor() { }
  ngOnInit() {
  }
}
