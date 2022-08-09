import { HomeBottom } from "components/General/HomeBottom/HomeBottom";
import { HomeSlider } from "components/HomeSlider/HomeSlider";
import type { NextPage } from "next";
import MainLayout from "../components/General/MainLayout/MainLayout";
import HomeHeader from "../components/Headers/HomeHeader/HomeHeader";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HomeHeader />
      <HomeSlider />
      <HomeBottom />
    </MainLayout>
  );
};

export default Home;
