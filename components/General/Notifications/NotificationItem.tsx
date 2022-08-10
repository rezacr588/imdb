import { NotificationItemInterface } from "data/notifications";
import { FC } from "react";
import { NotificationIcon } from "./NotificationIcon";
import { NotificationContainer, StyledContent, Extra } from "./styles";

function timeSince(date: Date) {
  let seconds = Math.floor((Number(new Date()) - Number(date)) / 1000);

  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

export const NotificationItem: FC<NotificationItemInterface> = ({
  content,
  createdAt,
  type,
}) => {
  return (
    <NotificationContainer>
      <NotificationIcon type={type} />
      <div>
        <StyledContent>{content}</StyledContent>
        <Extra>{timeSince(createdAt) + " ago"}</Extra>
      </div>
    </NotificationContainer>
  );
};
