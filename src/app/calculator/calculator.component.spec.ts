import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CalculatorComponent } from "./calculator.component";

describe("CalculatorComponent", () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should calculate sums correctly", () => {
    component.calculatorForm.get("firstInput").setValue(8);
    component.calculatorForm.get("secondInput").setValue(2);
    component.calculatorForm.get("operator").setValue("+");
    component.onSubmit();

    expect(component.result).toBe(10);
  });

  it("should calculate subtractions correctly", () => {
    component.calculatorForm.get("firstInput").setValue(11);
    component.calculatorForm.get("secondInput").setValue(2);
    component.calculatorForm.get("operator").setValue("-");
    component.onSubmit();

    expect(component.result).toBe(9);
  });

  it("should calculate divisions correctly", () => {
    component.calculatorForm.get("firstInput").setValue(6);
    component.calculatorForm.get("secondInput").setValue(2);
    component.calculatorForm.get("operator").setValue("/");
    component.onSubmit();

    expect(component.result).toBe(3);
  });

  it("should calculate multiplications correctly", () => {
    component.calculatorForm.get("firstInput").setValue(11);
    component.calculatorForm.get("secondInput").setValue(2);
    component.calculatorForm.get("operator").setValue("*");
    component.onSubmit();

    expect(component.result).toBe(23);
  });

  it("should clear the form", () => {
    component.calculatorForm.get("firstInput").setValue(10);
    component.calculatorForm.get("secondInput").setValue(2);
    component.calculatorForm.get("operator").setValue("+");
    component.onClear();

    expect(component.calculatorForm.get("firstInput").value).toBeNull();
    expect(component.calculatorForm.get("secondInput").value).toBeNull();
    expect(component.calculatorForm.get("operator").value).toBe("");
  });
});
