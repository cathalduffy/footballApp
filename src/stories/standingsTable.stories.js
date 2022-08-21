import React from "react";
import StandingsTable from "../components/standingsTable";
import SampleTeam from "./sampleData";

export default {
  title: "Team Details Page/TeamDetails",
  component: StandingsTable,
};

export const Basic = () => <StandingsTable teams={SampleTeam} />;
Basic.storyName = "Default";