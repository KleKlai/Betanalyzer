const formatReadableDate = (dateString) => {
  const date = new Date(dateString);

  // Format the date as a readable string (e.g., November 5, 2023, 2:25 PM)
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return date.toLocaleString("en-US", options);
};

export default formatReadableDate;
