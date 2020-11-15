import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelridesComponent } from './cancelrides.component';

describe('CancelridesComponent', () => {
  let component: CancelridesComponent;
  let fixture: ComponentFixture<CancelridesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelridesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelridesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
