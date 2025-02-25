import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagarSeguroComponent } from './pagar-seguro.component';

describe('PagarSeguroComponent', () => {
  let component: PagarSeguroComponent;
  let fixture: ComponentFixture<PagarSeguroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagarSeguroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagarSeguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
