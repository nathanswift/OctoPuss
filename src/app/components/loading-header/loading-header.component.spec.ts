import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingHeaderComponent } from './loading-header.component';

describe('LoadingHeaderComponent', () => {
  let component: LoadingHeaderComponent;
  let fixture: ComponentFixture<LoadingHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
