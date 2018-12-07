import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainQueryComponent } from './domain-query.component';

describe('DomainQueryComponent', () => {
  let component: DomainQueryComponent;
  let fixture: ComponentFixture<DomainQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
