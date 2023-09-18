import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjektumComponent } from './objektum.component';

describe('ObjektumComponent', () => {
  let component: ObjektumComponent;
  let fixture: ComponentFixture<ObjektumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjektumComponent]
    });
    fixture = TestBed.createComponent(ObjektumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
