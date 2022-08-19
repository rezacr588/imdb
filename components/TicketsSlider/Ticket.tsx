import { SpaceX } from "components/Styles/styles";
import { ticketInterface } from "data/tickets";
import Image from "next/image";
import { FC } from "react";
import { Detail } from "./Detail";
import {
  TicketWrapper,
  Title,
  DetailsWrapper,
  Row,
  WholeRow,
  Text,
  ParWrapper,
  ParDetails,
} from "./styles";

export const Ticket: FC<ticketInterface> = ({
  imgSource,
  title,
  theatre,
  date,
  time,
  hall,
  seat,
  row,
}) => {
  return (
    <TicketWrapper>
      <Image src={imgSource} alt="dark-knight-cover" width={324} height={208} />
      <DetailsWrapper>
        <WholeRow>
          <Title>{title}</Title>
        </WholeRow>
        <WholeRow>
          <Detail title="Theatre" value={theatre} />
        </WholeRow>
        <Detail title="Date" value={date} />
        <Detail title="Time" value={time} />
        <Row>
          <Detail title="Hall" value={hall} />
          <SpaceX />
          <SpaceX />
          <Detail title="Row" value={row} />
        </Row>
        <Detail title="Seat" value={seat} />
      </DetailsWrapper>
      <ParWrapper>
        <div>
          <Image src="/password.svg" alt="password" width={243} height={40} />
        </div>
        <ParDetails>
          <Text>PAR</Text>
          <Text> 3 1 1 7 7 0 1 3 2 0 6 3 7 5</Text>
        </ParDetails>
      </ParWrapper>
    </TicketWrapper>
  );
};
