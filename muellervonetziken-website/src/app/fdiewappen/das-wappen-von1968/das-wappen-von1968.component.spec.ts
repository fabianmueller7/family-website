import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasWappenVon1968Component } from './das-wappen-von1968.component';

describe('DasWappenVon1968Component', () => {
  let component: DasWappenVon1968Component;
  let fixture: ComponentFixture<DasWappenVon1968Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasWappenVon1968Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DasWappenVon1968Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
