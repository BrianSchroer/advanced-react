export default class StateApi {
  constructor(rawData) {
    this.rawData = rawData;
  }

  mapIntoObject(arrayToBeMapped) {
    return arrayToBeMapped.reduce((accumulator, item) => {
      accumulator[item.id] = item;
      return accumulator;
    }, {});
  }

  getArticles() {
    return this.mapIntoObject(this.rawData.articles);
  }

  getAuthors() {
    return this.mapIntoObject(this.rawData.authors);
  }
}