import Activity from "../activity/activity";
import Explorer from "../explorer/explorer";

const dashboard = () => {
  return (
    <>
      <div className="flex p-8">
        <Activity />
        <Explorer />
      </div>
    </>
  );
};

export default dashboard;
