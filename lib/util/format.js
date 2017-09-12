export default class {
  static date(dateString) {
    return new Date(dateString).toDateString();
  }

  static dateTime(dateTimeString) {
    const dt = new Date(dateTimeString);
    return `${dt.toDateString()} ${dt.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    })}`;
  }
}
