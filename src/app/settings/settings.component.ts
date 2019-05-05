import { Component, OnInit } from '@angular/core';
import SettingConstants from './settings.constants';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})

export class SettingsComponent implements OnInit {
  menus = SettingConstants.MENUS;
  activeKey = 'contacts';

  constructor() {}

  ngOnInit() {}

  onSelectMenu(key) {
    console.log('adsdasdasds', key);
    this.activeKey = key;
  }
}
