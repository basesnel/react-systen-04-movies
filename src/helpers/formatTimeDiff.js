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

  const firstSubcount = (secondsInAmount, timeUnit) => {
    const amount = Math.floor(fullSeconds / secondsInAmount);
    const remainder = Math.floor(fullSeconds % secondsInAmount);

    if (remainder > (secondsInAmount * 9) / 10)
      return secondsDiff > 0
        ? `almost ${amount + 1} ${timeUnit} ago`
        : `in almost ${amount + 1} ${timeUnit}`;

    if (remainder > (secondsInAmount * 3) / 4)
      return secondsDiff > 0
        ? `${amount} ${timeUnit} and three-qwarters ago`
        : `in ${amount} ${timeUnit} and three-qwarters`;

    if (remainder > secondsInAmount / 2)
      return secondsDiff > 0
        ? `${amount} ${timeUnit} and a half ago`
        : `in ${amount} ${timeUnit} and a half`;

    if (remainder > secondsInAmount / 4)
      return secondsDiff > 0
        ? `${amount} ${timeUnit} and a qwarter ago`
        : `in ${amount} ${timeUnit} and a qwarter`;

    return secondsDiff > 0
      ? `${amount} ${timeUnit} ago`
      : `in ${amount} ${timeUnit}`;
  };

  if (fullSeconds === 0 || fullSeconds === 1) {
    return "now";
  }

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
    const remainder = Math.floor(fullSeconds % secondsInMinute);

    if (remainder > (secondsInMinute * 9) / 10)
      return secondsDiff > 0
        ? `almost ${minutes + 1} minutes ago`
        : `in almost ${minutes + 1} minutes`;

    if (remainder > (secondsInMinute * 3) / 4)
      return secondsDiff > 0
        ? `${minutes} minutes and three-qwarters ago`
        : `in ${minutes} minutes and three-qwarters`;

    if (remainder > secondsInMinute / 2)
      return secondsDiff > 0
        ? `${minutes} minutes and a half ago`
        : `in ${minutes} minutes and a half`;

    if (remainder > secondsInMinute / 4)
      return secondsDiff > 0
        ? `${minutes} minutes and a qwarter ago`
        : `in ${minutes} minutes and a qwarter`;

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
    const remainder = Math.floor(fullSeconds % secondsInHour);

    if (remainder > (secondsInHour * 9) / 10)
      return secondsDiff > 0
        ? `almost ${hours + 1} hours ago`
        : `in almost ${hours + 1} hours`;

    if (remainder > (secondsInHour * 3) / 4)
      return secondsDiff > 0
        ? `${hours} hours and three-qwarters ago`
        : `in ${hours} hours and three-qwarters`;

    if (remainder > secondsInHour / 2)
      return secondsDiff > 0
        ? `${hours} hours and a half ago`
        : `in ${hours} hours and a half`;

    if (remainder > secondsInHour / 4)
      return secondsDiff > 0
        ? `${hours} hours and a qwarter ago`
        : `in ${hours} hours and a qwarter`;

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
    const remainder = Math.floor(fullSeconds % secondsInDay);

    if (remainder > (secondsInDay * 9) / 10)
      return secondsDiff > 0
        ? `almost ${days + 1} days ago`
        : `in almost ${days + 1} days`;

    if (remainder > (secondsInDay * 3) / 4)
      return secondsDiff > 0
        ? `${days} days and three-qwarters ago`
        : `in ${days} days and three-qwarters`;

    if (remainder > secondsInDay / 2)
      return secondsDiff > 0
        ? `${days} days and a half ago`
        : `in ${days} days and a half`;

    if (remainder > secondsInDay / 4)
      return secondsDiff > 0
        ? `${days} days and a qwarter ago`
        : `in ${days} days and a qwarter`;

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
    const remainder = Math.floor(fullSeconds % secondsInWeek);

    if (remainder > (secondsInWeek * 9) / 10)
      return secondsDiff > 0
        ? `almost ${weeks + 1} weeks ago`
        : `in almost ${weeks + 1} weeks`;

    if (remainder > (secondsInWeek * 3) / 4)
      return secondsDiff > 0
        ? `${weeks} weeks and three-qwarters ago`
        : `in ${weeks} weeks and three-qwarters`;

    if (remainder > secondsInWeek / 2)
      return secondsDiff > 0
        ? `${weeks} weeks and a half ago`
        : `in ${weeks} weeks and a half`;

    if (remainder > secondsInWeek / 4)
      return secondsDiff > 0
        ? `${weeks} weeks and a qwarter ago`
        : `in ${weeks} weeks and a qwarter`;

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

  if (fullSeconds < secondsInYear)
    return firstSubcount(secondsInMonth, "month");
  // {
  //   const months = Math.floor(fullSeconds / secondsInMonth);
  //   const remainder = Math.floor(fullSeconds % secondsInMonth);

  //   if (remainder > (secondsInMonth * 9) / 10)
  //     return secondsDiff > 0
  //       ? `almost ${months + 1} months ago`
  //       : `in almost ${months + 1} months`;

  //   if (remainder > (secondsInMonth * 3) / 4)
  //     return secondsDiff > 0
  //       ? `${months} months and three-qwarters ago`
  //       : `in ${months} months and three-qwarters`;

  //   if (remainder > secondsInMonth / 2)
  //     return secondsDiff > 0
  //       ? `${months} months and a half ago`
  //       : `in ${months} months and a half`;

  //   if (remainder > secondsInMonth / 4)
  //     return secondsDiff > 0
  //       ? `${months} months and a qwarter ago`
  //       : `in ${months} months and a qwarter`;

  //   return secondsDiff > 0 ? `${months} months ago` : `in ${months} months`;
  // }

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

  if (fullSeconds >= secondsInTwoYears)
    return firstSubcount(secondsInYear, "year");
};

export default formatTimeDiff;
