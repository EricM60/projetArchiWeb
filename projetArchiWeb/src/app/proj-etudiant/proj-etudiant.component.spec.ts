import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjEtudiantComponent } from './proj-etudiant.component';

describe('ProjEtudiantComponent', () => {
  let component: ProjEtudiantComponent;
  let fixture: ComponentFixture<ProjEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjEtudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
