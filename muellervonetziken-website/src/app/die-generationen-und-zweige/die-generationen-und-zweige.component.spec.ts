import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieGenerationenUndZweigeComponent } from './die-generationen-und-zweige.component';

describe('DieGenerationenUndZweigeComponent', () => {
  let component: DieGenerationenUndZweigeComponent;
  let fixture: ComponentFixture<DieGenerationenUndZweigeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieGenerationenUndZweigeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DieGenerationenUndZweigeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
