import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Injectable({
  providedIn: 'root'
})

export class SettingsDrawerService {
  private drawer: MatDrawer;

  public setDrawer(flyout: MatDrawer) {
    this.drawer = flyout;
  }

  public open() {
    return this.drawer.open();
  }

  public close() {
    return this.drawer.close();
  }

  public toggle(): void {
    this.drawer.toggle();
  }
}
