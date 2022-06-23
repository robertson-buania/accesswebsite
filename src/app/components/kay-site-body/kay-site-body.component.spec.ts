import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaySiteBodyComponent } from './kay-site-body.component';

describe('KaySiteBodyComponent', () => {
  let component: KaySiteBodyComponent;
  let fixture: ComponentFixture<KaySiteBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaySiteBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KaySiteBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
