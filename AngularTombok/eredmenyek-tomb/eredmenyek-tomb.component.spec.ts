import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EredmenyekTombComponent } from './eredmenyek-tomb.component';

describe('EredmenyekTombComponent', () => {
  let component: EredmenyekTombComponent;
  let fixture: ComponentFixture<EredmenyekTombComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EredmenyekTombComponent]
    });
    fixture = TestBed.createComponent(EredmenyekTombComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
