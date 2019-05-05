import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingTitleComponent } from './setting-title.component';

describe('SettingTitleComponent', () => {
  let component: SettingTitleComponent;
  let fixture: ComponentFixture<SettingTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
