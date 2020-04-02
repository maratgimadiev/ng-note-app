/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { LoadingComponent } from "./loading.component";

describe("LoadingComponent", () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should render lds-roller", () => {
    const ldsRoller = fixture.debugElement.query(By.css(".lds-roller"));
    expect(ldsRoller).not.toBeNull();
  });
  it("should render 8 dots", () => {
    const ldsRoller = fixture.debugElement.query(By.css(".lds-roller"))
      .nativeElement;
    expect(ldsRoller.childNodes.length).toBe(8);
  });
});
