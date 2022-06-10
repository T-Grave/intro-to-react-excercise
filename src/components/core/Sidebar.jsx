import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

const noop = () => {};

const Sidebar = (props) => {
  const { open, children, handleToggle } = props;

  return (
    <aside
      className={`sidebar ${open ? "" : "sidebar--closed"}`}
      onClick={open ? noop : handleToggle}
    >
      {children}
      <button
        className="sidebar__close btn btn--inverse btn--icon"
        onClick={handleToggle}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </aside>
  );
};

export default Sidebar;
