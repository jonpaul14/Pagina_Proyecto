import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tienda2Component } from './tienda2.component';

describe('Tienda2Component', () => {
  let component: Tienda2Component;
  let fixture: ComponentFixture<Tienda2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tienda2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Tienda2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
