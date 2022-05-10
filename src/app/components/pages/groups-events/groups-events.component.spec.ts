import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsEventsComponent } from './groups-events.component';

describe('GroupsEventsComponent', () => {
  let component: GroupsEventsComponent;
  let fixture: ComponentFixture<GroupsEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupsEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
