import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSettingDrawerComponent } from './contact-setting-drawer.component';

describe('ContactSettingDrawerComponent', () => {
  let component: ContactSettingDrawerComponent;
  let fixture: ComponentFixture<ContactSettingDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSettingDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSettingDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
