const formatTimeDiff = (dateString, now = new Date()) => {
  // const now = new Date();
  const date = new Date(dateString);
  const secondsDiff = (now.getTime() - date.getTime()) / 1000;
  const fullSeconds = Math.floor(Math.abs(secondsDiff));

  const oneSecond = 1;
  const secondsInMinute = 60;
  const secondsInTwoMinutes = secondsInMinute * 2;
  const secondsInHour = secondsInMinute * 60;
  const secondsInTwoHours = secondsInHour * 2;
  const secondsInDay = secondsInHour * 24;
  const secondsInTwoDays = secondsInDay * 2;
  const secondsInWeek = secondsInDay * 7;
  const secondsInTwoWeeks = secondsInWeek * 2;
  const secondsInMonth = Math.round(secondsInDay * 30.437);
  const secondsInTwoMonths = secondsInMonth * 2;
  const secondsInYear = Math.round(secondsInDay * 365.25);
  const secondsInTwoYears = secondsInYear * 2;

  if (fullSeconds < secondsInMinute) {
    const seconds = fullSeconds;

    if (seconds === 1) return secondsDiff > 0 ? "a second ago" : "in a second";

    return secondsDiff > 0 ? `${seconds} seconds ago` : `in ${seconds} seconds`;
  }

  if (fullSeconds < secondsInTwoMinutes) {
    const seconds = Math.floor((fullSeconds % secondsInMinute) / oneSecond);

    if (!seconds) return secondsDiff > 0 ? "a minute ago" : "in a minute";

    if (Math.abs(seconds) === 1)
      return secondsDiff > 0
        ? "a minute and a second ago"
        : "in a minute and a second";

    return secondsDiff > 0
      ? `a minute and ${seconds} seconds ago`
      : `in a minute and ${seconds} seconds`;
  }

  if (fullSeconds < secondsInHour) {
    const minutes = Math.floor(fullSeconds / secondsInMinute);

    return secondsDiff > 0 ? `${minutes} minutes ago` : `in ${minutes} minutes`;
  }

  if (fullSeconds < secondsInTwoHours) {
    const minutes = Math.floor((fullSeconds % secondsInHour) / secondsInMinute);

    if (!minutes) return secondsDiff > 0 ? "a hour ago" : "in a hour";

    if (minutes === 1)
      return secondsDiff > 0
        ? "a hour and a minute ago"
        : "in a hour and a minute";

    return secondsDiff > 0
      ? `a hour and ${minutes} minutes ago`
      : `in a hour and ${minutes} minutes`;
  }

  if (fullSeconds < secondsInDay) {
    const hours = Math.floor(fullSeconds / secondsInHour);

    return secondsDiff > 0 ? `${hours} hours ago` : `in ${hours} hours`;
  }

  if (fullSeconds < secondsInTwoDays) {
    const hours = Math.floor((fullSeconds % secondsInDay) / secondsInHour);

    if (!hours) return secondsDiff > 0 ? "a day ago" : "in a day";

    if (hours === 1)
      return secondsDiff > 0 ? "a day and a hour ago" : "in a day and a hour";

    return secondsDiff > 0
      ? `a day and ${hours} hours ago`
      : `in a day and ${hours} hours`;
  }

  if (fullSeconds < secondsInWeek) {
    const days = Math.floor(fullSeconds / secondsInDay);

    return secondsDiff > 0 ? `${days} days ago` : `in ${Math.abs(days)} days`;
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

export default formatTimeDiff;
