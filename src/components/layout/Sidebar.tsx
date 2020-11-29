import React from "react";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
  FaPlusCircle,
  FaPlus,
} from "react-icons/fa";

interface Props {}

export const Sidebar: React.FC<Props> = () => {
  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li>
          <span>
            <FaInbox />
          </span>{" "}
          Inbox
        </li>
        <li>
          <span>
            <FaRegCalendar />
          </span>{" "}
          Today
        </li>
        <li>
          <span>
            <FaRegCalendarAlt />
          </span>{" "}
          Upcoming
        </li>
      </ul>

      <div className="sidebar__middle">
        <span>
          <FaChevronDown />
        </span>
        <h4>Projects</h4>
        <span>
          <FaPlus />
        </span>
      </div>

      <ul className="sidebar__projects">Projects list will be here!</ul>

      <div className="sidebar__addProjects">
        <span>
          <FaPlusCircle />
        </span>{" "}
        Add Project
      </div>
    </div>
  );
};
