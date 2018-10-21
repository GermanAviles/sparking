import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideinfoComponent } from './slideinfo.component';

describe('SlideinfoComponent', () => {
  let component: SlideinfoComponent;
  let fixture: ComponentFixture<SlideinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
