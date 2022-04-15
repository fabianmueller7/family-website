import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtzikenUndDieDortAnsaessigenMuellerComponent } from './etziken-und-die-dort-ansaessigen-mueller.component';

describe('EtzikenUndDieDortAnsaessigenMuellerComponent', () => {
  let component: EtzikenUndDieDortAnsaessigenMuellerComponent;
  let fixture: ComponentFixture<EtzikenUndDieDortAnsaessigenMuellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtzikenUndDieDortAnsaessigenMuellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtzikenUndDieDortAnsaessigenMuellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
