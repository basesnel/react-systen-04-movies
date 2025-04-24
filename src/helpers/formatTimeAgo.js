const formatTimeAgo = (dateString) => {
  const now = new Date();
  const date = new Date(dateString);
  const secondsDiff = (now.getTime() - date.getTime()) / 1000;

  const secondsInMinute = 60;
  const secondsInHour = secondsInMinute * 60;
  const secondsInDay = secondsInHour * 24;
  const secondsInWeek = secondsInDay * 7;
  const secondsInMonth = Math.round(secondsInDay * 30.437);
  const secondsInYear = Math.round(secondsInDay * 365.25);
  const secondsInTwoYear = secondsInYear * 2;

  if (Math.abs(secondsDiff) < secondsInMinute) {
    return secondsDiff >= 0
      ? `${Math.floor(secondsDiff)}s ago`
      : `In ${Math.abs(Math.floor(secondsDiff))}s`;
  }

  if (Math.abs(secondsDiff) < secondsInHour) {
    return secondsDiff >= 0
      ? `${Math.floor(secondsDiff / secondsInMinute)}m ago`
      : `${Math.abs(Math.floor(secondsDiff / secondsInMinute))}m ago`;
  }

  if (Math.abs(secondsDiff) < secondsInDay) {
    return secondsDiff >= 0
      ? `${Math.floor(secondsDiff / secondsInHour)}h ago`
      : `${Math.abs(Math.floor(secondsDiff / secondsInHour))}h ago`;
  }

  if (Math.abs(secondsDiff) < secondsInWeek) {
    const day = Math.floor(secondsDiff / secondsInDay);

    if (day === 1)
      return day > 0 ? `${day} day ago` : `In ${Math.abs(day)} day`;

    return day > 0 ? `${day} days ago` : `In ${Math.abs(day)} days`;
  }

  if (Math.abs(secondsDiff) < secondsInMonth) {
    const week = Math.floor(secondsDiff / secondsInWeek);

    if (week === 1)
      return week > 0 ? `${week} week ago` : `In ${Math.abs(week)} week`;

    return week > 0 ? `${week} weeks ago` : `In ${Math.abs(week)} weeks`;
  }

  if (Math.abs(secondsDiff) < secondsInYear) {
    const month = Math.floor(secondsDiff / secondsInMonth);

    if (month === 1)
      return month > 0 ? `${month} month ago` : `In ${Math.abs(month)} month`;

    return month > 0 ? `${month} months ago` : `In ${Math.abs(month)} months`;
  }

  if (Math.abs(secondsDiff) < secondsInTwoYear) {
    const year = Math.floor(secondsDiff / secondsInYear);
    const month = Math.floor((secondsDiff % secondsInYear) / secondsInMonth);

    if (!month) return year > 0 ? "a year ago" : "in a year";

    if (Math.abs(month) === 1)
      return year > 0 ? "a year and a month ago" : "in a year and a month";

    return year > 0
      ? `a year and ${month} months ago`
      : `in a year and ${Math.abs(month)} months`;
  }

  if (secondsDiff >= secondsInTwoYear) {
    const year = Math.floor(secondsDiff / secondsInYear);
    return year === 1 ? `${year} year ago` : `${year} years ago`;
  }
};

export default formatTimeAgo;
