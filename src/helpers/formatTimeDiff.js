const formatTimeDiff = (dateString, now = new Date()) => {
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

  const timeUnits = {
    second: "second",
    minute: "minute",
    hour: "hour",
    day: "day",
    week: "week",
    month: "month",
    year: "year",
  };

  const countUpToMinute = () =>
    secondsDiff > 0
      ? `${fullSeconds} seconds ago`
      : `in ${fullSeconds} seconds`;

  const countUpToTwoUnits = (
    secondsInAmount = secondsInMinute,
    secondsInPart = oneSecond,
    timeUnit = timeUnits.minute,
    timePart = timeUnits.second
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

  const countAfterTwoUnits = (
    secondsInAmount = secondsInMinute,
    timeUnit = timeUnits.minute
  ) => {
    const amount = Math.floor(fullSeconds / secondsInAmount);
    const remainder = Math.floor(fullSeconds % secondsInAmount);

    if (remainder >= (secondsInAmount * 9) / 10)
      return secondsDiff > 0
        ? `almost ${amount + 1} ${timeUnit}s ago`
        : `in almost ${amount + 1} ${timeUnit}s`;

    if (remainder >= (secondsInAmount * 3) / 4)
      return secondsDiff > 0
        ? `${amount} ${timeUnit}s and three-qwarters ago`
        : `in ${amount} ${timeUnit}s and three-qwarters`;

    if (remainder >= secondsInAmount / 2)
      return secondsDiff > 0
        ? `${amount} ${timeUnit}s and a half ago`
        : `in ${amount} ${timeUnit}s and a half`;

    if (remainder >= secondsInAmount / 4)
      return secondsDiff > 0
        ? `${amount} ${timeUnit}s and a qwarter ago`
        : `in ${amount} ${timeUnit}s and a qwarter`;

    return secondsDiff > 0
      ? `${amount} ${timeUnit}s ago`
      : `in ${amount} ${timeUnit}s`;
  };

  if (fullSeconds <= 1) return "now";

  if (fullSeconds < secondsInMinute) return countUpToMinute();

  if (fullSeconds < secondsInTwoMinutes) return countUpToTwoUnits();

  if (fullSeconds < secondsInHour) return countAfterTwoUnits();

  if (fullSeconds < secondsInTwoHours)
    return countUpToTwoUnits(
      secondsInHour,
      secondsInMinute,
      timeUnits.hour,
      timeUnits.minute
    );

  if (fullSeconds < secondsInDay)
    return countAfterTwoUnits(secondsInHour, timeUnits.hour);

  if (fullSeconds < secondsInTwoDays)
    return countUpToTwoUnits(
      secondsInDay,
      secondsInHour,
      timeUnits.day,
      timeUnits.hour
    );

  if (fullSeconds < secondsInWeek)
    return countAfterTwoUnits(secondsInDay, timeUnits.day);

  if (fullSeconds < secondsInTwoWeeks)
    return countUpToTwoUnits(
      secondsInWeek,
      secondsInDay,
      timeUnits.week,
      timeUnits.day
    );

  if (fullSeconds < secondsInMonth)
    return countAfterTwoUnits(secondsInWeek, timeUnits.week);

  if (fullSeconds < secondsInTwoMonths)
    return countUpToTwoUnits(
      secondsInMonth,
      secondsInDay,
      timeUnits.month,
      timeUnits.day
    );

  if (fullSeconds < secondsInYear)
    return countAfterTwoUnits(secondsInMonth, timeUnits.month);

  if (fullSeconds < secondsInTwoYears)
    return countUpToTwoUnits(
      secondsInYear,
      secondsInMonth,
      timeUnits.year,
      timeUnits.month
    );

  if (fullSeconds >= secondsInTwoYears)
    return countAfterTwoUnits(secondsInYear, timeUnits.year);
};

export default formatTimeDiff;
