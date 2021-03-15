export default {
  convertTimestamp(timestamp) {
    // ex: timestamp = 15493124 52;

    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    const dt = new Date(timestamp * 1000);
    // prettier-ignore
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dayweek_ja = "日月火水木金土"[dt.getDay()];
    const dayweek_en = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][
      dt.getDay()
    ];

    const year = dt.getFullYear();
    const month = months[dt.getMonth()];
    const day = dt.getDate();
    const hour = dt.getHours();
    const min = ("00" + dt.getMinutes()).substr(-2);
    const sec = ("00" + dt.getSeconds()).substr(-2);

    const res = {
      year,
      month,
      day,
      md: month + "/" + day,
      dayweek_ja,
      dayweek_en,
      hour,
      min,
      sec,
      hm: hour + ":" + min,
      hms: hour + ":" + min + ":" + sec // ex: 10:30:23
    };

    return {
      ...res
    };
  }
};
