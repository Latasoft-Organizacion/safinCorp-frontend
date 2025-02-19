import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrasAliansasComponent } from './nuestras-aliansas.component';

describe('NuestrasAliansasComponent', () => {
  let component: NuestrasAliansasComponent;
  let fixture: ComponentFixture<NuestrasAliansasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuestrasAliansasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuestrasAliansasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
