let obj = {};
let tomorrow = {};
let sixDaysLater = {};
let yesterday = {};
describe("Object initialization", () => {
  test("has the right URL", () => {
    expect(obj.baseUrl).toBe(
      "http://api.openweathermap.org/data/2.5/forecast?"
    );
  });
  test("has the right API key", () => {
    expect(obj.APIKey).toBe("39d0e5ab9f18d4b08648c0969ea4cd9fw");
  });
  test("has a cache", () => {
    expect(obj.cache).toBeDefined();
  });
});

describe("Inputs validity checks are OK", () => {
  test("for valid inputs", () => {
    expect(() => {
      obj.checkValidInputs("Paris", "Fr", new Date());
    }).not.toThrow();
  });
  test("for inputs with no country code", () => {
    expect(() => {
      obj.checkValidInputs("Paris", "", new Date());
    }).toThrow();
  });
  test("for inputs with no location", () => {
    expect(() => {
      obj.checkValidInputs("", "Fr", new Date());
    }).toThrow();
  });
  test("for inputs with a future date less than 5 days", () => {
    expect(() => {
      obj.checkValidInputs("Paris", "Fr", tomorrow);
    }).not.toThrow();
  });
  test("for inputs with a future date more than 5 days", () => {
    expect(() => {
      obj.checkValidInputs("Paris", "Fr", sixDaysLater);
    }).toThrow();
  });
  test("for inputs with a past date", () => {
    expect(() => {
      obj.checkValidInputs("Paris", "Fr", yesterday);
    }).toThrow();
  });
});

describe("Fetch function works properly", () => {
  test("for valid inputs", async () => {
    await expect(obj.fetchData("Paris", "Fr", tomorrow)).resolves.not.toThrow();
  });
  test("for inputs with the wrong location", async () => {
    await expect(obj.fetchData("P", "Fr", tomorrow)).rejects.toEqual(
      new Error("API call error")
    );
  });
  test("for inputs with a future date less than 5 days", async () => {
    await expect(obj.fetchData("Paris", "Fr", tomorrow)).rejects.not.toEqual(
      new Error("API call error")
    );
  });
  test("for inputs with a future date more than 5 days", async () => {
    await expect(obj.fetchData("Paris", "Fr", sixDaysLater)).rejects.toEqual(
      new Error("API call error")
    );
  });
  test("for inputs with a past date", async () => {
    await expect(obj.fetchData("Paris", "Fr", yesterday)).rejects.toEqual(
      new Error("API call error")
    );
  });
});
