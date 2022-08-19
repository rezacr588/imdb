import { HomeBottom } from "components/General/HomeBottom/HomeBottom";
import BaseHeader from "components/Headers/BaseHeader/BaseHeader";
import { TicketContainer } from "components/TicketsSlider/TicketContainer";
import { tickets } from "data/tickets";
import type { NextPage } from "next";
import MainLayout from "../components/General/MainLayout/MainLayout";

const Tickets: NextPage = () => {
  return (
    <MainLayout>
      <BaseHeader title="Tickets" />
      <TicketContainer data={tickets} />
      <HomeBottom />
    </MainLayout>
  );
};

export default Tickets;
