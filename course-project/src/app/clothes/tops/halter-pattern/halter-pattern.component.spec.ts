import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalterPatternComponent } from './halter-pattern.component';

describe('HalterPatternComponent', () => {
  let component: HalterPatternComponent;
  let fixture: ComponentFixture<HalterPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalterPatternComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HalterPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
