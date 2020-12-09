export const getPeaks = () => {
  return fetch("https://fourteeners-api.herokuapp.com/api/v1/peaks")
    .then((response) => {
      if (!response.ok) {
        throw Error("Fetching Error");
      }
      return response.json();
    })
    .catch((error) => {
      throw Error(error.message);
    });
};

export const getPeak = (id) => {
  return fetch(`https://fourteeners-api.herokuapp.com/api/v1/peaks/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw Error("Fetching Error");
      }
      return response.json();
    })
    .catch((error) => {
      throw Error(error.message);
    });
};

export const deletePeak = (id) => {
  return fetch(`https://fourteeners-api.herokuapp.com/api/v1/peaks/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw Error("Fetching Error");
      }
      return response.json();
    })
    .catch((error) => {
      throw Error(error.message);
    });
};
