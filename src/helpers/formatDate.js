import { format } from "date-fns";

function Mounth(text) {
  let mounth = 1;

  switch (text) {
    case "Jan":
      mounth = 1;
      return mounth
      break;
    case "Feb":
      mounth = 2;
      return mounth
      break;
    case "Mar":
      mounth = 3;
      return mounth
      break;
    case "Apr":
      mounth = 4;
      return mounth
      break;
    case "May":
      mounth = 5;
      return mounth
      break;
    case "Jun":
      mounth = 6;
      return mounth
      break;
    case "Jul":
      mounth = 7;
      return mounth
      break;
    case "Aug":
      mounth = 8;
      return mounth
      break;
    case "Sep":
      mounth = 9;
      return mounth
      break;
    case "Oct":
      mounth = 10;
      return mounth
      break;
    case "Nov":
      mounth = 11;
      return mounth
      break;
    case "Dec":
      mounth = 12;
      return mounth
      break;
    default:
      return mounth;
  }
}

export const Date = (x) => {
  let fecha = format(x, "PP");
  let date = fecha.split(" ");
  let day = date[1];
  day = day.slice(0, -1);
  let mounth = date[0];
  mounth = Mounth(mounth)
  let year = date[2];
  return {
    day: Number(day),
    mounth: Number(mounth),
    year: Number(year),
  };
};

export const Hour = (x) => {
  let time = x.split(":")
  return ({
    hour:time[0],
    minute:time[1]
  })
}
