import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {GroupJoinContainerComponent} from "./group-join-container.component";

describe('GroupJoinContainerComponent', () => {
  let component: GroupJoinContainerComponent;
  let fixture: ComponentFixture<GroupJoinContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupJoinContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupJoinContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
