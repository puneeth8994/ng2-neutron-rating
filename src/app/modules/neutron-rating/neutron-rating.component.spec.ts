import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeutronRatingComponent } from './neutron-rating.component';

describe('NeutronRatingComponent', () => {
  let component: NeutronRatingComponent;
  let fixture: ComponentFixture<NeutronRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeutronRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeutronRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
