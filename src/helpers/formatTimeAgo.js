const formatTimeAgo = (dateString) => {
  const now = new Date();
  const date = new Date(dateString);
  const secondsDiff = (now.getTime() - date.getTime()) / 1000;

  const secondsInMinute = 60;
  const secondsInHour = secondsInMinute * 60;
  const secondsInDay = secondsInHour * 24;
  const secondsInWeek = secondsInDay * 7;
  const secondsInTwoWeeks = secondsInWeek * 2;
  const secondsInMonth = Math.round(secondsInDay * 30.437);
  const secondsInTwoMonths = secondsInMonth * 2;
  const secondsInYear = Math.round(secondsInDay * 365.25);
  const secondsInTwoYears = secondsInYear * 2;

  if (Math.abs(secondsDiff) < secondsInMinute) {
    const seconds = Math.floor(secondsDiff);

    if (Math.abs(seconds) === 1)
      return seconds > 0 ? "a second ago" : "in a second";

    return seconds > 0
      ? `${Math.floor(seconds)}s ago`
      : `in ${Math.abs(Math.floor(seconds))}s`;
  }

  if (Math.abs(secondsDiff) < secondsInHour) {
    const minutes = Math.floor(secondsDiff / secondsInMinute);

    if (Math.abs(minutes) === 1)
      return minutes > 0 ? "a minute ago" : "in a minute";

    return minutes > 0
      ? `${Math.floor(minutes)}m ago`
      : `in ${Math.abs(Math.floor(minutes))}m`;
  }

  if (Math.abs(secondsDiff) < secondsInDay) {
    const hours = Math.floor(secondsDiff / secondsInHour);

    if (Math.abs(hours) === 1) return hours > 0 ? "a hour ago" : "in a hour";

    return hours > 0 ? `${hours}h ago` : `in ${Math.abs(hours)}h`;
  }

  if (Math.abs(secondsDiff) < secondsInWeek) {
    const days = Math.floor(secondsDiff / secondsInDay);

    if (Math.abs(days) === 1) return days > 0 ? "a day ago" : "in a day";

    return days > 0 ? `${days} days ago` : `in ${Math.abs(days)} days`;
  }

  if (Math.abs(secondsDiff) < secondsInTwoWeeks) {
    const week = Math.floor(secondsDiff / secondsInWeek);
    const days = Math.floor((secondsDiff % secondsInWeek) / secondsInDay);

    if (!days) return week > 0 ? "a week ago" : "in a week";

    if (Math.abs(days) === 1)
      return week > 0 ? "a week and a day ago" : "in a week and a day";

    return week > 0
      ? `a week and ${days} days ago`
      : `in a week and ${Math.abs(days)} days`;
  }

  if (Math.abs(secondsDiff) < secondsInMonth) {
    const weeks = Math.floor(secondsDiff / secondsInWeek);

    // if (Math.abs(weeks) === 1) return weeks > 0 ? "a week ago" : "in a week";

    return weeks > 0 ? `${weeks} weeks ago` : `in ${Math.abs(weeks)} weeks`;
  }

  if (Math.abs(secondsDiff) < secondsInTwoMonths) {
    const month = Math.floor(secondsDiff / secondsInMonth);
    const days = Math.floor((secondsDiff % secondsInMonth) / secondsInDay);

    if (!days) return month > 0 ? "a month ago" : "in a month";

    if (Math.abs(days) === 1)
      return month > 0 ? "a month and a day ago" : "in a month and a day";

    return month > 0
      ? `a month and ${days} days ago`
      : `in a month and ${Math.abs(days)} days`;
  }

  if (Math.abs(secondsDiff) < secondsInYear) {
    const months = Math.floor(secondsDiff / secondsInMonth);

    // if (Math.abs(months) === 1)
    //   return months > 0 ? "a month ago" : "in a month";

    return months > 0
      ? `${months} months ago`
      : `in ${Math.abs(months)} months`;
  }

  if (Math.abs(secondsDiff) < secondsInTwoYears) {
    const year = Math.floor(secondsDiff / secondsInYear);
    const months = Math.floor((secondsDiff % secondsInYear) / secondsInMonth);

    if (!months) return year > 0 ? "a year ago" : "in a year";

    if (Math.abs(months) === 1)
      return year > 0 ? "a year and a month ago" : "in a year and a month";

    return year > 0
      ? `a year and ${months} months ago`
      : `in a year and ${Math.abs(months)} months`;
  }

  if (secondsDiff >= secondsInTwoYears) {
    const years = Math.floor(secondsDiff / secondsInYear);

    return years > 0 ? `${years} years ago` : `in ${years} years`;
  }
};

export default formatTimeAgo;
