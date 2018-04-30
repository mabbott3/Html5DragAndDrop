import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerfunctionsComponent } from './innerfunctions.component';

describe('InnerfunctionsComponent', () => {
  let component: InnerfunctionsComponent;
  let fixture: ComponentFixture<InnerfunctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerfunctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerfunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
