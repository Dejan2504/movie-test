import React from "react";
import "./MovieHeaderTitle.css";

const MovieHeaderTitle = ({
  title,
  status,
  date,
}: {
  title: string;
  status: string;
  date: string;
}) => {
  const current_date = new Date(date);

  return (
    <div className="title">
      <div className="sub_title">
        {status}{" "}
        {date
          ? `- (${current_date.toLocaleDateString("sr-SR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })})`
          : null}
      </div>
      <div className="main_title">{title}</div>
    </div>
  );
};

export default MovieHeaderTitle;
