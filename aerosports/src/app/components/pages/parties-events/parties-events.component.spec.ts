import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartiesEventsComponent } from './parties-events.component';

describe('PartiesEventsComponent', () => {
  let component: PartiesEventsComponent;
  let fixture: ComponentFixture<PartiesEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartiesEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartiesEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
