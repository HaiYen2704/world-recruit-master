import React from "react";
import "./Form.css";
import Heading from "./Heading";
import Background from "../../img/bg.jpg";
export default function Form(props) {
  return (
    <div className="wraper" id="entry">
      <Heading data={props.data} />

      <div className="contact-box">
        <div className="left">
          <img src={Background} alt="" />
        </div>
        <div className="right">
          <form action={props.data.action}>
            {props.data.items.map((item, index) => {
              return (
                <div>
                  <input
                    className="field"
                    key={index}
                    type={item.type}
                    name={item.name}
                    placeholder={item.placeholder}
                  />
                </div>
              );
            })}
            <textarea
              name="entry.1253529684"
              placeholder="Bạn có câu hỏi nào cho chúng tôi không?"
              className="field"
            ></textarea>
            <input type="submit" value="Ứng tuyển" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
}