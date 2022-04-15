import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieVorgenerationenComponent } from './die-vorgenerationen.component';

describe('DieVorgenerationenComponent', () => {
  let component: DieVorgenerationenComponent;
  let fixture: ComponentFixture<DieVorgenerationenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieVorgenerationenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DieVorgenerationenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
