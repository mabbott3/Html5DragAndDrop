import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppfunctionsComponent } from './appfunctions.component';

describe('AppfunctionsComponent', () => {
  let component: AppfunctionsComponent;
  let fixture: ComponentFixture<AppfunctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppfunctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppfunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
