export default class StateApi {

  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors)
    };
  }

  mapIntoObject(arrayToBeMapped) {
    return arrayToBeMapped.reduce((accumulator, item) => {
      accumulator[item.id] = item;
      return accumulator;
    }, {});
  }

  lookUpAuthor = (authorId) => this.data.authors[authorId];

  getState = () => this.data; 
}