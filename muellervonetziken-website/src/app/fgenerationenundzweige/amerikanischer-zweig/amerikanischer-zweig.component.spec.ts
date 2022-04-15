import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmerikanischerZweigComponent } from './amerikanischer-zweig.component';

describe('AmerikanischerZweigComponent', () => {
  let component: AmerikanischerZweigComponent;
  let fixture: ComponentFixture<AmerikanischerZweigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmerikanischerZweigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmerikanischerZweigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
