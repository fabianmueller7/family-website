import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisatorischesComponent } from './organisatorisches.component';

describe('OrganisatorischesComponent', () => {
  let component: OrganisatorischesComponent;
  let fixture: ComponentFixture<OrganisatorischesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganisatorischesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisatorischesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
