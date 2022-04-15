import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsaessigerZweigComponent } from './ansaessiger-zweig.component';

describe('AnsaessigerZweigComponent', () => {
  let component: AnsaessigerZweigComponent;
  let fixture: ComponentFixture<AnsaessigerZweigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnsaessigerZweigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnsaessigerZweigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
