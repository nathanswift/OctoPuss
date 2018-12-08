import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinTheClubComponent } from './join-the-club.component';

describe('JoinTheClubComponent', () => {
  let component: JoinTheClubComponent;
  let fixture: ComponentFixture<JoinTheClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinTheClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinTheClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
