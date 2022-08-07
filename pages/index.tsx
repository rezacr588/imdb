import { HomePage } from "components/HomePage/HomePage";
import type { NextPage } from "next";
import MainLayout from "../components/General/MainLayout/MainLayout";
import HomeHeader from "../components/Headers/HomeHeader/HomeHeader";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HomeHeader />
      <HomePage />
    </MainLayout>
  );
};

export default Home;
