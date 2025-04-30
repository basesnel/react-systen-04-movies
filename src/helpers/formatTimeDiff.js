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

  const countUpToMinute = () =>
    secondsDiff > 0
      ? `${fullSeconds} seconds ago`
      : `in ${fullSeconds} seconds`;

  const countUpToTwoUnits = (
    secondsInAmount = secondsInMinute,
    secondsInPart = oneSecond,
    timeUnit = "minute",
    timePart = "second"
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
    timeUnit = "minute"
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
    return countUpToTwoUnits(secondsInHour, secondsInMinute, "hour", "minute");

  if (fullSeconds < secondsInDay)
    return countAfterTwoUnits(secondsInHour, "hour");

  if (fullSeconds < secondsInTwoDays)
    return countUpToTwoUnits(secondsInDay, secondsInHour, "day", "hour");

  if (fullSeconds < secondsInWeek)
    return countAfterTwoUnits(secondsInDay, "day");

  if (fullSeconds < secondsInTwoWeeks)
    return countUpToTwoUnits(secondsInWeek, secondsInDay, "week", "day");

  if (fullSeconds < secondsInMonth)
    return countAfterTwoUnits(secondsInWeek, "week");

  if (fullSeconds < secondsInTwoMonths)
    return countUpToTwoUnits(secondsInMonth, secondsInDay, "month", "day");

  if (fullSeconds < secondsInYear)
    return countAfterTwoUnits(secondsInMonth, "month");

  if (fullSeconds < secondsInTwoYears)
    return countUpToTwoUnits(secondsInYear, secondsInMonth, "year", "month");

  if (fullSeconds >= secondsInTwoYears)
    return countAfterTwoUnits(secondsInYear, "year");
};

export default formatTimeDiff;
