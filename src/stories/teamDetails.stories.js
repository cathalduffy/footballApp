import React from "react";
import TeamDetails from "../components/teamDetails";
import SampleTeam from "./sampleData";

export default {
  title: "Team Details Page/TeamDetails",
  component: TeamDetails,
};

export const Basic = () => <TeamDetails teams={SampleTeam} />;
Basic.storyName = "Default";