import React from "react";
import TeamCard from "../components/teamCard";
import SampleTeam from "./sampleData";

export default {
  title: "Home Page/MovieCard",
  component: TeamCard,
};

export const Basic = () => {
  return (
    <TeamCard
      teams={SampleTeam}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleTeam, poster_path: undefined };
  return (
    <TeamCard
      teams={sampleNoPoster}
    />
  );
};
Exceptional.storyName = "exception";