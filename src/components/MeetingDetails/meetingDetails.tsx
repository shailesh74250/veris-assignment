import { FC } from "react";
import {
  GlobalOutlined,
  CalendarOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";
import "./meetingDetails.css";

export const MeetingDetails: FC = () => (
  <div className="meeting_details_section">
    <p className="meeting_with">Gurav Garg</p>
    <h2 className="meeting_title">15 Minute Meeting</h2>
    <p className="meeting_details">
      <FieldTimeOutlined /> 15 Min
    </p>
    <p className="meeting_details">
      <CalendarOutlined /> 9:30am-9:45am, Friday, September 16, 2022
    </p>
    <p className="meeting_details">
      <GlobalOutlined /> India Standard Time
    </p>
  </div>
);
