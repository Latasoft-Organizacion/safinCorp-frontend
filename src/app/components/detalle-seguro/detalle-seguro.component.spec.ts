import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSeguroComponent } from './detalle-seguro.component';

describe('DetalleSeguroComponent', () => {
  let component: DetalleSeguroComponent;
  let fixture: ComponentFixture<DetalleSeguroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleSeguroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleSeguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
