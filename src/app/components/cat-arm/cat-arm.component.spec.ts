import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatArmComponent } from './cat-arm.component';

describe('CatArmComponent', () => {
  let component: CatArmComponent;
  let fixture: ComponentFixture<CatArmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatArmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatArmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
