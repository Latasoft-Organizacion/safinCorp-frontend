import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrosSegurosComponent } from './nuestros-seguros.component';

describe('NuestrosSegurosComponent', () => {
  let component: NuestrosSegurosComponent;
  let fixture: ComponentFixture<NuestrosSegurosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuestrosSegurosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuestrosSegurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
