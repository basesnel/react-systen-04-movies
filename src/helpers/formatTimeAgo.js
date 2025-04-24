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

  if (secondsDiff < secondsInMinute) {
    return secondsDiff >= 0
      ? `${Math.floor(secondsDiff)}s ago`
      : `In ${Math.abs(Math.floor(secondsDiff))}s`;
  }

  if (secondsDiff < secondsInHour) {
    return `${Math.floor(secondsDiff / secondsInMinute)}m ago`;
  }

  if (secondsDiff < secondsInDay) {
    return `${Math.floor(secondsDiff / secondsInHour)}h ago`;
  }

  if (secondsDiff < secondsInWeek) {
    const day = Math.floor(secondsDiff / secondsInDay);
    return day === 1 ? `${day} day ago` : `${day} days ago`;
  }

  if (secondsDiff < secondsInMonth) {
    const week = Math.floor(secondsDiff / secondsInWeek);
    return week === 1 ? `${week} week ago` : `${week} weeks ago`;
  }

  if (secondsDiff < secondsInYear) {
    const month = Math.floor(secondsDiff / secondsInMonth);
    return month === 1 ? `${month} month ago` : `${month} months ago`;
  }

  if (secondsDiff < secondsInTwoYear) {
    const year = Math.floor(secondsDiff / secondsInYear);
    const month = Math.floor((secondsDiff % secondsInYear) / secondsInMonth);

    if (!month) return `${year} year ago`;
    if (month === 1) return `${year} year and month ago`;

    return `${year} year and ${month} months ago`;
  }

  if (secondsDiff >= secondsInTwoYear) {
    const year = Math.floor(secondsDiff / secondsInYear);
    return year === 1 ? `${year} year ago` : `${year} years ago`;
  }
};

export default formatTimeAgo;
