import { CSSProperties } from "react";

interface PropsProgressBar {
  bgcolor: string;
  completed: number;
}

export default function ProgressBar({ bgcolor, completed }: PropsProgressBar) {

  const containerStyles: CSSProperties = {
    height: 10,
    width: "250px",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: "3px 50px"
  };

  const fillerStyles: CSSProperties = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: `${bgcolor}`,
    borderRadius: "inherit",
    textAlign: "right"
  };

  const labelStyles: CSSProperties = {
    color: "#A09FB1",
    fontWeight: "bold"
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          width: 250,
          margin: "0 50px",
          justifyContent: "space-between"
        }}
      >
        <article style={labelStyles}>0</article>
        <article style={labelStyles}>50</article>
        <article style={labelStyles}>100</article>
      </div>
      <div style={containerStyles}>
        <div
          style={{
            height: "100%",
            width: `${completed}%`,
            backgroundColor: `${bgcolor}`,
            borderRadius: "inherit",
            textAlign: "right"
          }}
        ></div>
      </div>
      <article
        style={{
          textAlign: "end",
          color: "#a09fb1",
          marginRight: 50,
          fontWeight: 700,
          fontFamily: 'Raleway'
        }}
      >
        %
      </article>
    </>
  );
}
