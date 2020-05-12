import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerosRomanosComponent } from './numeros-romanos.component';

describe('NumerosRomanosComponent', () => {
  let component: NumerosRomanosComponent;
  let fixture: ComponentFixture<NumerosRomanosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumerosRomanosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerosRomanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});
