import React from "react";

const TabButtons = () => {
  return (
    <>
      <ul class="tabs">
        <li
          class={activeTab ? "active-tab" : "tab-item tabitem-inactive"}
          onClick={onToggle}
        >
          Assets with Jane
        </li>
        <li
          class={activeTab ? "active-tab" : "tab-item tabitem-inactive"}
          onClick={onToggle}
        >
          History
        </li>
      </ul>
    </>
  );
};

export default TabButtons;
