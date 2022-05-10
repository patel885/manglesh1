import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupEventDetailComponent } from './group-event-detail.component';

describe('GroupEventDetailComponent', () => {
  let component: GroupEventDetailComponent;
  let fixture: ComponentFixture<GroupEventDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupEventDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupEventDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
