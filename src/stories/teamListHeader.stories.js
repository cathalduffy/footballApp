import React from "react";
import TeamListHeader from "../components/headerTeamList";

export default {
  title: "Home Page/Header",
  component: TeamListHeader,
};

export const Basic = () => <TeamListHeader title={'Discover Teams'} />;

Basic.storyName = "Default";