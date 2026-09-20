/** A timezone is a browser preference, not the visitor's actual location. */
export function formatVisitorTime(date: Date, timeZone: string) {
  return {
    date: new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      timeZone,
      year: "numeric",
    }).format(date),
    time: new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      hourCycle: "h23",
      minute: "2-digit",
      timeZone,
    }).format(date),
    zone: timeZone.replaceAll("_", " "),
  };
}
