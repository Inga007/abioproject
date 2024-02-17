import MenuCatalog from "../compomemts/MenuCatalog";
import row from "../images/row.png"


const Dropdownsecond = ({ submenus, dropdown, depthLevel,  handleActive }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  return (
    <ul className={`dropdown2 ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {" "}    
      {submenus.map((child, index) => (
        <MenuCatalog items={child} key={index} depthLevel={depthLevel} handleActive={handleActive} />
      ))}{" "}
        <img src={row} className="row-img" alt="" />
    </ul>
  );
};

export default Dropdownsecond;