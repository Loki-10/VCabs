import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindriversComponent } from './admindrivers.component';

describe('AdmindriversComponent', () => {
  let component: AdmindriversComponent;
  let fixture: ComponentFixture<AdmindriversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmindriversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
