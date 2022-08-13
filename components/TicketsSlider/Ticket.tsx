import { SpaceX, SpaceY } from "components/Styles/styles";
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

export const Ticket: FC = () => {
  return (
    <TicketWrapper>
      <div>
        <Image
          src="/dark-knight-cover.jpg"
          alt="dark-knight-cover"
          width={324}
          height={208}
        />
      </div>
      <DetailsWrapper>
        <WholeRow>
          <Title>John Wick 3: Parabellum</Title>
        </WholeRow>
        <WholeRow>
          <Detail title="Theatre" time="Paragon Cinema" />
        </WholeRow>
        <Detail title="Date" time="24 May, 2019" />
        <Detail title="Time" time="8:30 - 10:00 AM" />
        <Row>
          <Detail title="Hall" time="C" />
          <SpaceX />
          <SpaceX />
          <Detail title="Row" time="E" />
        </Row>
        <Detail title="Seat" time="E4, E5" />
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
