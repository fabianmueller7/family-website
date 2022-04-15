import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerfamiliennamemuellerComponent } from './derfamiliennamemueller.component';

describe('DerfamiliennamemuellerComponent', () => {
  let component: DerfamiliennamemuellerComponent;
  let fixture: ComponentFixture<DerfamiliennamemuellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DerfamiliennamemuellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DerfamiliennamemuellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
