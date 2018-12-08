import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OctopusArmComponent } from './octopus-arm.component';

describe('OctopusArmComponent', () => {
  let component: OctopusArmComponent;
  let fixture: ComponentFixture<OctopusArmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OctopusArmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OctopusArmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
