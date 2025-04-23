const formatTimeAgo = (dateString) => {
  const now = new Date();
  const date = new Date(dateString);
  const secondPast = (now.getTime() - date.getTime()) / 1000;

  if (secondPast < 60) {
    return `${Math.floor(secondPast)}s ago`;
  }

  if (secondPast < 3600) {
    return `${Math.floor(secondPast / 60)}m ago`;
  }

  if (secondPast < 86400) {
    return `${Math.floor(secondPast / 3600)}h ago`;
  }

  if (secondPast < 604800) {
    const day = Math.floor(secondPast / 86400);
    return day === 1 ? `${day} day ago` : `${day} days ago`;
  }

  if (secondPast < 2629757) {
    const week = Math.floor(secondPast / 604800);
    return week === 1 ? `${week} week ago` : `${week} weeks ago`;
  }

  if (secondPast < 31557600) {
    const month = Math.floor(secondPast / 604800);
    return month === 1 ? `${month} month ago` : `${month} months ago`;
  }

  if (secondPast >= 31557600) {
    const year = Math.floor(secondPast / 31557600);
    return year === 1 ? `${year} year ago` : `${year} years ago`;
  }
};

export default formatTimeAgo;
