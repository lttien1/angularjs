import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SettingsDrawerService } from '../settings-drawer.service';

@Component({
  selector: 'app-setting-title',
  templateUrl: './setting-title.component.html',
  styleUrls: ['./setting-title.component.css']
})
export class SettingTitleComponent implements OnInit {
  isOpen = true;
  @Input()
  title: string;

  @Output()
  clickButton = new EventEmitter();

  constructor(private settingsDrawerService: SettingsDrawerService) { }
  ngOnInit() {
  }

  toggleDrawer() {
    this.isOpen = !this.isOpen;
    this.settingsDrawerService.toggle();
  }
}
