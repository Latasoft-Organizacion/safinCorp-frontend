import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunciarSiniestroComponent } from './denunciar-siniestro.component';

describe('DenunciarSiniestroComponent', () => {
  let component: DenunciarSiniestroComponent;
  let fixture: ComponentFixture<DenunciarSiniestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DenunciarSiniestroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DenunciarSiniestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
