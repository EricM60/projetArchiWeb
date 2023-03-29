import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjEnseignantComponent } from './proj-enseignant.component';

describe('ProjEnseignantComponent', () => {
  let component: ProjEnseignantComponent;
  let fixture: ComponentFixture<ProjEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjEnseignantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
