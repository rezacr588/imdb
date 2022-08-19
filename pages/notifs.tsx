import { HomeBottom } from "components/General/HomeBottom/HomeBottom";
import { Notifications } from "components/General/Notifications/Notifications";
import BaseHeader from "components/Headers/BaseHeader/BaseHeader";
import type { NextPage } from "next";
import MainLayout from "../components/General/MainLayout/MainLayout";

const Notifs: NextPage = () => {
  return (
    <MainLayout>
      <BaseHeader title="Notifications" />
      <Notifications />
      <HomeBottom />
    </MainLayout>
  );
};

export default Notifs;
