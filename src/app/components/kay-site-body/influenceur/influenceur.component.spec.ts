import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluenceurComponent } from './influenceur.component';

describe('InfluenceurComponent', () => {
  let component: InfluenceurComponent;
  let fixture: ComponentFixture<InfluenceurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfluenceurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluenceurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
