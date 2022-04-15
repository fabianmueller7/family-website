import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZweigDerSphinxComponent } from './zweig-der-sphinx.component';

describe('ZweigDerSphinxComponent', () => {
  let component: ZweigDerSphinxComponent;
  let fixture: ComponentFixture<ZweigDerSphinxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZweigDerSphinxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZweigDerSphinxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
