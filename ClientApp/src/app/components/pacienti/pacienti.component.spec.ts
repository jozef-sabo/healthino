import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientiComponent } from './pacienti.component';

describe('PacientiComponent', () => {
  let component: PacientiComponent;
  let fixture: ComponentFixture<PacientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacientiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
