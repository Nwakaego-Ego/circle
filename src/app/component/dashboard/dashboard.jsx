import Activity from "../activity/activity";
import Explorer from "../explorer/explorer";
import Sidebar from "../sidebar/sidebar";
import "./dashboard.css";

const dashboard = () => {
  return (
    <>
      <div className="dashboard-main p-8">
        <Explorer className="explorer-component" />
        <Activity className="actvity-component" />
        <Sidebar className="sidebar-component" />
      </div>
    </>
  );
};

export default dashboard;
