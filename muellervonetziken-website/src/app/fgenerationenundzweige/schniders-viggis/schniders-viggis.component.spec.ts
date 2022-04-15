import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchnidersViggisComponent } from './schniders-viggis.component';

describe('SchnidersViggisComponent', () => {
  let component: SchnidersViggisComponent;
  let fixture: ComponentFixture<SchnidersViggisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchnidersViggisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchnidersViggisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
