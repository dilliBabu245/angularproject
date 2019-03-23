import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutserviceComponent } from './aboutservice.component';

describe('AboutserviceComponent', () => {
  let component: AboutserviceComponent;
  let fixture: ComponentFixture<AboutserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
