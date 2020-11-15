import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminadddriversComponent } from './adminadddrivers.component';

describe('AdminadddriversComponent', () => {
  let component: AdminadddriversComponent;
  let fixture: ComponentFixture<AdminadddriversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminadddriversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminadddriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
