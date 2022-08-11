import { HomeBottom } from "components/General/HomeBottom/HomeBottom";
import { Login } from "components/General/Profile/Login";
import { SignUpButton, TopLine } from "components/General/Profile/styles";
import BaseHeader from "components/Headers/BaseHeader/BaseHeader";
import type { NextPage } from "next";
import MainLayout from "../components/General/MainLayout/MainLayout";

const Profile: NextPage = () => {
  return (
    <MainLayout>
      <BaseHeader
        title="Profile"
        right={<SignUpButton>Sign Up</SignUpButton>}
      />
      <TopLine />
      <Login />
      <HomeBottom />
    </MainLayout>
  );
};

export default Profile;
