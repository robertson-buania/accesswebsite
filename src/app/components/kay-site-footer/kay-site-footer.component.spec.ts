import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaySiteFooterComponent } from './kay-site-footer.component';

describe('KaySiteFooterComponent', () => {
  let component: KaySiteFooterComponent;
  let fixture: ComponentFixture<KaySiteFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaySiteFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KaySiteFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
