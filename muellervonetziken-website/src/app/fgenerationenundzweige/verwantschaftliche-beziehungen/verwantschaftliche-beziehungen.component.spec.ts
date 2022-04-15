import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerwantschaftlicheBeziehungenComponent } from './verwantschaftliche-beziehungen.component';

describe('VerwantschaftlicheBeziehungenComponent', () => {
  let component: VerwantschaftlicheBeziehungenComponent;
  let fixture: ComponentFixture<VerwantschaftlicheBeziehungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerwantschaftlicheBeziehungenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerwantschaftlicheBeziehungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
