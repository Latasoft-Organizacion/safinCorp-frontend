import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosUtilesComponent } from './datos-utiles.component';

describe('DatosUtilesComponent', () => {
  let component: DatosUtilesComponent;
  let fixture: ComponentFixture<DatosUtilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosUtilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosUtilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
