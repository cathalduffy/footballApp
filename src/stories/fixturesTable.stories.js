import React from "react";
import FixturesTable from "../components/fixturesTable";
import SampleFixtures from "./fixtureData";

export default {
  title: "Team Fixtures",
  component: SampleFixtures,
};

export const Basic = () => <FixturesTable teams={SampleFixtures} />;
Basic.storyName = "Default";