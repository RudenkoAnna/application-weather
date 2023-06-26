//Test for code WeatherTemperature.js

describe("WeatherTemperature", () => {
  let component;
  let setUnitMock;

  beforeEach(() => {
    setUnitMock = jasmine.createSpy("setUnit");

    // Mock the useState hook
    spyOn(React, "useState").and.returnValue(["celsius", setUnitMock]);

    component = WeatherTemperature();
  });

  it("converts to Fahrenheit when convertToFahrenheit is called", () => {
    const event = jasmine.createSpyObj("event", ["preventDefault"]);

    component.convertToFahrenheit(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(setUnitMock).toHaveBeenCalledWith("fahrenheit");
  });

  it("converts to Celsius when convertToCelsius is called", () => {
    const event = jasmine.createSpyObj("event", ["preventDefault"]);

    component.convertToCelsius(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(setUnitMock).toHaveBeenCalledWith("celsius");
  });
});
