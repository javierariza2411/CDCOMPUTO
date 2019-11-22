import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpentoggleComponent } from './opentoggle.component';

describe('OpentoggleComponent', () => {
  let component: OpentoggleComponent;
  let fixture: ComponentFixture<OpentoggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpentoggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpentoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
