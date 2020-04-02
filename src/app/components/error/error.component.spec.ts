/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { ErrorComponent } from "./error.component";

describe("ErrorComponent", () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should render paragraph with error text", () => {
    const errorParagraph = fixture.debugElement.query(By.css("p"))
      .nativeElement;
    expect(errorParagraph.innerHTML).toBe("Error");
  });

  it("should render paragraph with error class", () => {
    const errorParagraph = fixture.debugElement.query(By.css(".error"))
      .nativeElement;
    expect(errorParagraph).not.toBeNull();
  });
});
