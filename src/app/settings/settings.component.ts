import { Component, OnInit, Input, ViewChild } from '@angular/core';
import SettingConstants from './settings.constants';
// import { FormControl } from '@angular/forms';
import { SettingsDrawerService } from './settings-drawer.service';
import { MatDrawer } from '@angular/material';
// import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})

export class SettingsComponent implements OnInit {
  menus = SettingConstants.MENUS;
  activeKey = 'contacts';

  @ViewChild('drawer') public drawer: MatDrawer;

  constructor(private settingsDrawerService: SettingsDrawerService) {}

  ngOnInit() {
    this.settingsDrawerService.setDrawer(this.drawer);
  }

  onSelectMenu(key) {
    this.activeKey = key;
  }
}
