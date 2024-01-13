import Activity from "../activity/activity";
import Explorer from "../explorer/explorer";
import Sidebar from "../sidebar/sidebar";

const dashboard = () => {
  return (
    <>
      <div className="flex p-8">
        <Explorer />
        <Activity />
        <Sidebar />
      </div>
    </>
  );
};

export default dashboard;
