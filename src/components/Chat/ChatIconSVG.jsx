import * as React from "react";
const ChatIconSVG = (props) => (
  <svg
    width="25px"
    height="25px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#000000"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    {...props}
  >
    <polygon points="1.75 14.25,1.75 2.75,14.25 2.75,14.25 11.25,5.75 11.25" />
  </svg>
);
export default ChatIconSVG;