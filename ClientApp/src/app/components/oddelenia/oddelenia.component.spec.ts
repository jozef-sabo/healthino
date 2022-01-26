import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OddeleniaComponent } from './oddelenia.component';

describe('OddeleniaComponent', () => {
  let component: OddeleniaComponent;
  let fixture: ComponentFixture<OddeleniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OddeleniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OddeleniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
