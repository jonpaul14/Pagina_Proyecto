import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hoja5Component } from './hoja5.component';

describe('Hoja5Component', () => {
  let component: Hoja5Component;
  let fixture: ComponentFixture<Hoja5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hoja5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Hoja5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
