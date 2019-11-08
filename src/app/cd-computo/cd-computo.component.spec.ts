import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdComputoComponent } from './cd-computo.component';

describe('CdComputoComponent', () => {
  let component: CdComputoComponent;
  let fixture: ComponentFixture<CdComputoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdComputoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdComputoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
