export default class StateApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
      searchTerm: ''
    };

    this.subscriptions = {};
    this.lastSubscriptionId = 0;
  }

  mapIntoObject(arrayToBeMapped) {
    return arrayToBeMapped.reduce((accumulator, item) => {
      accumulator[item.id] = item;
      return accumulator;
    }, {});
  }

  lookUpAuthor = authorId => this.data.authors[authorId];

  getState = () => this.data;

  setSearchTerm = searchTerm => {
    this.mergeWithState({ searchTerm });
  };

  subscribe = callback => {
    this.lastSubscriptionId++;
    this.subscriptions[this.lastSubscriptionId] = callback;
    return this.lastSubscriptionId;
  };

  unsubscribe = subscriptionId => {
    delete this.subscriptions[subscriptionId];
  };

  mergeWithState = stateChange => {
    this.data = { ...this.data, ...stateChange };
    this.notifySubscribers();
  };

  notifySubscribers = () => {
    Object.values(this.subscriptions).forEach(callback => callback());
  };
}
