// import { URL } from './constants.js'

export const getFetch = (
  URL,
  saveResultFromServer,
  setIsloading,
  setCurrentPage
) => {
  const items = [];
  fetch(URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Request failed!");
    })
    .then((arr) => {
      arr.forEach((element) => {
        items.push({
          id: element.id,
          from: element.from,
          text: element.text,
          createdAt: element.createdAt,
        });
      });
      return items;
    })
    .then((items) => saveResultFromServer(items))
    .then(setIsloading(false))
    .then(setCurrentPage((prevState) => prevState + 1))
    .then(console.log("stop loading"))
    .catch((networkError) => console.log(networkError.message));
};
