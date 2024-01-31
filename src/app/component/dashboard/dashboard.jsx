"use client";
import React from "react";

import Activity from "../activity/activity";
import Explorer from "../explorer/page";
import Sidebar from "../sidebar/sidebar";
import MeetingScheduler from "../meeting/page";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-main p-8">
        <Explorer className="explorer-component" />
        <Activity className="activity-component" />
        <Sidebar className="sidebar-component" />
      </div>
    </>
  );
};

export default Dashboard;
