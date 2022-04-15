import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeierEggenSchwilerSpillmannZweigComponent } from './meier-eggen-schwiler-spillmann-zweig.component';

describe('MeierEggenSchwilerSpillmannZweigComponent', () => {
  let component: MeierEggenSchwilerSpillmannZweigComponent;
  let fixture: ComponentFixture<MeierEggenSchwilerSpillmannZweigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeierEggenSchwilerSpillmannZweigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeierEggenSchwilerSpillmannZweigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
