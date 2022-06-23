import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaySiteNavComponent } from './kay-site-nav.component';

describe('KaySiteNavComponent', () => {
  let component: KaySiteNavComponent;
  let fixture: ComponentFixture<KaySiteNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaySiteNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KaySiteNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
