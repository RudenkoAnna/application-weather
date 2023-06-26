// test for file Weather.js
//first test ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
describe("handleResponse", () => {
  it("should update weatherData state correctly", () => {
    const mockResponse = {
      data: {
        coord: { lat: 51.5074, lon: -0.1278 },
        main: { temp: 25, feels_like: 28, humidity: 80 },
        wind: { speed: 10 },
        name: "London",
        dt: 1624599721,
        weather: [{ description: "Cloudy", icon: "01d" }],
      },
    };

    spyOn(console, "log");
    const setWeatherDataMock = jasmine.createSpy("setWeatherData");
    handleResponse(mockResponse);
    expect(console.log).toHaveBeenCalledWith(mockResponse.data);

    expect(setWeatherDataMock).toHaveBeenCalledWith({
      ready: true,
      coordinates: mockResponse.data.coord,
      temperature: mockResponse.data.main.temp,
      feels_like: mockResponse.data.main.feels_like,
      humidity: mockResponse.data.main.humidity,
      wind: mockResponse.data.wind.speed,
      city: mockResponse.data.name,
      date: jasmine.any(Date),
      description: mockResponse.data.weather[0].description,
      icon: mockResponse.data.weather[0].icon,
    });
  });
});
// second test ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
describe("search", () => {
  it("should call axios.get with the correct apiUrl and handle the response", () => {
    // Create a mock city and apiKey
    const city = "London";
    const apiKey = "39d0e5ab9f18d4b08648c0969ea4cd9f";

    // Create a mock response object
    const mockResponse = {
      data: {
        coord: { lat: 51.5074, lon: -0.1278 },
        main: { temp: 25, feels_like: 28, humidity: 80 },
        wind: { speed: 10 },
        name: "London",
        dt: 1624599721,
        weather: [{ description: "Cloudy", icon: "01d" }],
      },
    };

    // Mock the axios.get method
    spyOn(axios, "get").and.returnValue(Promise.resolve(mockResponse));

    // Create a mock handleResponse function
    const handleResponseMock = jasmine.createSpy("handleResponse");

    // Call the search function
    search(city);

    // Verify that axios.get was called with the correct apiUrl
    expect(axios.get).toHaveBeenCalledWith(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    // Verify that handleResponse was called with the response data
    expect(handleResponseMock).toHaveBeenCalledWith(mockResponse);
  });
});
//
//Test for CustomCloth.js
describe("CustomCloth", () => {
  let customCloth;

  beforeEach(() => {
    // Create a mock props object with a temperature property
    const props = {
      temperature: 18,
    };

    // Call the CustomCloth function with the mock props
    customCloth = CustomCloth(props);
  });

  it("sets the correct clothing and image for temperature between 15 and 20", () => {
    // Assert the expected clothing and image values based on the temperature
    expect(customCloth.clothing).toBe("Pants and Hoodie");
    expect(customCloth.imageSrc).toBe("/customicons/warm-suit.png");
  });
});
//
//
//Test one for FormattedDate ~~~~~~~~~~~~~`
describe("FormattedDate", () => {
  let formattedDate;

  beforeEach(() => {
    // Create a mock props object with a specific date
    const props = {
      date: new Date("2022-06-01T10:05:00"),
    };

    // Call the FormattedDate function with the mock props
    formattedDate = FormattedDate(props);
  });

  it("returns the correct formatted date", () => {
    // Assert the expected formatted date based on the props
    expect(formattedDate).toBe("Wednesday 10:05");
  });
});
//
//Test for code from WeatherForecastDay.js
describe("day", () => {
  it("returns the correct day of the week", () => {
    const mockData = {
      dt: 1678245600, // A Unix timestamp representing a Tuesday
    };
    const result = day({ data: mockData });
    expect(result).toBe("Tue");
  });
});
//
// Test for code from WeatherIcon.js
describe("WeatherIcon", () => {
  it("returns the correct icon based on the provided code", () => {
    const props = {
      code: "01d",
    };

    const result = WeatherIcon(props);

    expect(result).toBe("CLEAR_DAY");
  });
});
//
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
