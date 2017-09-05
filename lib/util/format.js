export default class {
  static date(dateString) {
    return new Date(dateString).toDateString();
  }

  static dateTime(dateTimeString) {
    const dt = new Date(dateTimeString);
    return `${dt.toDateString()} ${dt.toLocaleTimeString()}`;
  }
}
