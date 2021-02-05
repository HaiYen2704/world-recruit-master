import React from "react";
import ViewList from "./ViewList";
import Form from "./Form";
import TextList from "./TextList";

function ComponentSelector(section, index) {
  switch (section.type) {
        case "ViewList":
      return <ViewList key={index} data={section} />;
    case "TextList":
      return <TextList key={index} data={section} />;
    case "Form":
      return <Form key={index} data={section} />;
    default:
      return "";
  }
}

function Sections(props) {
  return (
    <section>
      {props.data.map((section, index) => {
        return ComponentSelector(section, index);
      })}
    </section>
  );
}

const Main = (props) => {
  console.log(props.data);
  return <Sections data={props.data.sections} />;
};

export default Main;
