import { HomeBottom } from "components/General/HomeBottom/HomeBottom";
import BaseHeader from "components/Headers/BaseHeader/BaseHeader";
import { HomeSlider } from "components/HomeSlider/HomeSlider";
import type { NextPage } from "next";
import MainLayout from "../components/General/MainLayout/MainLayout";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <BaseHeader
        title="Star Movie"
        right={
          <Image alt="search-icon" width={24} height={24} src="/search.svg" />
        }
      />
      <HomeSlider />
      <HomeBottom />
    </MainLayout>
  );
};

export default Home;
