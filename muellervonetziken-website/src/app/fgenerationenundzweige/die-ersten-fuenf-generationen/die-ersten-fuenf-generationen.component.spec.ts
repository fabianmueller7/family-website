import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieErstenFuenfGenerationenComponent } from './die-ersten-fuenf-generationen.component';

describe('DieErstenFuenfGenerationenComponent', () => {
  let component: DieErstenFuenfGenerationenComponent;
  let fixture: ComponentFixture<DieErstenFuenfGenerationenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieErstenFuenfGenerationenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DieErstenFuenfGenerationenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
