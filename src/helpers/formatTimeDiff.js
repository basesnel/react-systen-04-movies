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

  if (fullSeconds < secondsInTwoHours)
    return secondSubcount(secondsInHour, secondsInMinute, "hour", "minute");
  // {
  //   const minutes = Math.floor((fullSeconds % secondsInHour) / secondsInMinute);

  //   if (!minutes) return secondsDiff > 0 ? "a hour ago" : "in a hour";

  //   if (minutes === 1)
  //     return secondsDiff > 0
  //       ? "a hour and a minute ago"
  //       : "in a hour and a minute";

  //   return secondsDiff > 0
  //     ? `a hour and ${minutes} minutes ago`
  //     : `in a hour and ${minutes} minutes`;
  // }

  if (fullSeconds < secondsInDay) return firstSubcount(secondsInHour, "hour");

  if (fullSeconds < secondsInTwoDays)
    return secondSubcount(secondsInDay, secondsInHour, "day", "hour");

  if (fullSeconds < secondsInWeek) return firstSubcount(secondsInDay, "day");

  if (fullSeconds < secondsInTwoWeeks)
    return secondSubcount(secondsInWeek, secondsInDay, "week", "day");

  if (fullSeconds < secondsInMonth) return firstSubcount(secondsInWeek, "week");

  if (fullSeconds < secondsInTwoMonths)
    return secondSubcount(secondsInMonth, secondsInDay, "month", "day");

  if (fullSeconds < secondsInYear)
    return firstSubcount(secondsInMonth, "month");

  if (fullSeconds < secondsInTwoYears)
    return secondSubcount(secondsInYear, secondsInMonth, "year", "month");

  if (fullSeconds >= secondsInTwoYears)
    return firstSubcount(secondsInYear, "year");
};

export default formatTimeDiff;
