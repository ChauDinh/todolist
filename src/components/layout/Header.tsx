import React from "react";
import { FaBell, FaPlus, FaCog, FaYinYang } from "react-icons/fa";

interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Todoist_logo" />
        </div>
        <div className="settings">
          <ul>
            <li>
              <FaPlus />
            </li>
            <li>
              <FaYinYang />
            </li>
            <li>
              <FaBell />
            </li>
            <li>
              <FaCog />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
