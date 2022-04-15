import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasWappenVon1893Component } from './das-wappen-von1893.component';

describe('DasWappenVon1893Component', () => {
  let component: DasWappenVon1893Component;
  let fixture: ComponentFixture<DasWappenVon1893Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasWappenVon1893Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DasWappenVon1893Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
