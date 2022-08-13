import { HomeBottom } from "components/General/HomeBottom/HomeBottom";
import BaseHeader from "components/Headers/BaseHeader/BaseHeader";
import { TopLine } from "components/Styles/styles";
import { TicketContainer } from "components/TicketsSlider/TicketContainer";
import type { NextPage } from "next";
import MainLayout from "../components/General/MainLayout/MainLayout";

const Tickets: NextPage = () => {
  return (
    <MainLayout>
      <BaseHeader title="Tickets" />
      <TopLine />
      <TicketContainer />
      <HomeBottom />
    </MainLayout>
  );
};

export default Tickets;
