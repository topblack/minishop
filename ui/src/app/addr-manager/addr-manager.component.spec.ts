import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrManagerComponent } from './addr-manager.component';

describe('AddrManagerComponent', () => {
  let component: AddrManagerComponent;
  let fixture: ComponentFixture<AddrManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
