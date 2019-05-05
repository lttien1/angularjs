import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderService } from './components/header/header.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MapSelectItemPipe } from './pipes/map-select-item.pipe';
import { ConvertUndefinedValuePipe } from './pipes/convert-undefined-value.pipe';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { ContactSettingComponent } from './settings/contact-setting/contact-setting.component';
import { ContactSettingDrawerComponent } from './settings/contact-setting/contact-setting-drawer/contact-setting-drawer.component';
import { SettingTitleComponent } from './settings/setting-title/setting-title.component';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    MapSelectItemPipe,
    ConvertUndefinedValuePipe,
    SettingsComponent,
    ContactSettingComponent,
    ContactSettingDrawerComponent,
    SettingTitleComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    HeaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
