import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenatoZweigComponent } from './renato-zweig.component';

describe('RenatoZweigComponent', () => {
  let component: RenatoZweigComponent;
  let fixture: ComponentFixture<RenatoZweigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenatoZweigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenatoZweigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
