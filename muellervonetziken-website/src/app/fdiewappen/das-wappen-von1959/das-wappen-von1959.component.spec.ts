import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasWappenVon1959Component } from './das-wappen-von1959.component';

describe('DasWappenVon1959Component', () => {
  let component: DasWappenVon1959Component;
  let fixture: ComponentFixture<DasWappenVon1959Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasWappenVon1959Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DasWappenVon1959Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
