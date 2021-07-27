import "./Loader.css";
const Loader = ({ borderRadiusNone }) => {
  return (
    <div
      className={`container-loader ${borderRadiusNone && "borderRadiusNone"}`}
    >
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
