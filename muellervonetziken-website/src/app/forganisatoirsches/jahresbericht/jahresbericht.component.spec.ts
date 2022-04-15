import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JahresberichtComponent } from './jahresbericht.component';

describe('JahresberichtComponent', () => {
  let component: JahresberichtComponent;
  let fixture: ComponentFixture<JahresberichtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JahresberichtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JahresberichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
