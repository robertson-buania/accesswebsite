import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImitateurComponent } from './imitateur.component';

describe('ImitateurComponent', () => {
  let component: ImitateurComponent;
  let fixture: ComponentFixture<ImitateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImitateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImitateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
