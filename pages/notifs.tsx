import { HomeBottom } from "components/General/HomeBottom/HomeBottom";
import BaseHeader from "components/Headers/BaseHeader/BaseHeader";
import type { NextPage } from "next";
import MainLayout from "../components/General/MainLayout/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <BaseHeader title="Notifications" />
      <HomeBottom />
    </MainLayout>
  );
};

export default Home;
