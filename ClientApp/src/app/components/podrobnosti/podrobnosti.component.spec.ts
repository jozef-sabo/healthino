import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodrobnostiComponent } from './podrobnosti.component';

describe('PodrobnostiComponent', () => {
  let component: PodrobnostiComponent;
  let fixture: ComponentFixture<PodrobnostiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodrobnostiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodrobnostiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
