import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomoveisMenuComponent } from './automoveis-menu.component';

describe('AutomoveisMenuComponent', () => {
  let component: AutomoveisMenuComponent;
  let fixture: ComponentFixture<AutomoveisMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomoveisMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomoveisMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
