import React from "react";

function SidebarItem({ menu }) {
  return (
    <div>
      <p>{menu.name}</p>
    </div>
  );
}

export default SidebarItem;