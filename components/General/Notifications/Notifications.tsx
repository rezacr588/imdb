import { notifications } from "data/notifications";
import { FC, useState } from "react";
import { NotificationItem } from "./NotificationItem";
import { StyledContainer } from "./styles";
export const Notifications: FC = () => {
  const [state] = useState(notifications);

  return (
    <StyledContainer>
      {state.map((n) => (
        <NotificationItem key={n.id} {...n} />
      ))}
    </StyledContainer>
  );
};
