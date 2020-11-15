import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoridesComponent } from './norides.component';

describe('NoridesComponent', () => {
  let component: NoridesComponent;
  let fixture: ComponentFixture<NoridesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoridesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoridesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
