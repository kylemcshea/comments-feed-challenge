type useCommentCardProps = {
  created: string;
};

type useCommentCardResponse = {
  dayOfWeek: string;
  time: string;
};

export const useCommentCard = ({
  created,
}: useCommentCardProps): useCommentCardResponse => {
  const utcCreatedDateTime = `${created} Z`;

  const date = new Date(utcCreatedDateTime);
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = dayNames[date.getDay()];

  const time = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return { dayOfWeek, time };
};
