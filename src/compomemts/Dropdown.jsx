import Menunew from "../compomemts/Menunew";

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {" "}    
      {submenus.map((child, index) => (
        <Menunew items={child} key={index} depthLevel={depthLevel} />
      ))}{" "}
    </ul>
  );
};

export default Dropdown;