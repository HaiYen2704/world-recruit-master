import React from "react";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import RecruitJSON from "../data/recruit";

export default function Recruit() {
  return (
    <React.Fragment>
      <Header />
      <Main data={RecruitJSON} />
    </React.Fragment>
  );
}
