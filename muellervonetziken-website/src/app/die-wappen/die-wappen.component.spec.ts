import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieWappenComponent } from './die-wappen.component';

describe('DieWappenComponent', () => {
  let component: DieWappenComponent;
  let fixture: ComponentFixture<DieWappenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieWappenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DieWappenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
