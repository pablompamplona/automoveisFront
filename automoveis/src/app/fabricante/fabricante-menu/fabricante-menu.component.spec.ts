import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricanteMenuComponent } from './fabricante-menu.component';

describe('FabricanteMenuComponent', () => {
  let component: FabricanteMenuComponent;
  let fixture: ComponentFixture<FabricanteMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabricanteMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabricanteMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
