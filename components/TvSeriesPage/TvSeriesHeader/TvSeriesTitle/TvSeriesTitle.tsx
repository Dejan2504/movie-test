import "./TvSeriesTitle.css";

const TvSeriesTitle = ({
  title,
  firstDate,
  lastDate,
}: {
  title: string;
  firstDate: string | null;
  lastDate: string | null;
}) => {
  let first_date;
  let last_date;
  if (firstDate) {
    first_date = new Date(firstDate);
  }

  if (lastDate) last_date = new Date(lastDate);

  return (
    <div className="title">
      <div className="sub_title">
        {firstDate
          ? `(${first_date?.toLocaleDateString("sr-SR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })} - ${
              lastDate
                ? last_date?.toLocaleDateString("sr-SR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })
                : "current"
            })`
          : null}
      </div>
      <div className="main_title">{title}</div>
    </div>
  );
};

export default TvSeriesTitle;
