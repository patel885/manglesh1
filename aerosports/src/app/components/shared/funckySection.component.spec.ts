import { NO_ERRORS_SCHEMA } from "@angular/core";
import { FunckySectionComponent } from "./funckySection.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("FunckySectionComponent", () => {

  let fixture: ComponentFixture<FunckySectionComponent>;
  let component: FunckySectionComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [FunckySectionComponent]
    });

    fixture = TestBed.createComponent(FunckySectionComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
