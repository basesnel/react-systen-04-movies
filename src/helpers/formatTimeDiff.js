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
  const secondsInYear = Math.round(secondsInDay * 365.242);
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

  if (fullSeconds < secondsInTwoWeeks) {
    const days = Math.floor((fullSeconds % secondsInWeek) / secondsInDay);

    if (!days) return secondsDiff > 0 ? "a week ago" : "in a week";

    if (days === 1)
      return secondsDiff > 0 ? "a week and a day ago" : "in a week and a day";

    return secondsDiff > 0
      ? `a week and ${days} days ago`
      : `in a week and ${days} days`;
  }

  if (fullSeconds < secondsInMonth) {
    const weeks = Math.floor(fullSeconds / secondsInWeek);

    return secondsDiff > 0 ? `${weeks} weeks ago` : `in ${weeks} weeks`;
  }

  if (fullSeconds < secondsInTwoMonths) {
    const days = Math.floor((fullSeconds % secondsInMonth) / secondsInDay);

    if (!days) return secondsDiff > 0 ? "a month ago" : "in a month";

    if (days === 1)
      return secondsDiff > 0 ? "a month and a day ago" : "in a month and a day";

    return secondsDiff > 0
      ? `a month and ${days} days ago`
      : `in a month and ${days} days`;
  }

  if (fullSeconds < secondsInYear) {
    const months = Math.floor(fullSeconds / secondsInMonth);

    return secondsDiff > 0 ? `${months} months ago` : `in ${months} months`;
  }

  if (fullSeconds < secondsInTwoYears) {
    const months = Math.floor((fullSeconds % secondsInYear) / secondsInMonth);

    if (!months) return secondsDiff > 0 ? "a year ago" : "in a year";

    if (months === 1)
      return secondsDiff > 0
        ? "a year and a month ago"
        : "in a year and a month";

    return secondsDiff > 0
      ? `a year and ${months} months ago`
      : `in a year and ${months} months`;
  }

  if (fullSeconds >= secondsInTwoYears) {
    const years = Math.floor(fullSeconds / secondsInYear);
    const remainder = Math.floor(fullSeconds % secondsInYear);

    if (remainder > (secondsInYear * 9) / 10)
      return secondsDiff > 0
        ? `almost ${years + 1} years ago`
        : `in almost ${years + 1} years`;

    if (remainder > (secondsInYear * 3) / 4)
      return secondsDiff > 0
        ? `almost ${years} years and three-qwarters ago`
        : `in almost ${years} years and three-qwarters`;

    if (remainder > secondsInYear / 2)
      return secondsDiff > 0
        ? `almost ${years} years and a half ago`
        : `in almost ${years} years and a half`;

    if (remainder > secondsInYear / 4)
      return secondsDiff > 0
        ? `almost ${years} years and a qwarter ago`
        : `in almost ${years} years and a qwarter`;

    return secondsDiff > 0 ? `${years} years ago` : `in ${years} years`;
  }
};

export default formatTimeDiff;
