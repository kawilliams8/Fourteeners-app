import { getPeaks } from "./apiCalls";

describe("getPeaks", () => {
  let mockPeak;
  beforeEach(() => {
    mockPeak = [
      {
        id: 1,
        name: "Mount Elbert",
        elevation: 14433,
        rank: 1,
        range: "Sawatch",
        forest: "San Isabel",
        grizzlyBears: false,
        marmots: true,
        jerryLevel: "high",
        numberOfRoutes: 4,
        routes: {
          northeastRidge: {
            mileage: 9.5,
            gain: 4700,
            difficulty: "class 1",
            exposure: 1,
          },
          eastRidge: {
            mileage: 10,
            gain: 4100,
            difficulty: "class 1",
            exposure: 1,
          },
          southeastRidge: {
            mileage: 11,
            gain: 5300,
            difficulty: "class 2",
            exposure: 1,
          },
          boxCreekCouloir: {
            mileage: 8.5,
            gain: 4150,
            difficulty: "class 2+",
            exposure: 3,
          },
        },
      },
    ];

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockPeak),
      });
    });
  });

  it("should call fetch with the correct URL", () => {
    getPeaks();
    expect(window.fetch).toHaveBeenCalledWith("https://fourteeners-api.herokuapp.com/api/v1/peaks");
  });

  it("should return an array of peaks", () => {
    expect(getPeaks()).resolves.toEqual(mockPeak);
  });

  it("should show an error when the fetch Promise returns rejected -- ok: false", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
      });
    });

    expect(getPeaks()).rejects.toEqual(Error("Fetching Error"));
  });

  it("should show an error when the fetch Promise returns rejected -- message: 'Fetching Error'", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        message: "Fetching Error",
      });
    });

    expect(getPeaks()).rejects.toEqual(Error("Fetching Error"));
  });
});
