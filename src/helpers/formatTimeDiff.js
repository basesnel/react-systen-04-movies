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
        ? `almost ${amount + 1} ${timeUnit}s ago`
        : `in almost ${amount + 1} ${timeUnit}s`;

    if (remainder > (secondsInAmount * 3) / 4)
      return secondsDiff > 0
        ? `${amount} ${timeUnit}s and three-qwarters ago`
        : `in ${amount} ${timeUnit}s and three-qwarters`;

    if (remainder > secondsInAmount / 2)
      return secondsDiff > 0
        ? `${amount} ${timeUnit}s and a half ago`
        : `in ${amount} ${timeUnit}s and a half`;

    if (remainder > secondsInAmount / 4)
      return secondsDiff > 0
        ? `${amount} ${timeUnit}s and a qwarter ago`
        : `in ${amount} ${timeUnit}s and a qwarter`;

    return secondsDiff > 0
      ? `${amount} ${timeUnit}s ago`
      : `in ${amount} ${timeUnit}s`;
  };

  const secondSubcount = (
    secondsInAmount,
    secondsInPart,
    timeUnit,
    timePart
  ) => {
    const partTimes = Math.floor(
      (fullSeconds % secondsInAmount) / secondsInPart
    );

    if (!partTimes)
      return secondsDiff > 0 ? `a ${timeUnit} ago` : `in a ${timeUnit}`;

    if (partTimes === 1)
      return secondsDiff > 0
        ? `a ${timeUnit} and a ${timePart} ago`
        : `in a ${timeUnit} and a ${timePart}`;

    return secondsDiff > 0
      ? `a ${timeUnit} and ${partTimes} ${timePart}s ago`
      : `in a ${timeUnit} and ${partTimes} ${timePart}s`;
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

  if (fullSeconds < secondsInHour)
    return firstSubcount(secondsInMinute, "minute");

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

  if (fullSeconds < secondsInDay) return firstSubcount(secondsInHour, "hour");

  if (fullSeconds < secondsInTwoDays) {
    const hours = Math.floor((fullSeconds % secondsInDay) / secondsInHour);

    if (!hours) return secondsDiff > 0 ? "a day ago" : "in a day";

    if (hours === 1)
      return secondsDiff > 0 ? "a day and a hour ago" : "in a day and a hour";

    return secondsDiff > 0
      ? `a day and ${hours} hours ago`
      : `in a day and ${hours} hours`;
  }

  if (fullSeconds < secondsInWeek) return firstSubcount(secondsInDay, "day");

  if (fullSeconds < secondsInTwoWeeks) {
    const days = Math.floor((fullSeconds % secondsInWeek) / secondsInDay);

    if (!days) return secondsDiff > 0 ? "a week ago" : "in a week";

    if (days === 1)
      return secondsDiff > 0 ? "a week and a day ago" : "in a week and a day";

    return secondsDiff > 0
      ? `a week and ${days} days ago`
      : `in a week and ${days} days`;
  }

  if (fullSeconds < secondsInMonth) return firstSubcount(secondsInWeek, "week");

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

  if (fullSeconds < secondsInTwoYears)
    return secondSubcount(secondsInYear, secondsInMonth, "year", "month");

  if (fullSeconds >= secondsInTwoYears)
    return firstSubcount(secondsInYear, "year");
};

export default formatTimeDiff;
