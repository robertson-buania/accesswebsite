import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessinateurComponent } from './dessinateur.component';

describe('DessinateurComponent', () => {
  let component: DessinateurComponent;
  let fixture: ComponentFixture<DessinateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DessinateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DessinateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
