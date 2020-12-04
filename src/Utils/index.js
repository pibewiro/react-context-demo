import { lightFormat } from "date-fns";

export const dateFormat = (data) => {
  const day = lightFormat(new Date(data), "MM/dd/yyyy");
  const time = lightFormat(new Date(data), "hh:mm");

  return `${day} ${time}`;
};
