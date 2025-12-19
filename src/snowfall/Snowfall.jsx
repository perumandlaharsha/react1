import ReactSnowfall from "react-snowfall";

function Snowfall() {
  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      <ReactSnowfall
        color="white"
        speed={[3.0, 5.0]}
      />
    </div>
  );
}

export default Snowfall;
