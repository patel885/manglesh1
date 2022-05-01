import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampProgramsComponent } from './camp-programs.component';

describe('CampProgramsComponent', () => {
  let component: CampProgramsComponent;
  let fixture: ComponentFixture<CampProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampProgramsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
