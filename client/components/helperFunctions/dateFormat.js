export const formatDate = (date) => {
  return (
    (date.getMonth() > 8 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)) +
    "/" +
    (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
    "/" +
    date.getFullYear()
  );
};

export const formatAddress = (event) => {
  if (event.venueName) {
    const venue = event.venueName.split(" ").join("+");
    const city = event.venueCity.split(" ").join("+");
    return `${venue},${city},${event.venueStateCode}`;
  } else {
    return null;
  }
};

export const dayOfWeek = (date) => {
  const day = date.getDay();

  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  }
};

export const getMonth = (date) => {
  const month = date.getMonth();

  switch (month) {
    case 0:
      return {
        month: "January",
        abbrev: "Jan",
      };
    case 1:
      return {
        month: "February",
        abbrev: "Feb",
      };
    case 2:
      return {
        month: "March",
        abbrev: "Mar",
      };
    case 3:
      return {
        month: "April",
        abbrev: "Apr",
      };
    case 4:
      return {
        month: "May",
        abbrev: "May",
      };
    case 5:
      return {
        month: "June",
        abbrev: "June",
      };
    case 6:
      return {
        month: "July",
        abbrev: "July",
      };
    case 7:
      return {
        month: "August",
        abbrev: "Aug",
      };
    case 8:
      return {
        month: "October",
        abbrev: "Oct",
      };
    case 9:
      return {
        month: "September",
        abbrev: "Sep",
      };
    case 10:
      return {
        month: "November",
        abbrev: "Nov",
      };
    case 11:
      return {
        month: "December",
        abbrev: "Dec",
      };
  }
};

export const formatName = (name) => {
  return (name.substring(0,1).toUpperCase() + name.substring(1));
}