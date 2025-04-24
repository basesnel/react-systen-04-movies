const formatTimeAgo = (dateString) => {
  const now = new Date();
  const date = new Date(dateString);
  const secondPast = (now.getTime() - date.getTime()) / 1000;

  const secondsInMinute = 60;
  const secondsInHour = secondsInMinute * 60;
  const secondsInDay = secondsInHour * 24;
  const secondsInWeek = secondsInDay * 7;
  const secondsInMonth = Math.round(secondsInDay * 30.437);
  const secondsInYear = Math.round(secondsInDay * 365.25);
  const secondsInTwoYear = secondsInYear * 2;

  if (secondPast < secondsInMinute) {
    return `${Math.floor(secondPast)}s ago`;
  }

  if (secondPast < secondsInHour) {
    return `${Math.floor(secondPast / secondsInMinute)}m ago`;
  }

  if (secondPast < secondsInDay) {
    return `${Math.floor(secondPast / secondsInHour)}h ago`;
  }

  if (secondPast < secondsInWeek) {
    const day = Math.floor(secondPast / secondsInDay);
    return day === 1 ? `${day} day ago` : `${day} days ago`;
  }

  if (secondPast < secondsInMonth) {
    const week = Math.floor(secondPast / secondsInWeek);
    return week === 1 ? `${week} week ago` : `${week} weeks ago`;
  }

  if (secondPast < secondsInYear) {
    const month = Math.floor(secondPast / secondsInMonth);
    return month === 1 ? `${month} month ago` : `${month} months ago`;
  }

  if (secondPast < secondsInTwoYear) {
    const year = Math.floor(secondPast / secondsInYear);
    const month = Math.floor((secondPast % secondsInYear) / secondsInMonth);

    if (!month) return `${year} year ago`;
    if (month === 1) return `${year} year and month ago`;

    return `${year} year and ${month} months ago`;
  }

  if (secondPast >= secondsInTwoYear) {
    const year = Math.floor(secondPast / secondsInYear);
    return year === 1 ? `${year} year ago` : `${year} years ago`;
  }
};

export default formatTimeAgo;
