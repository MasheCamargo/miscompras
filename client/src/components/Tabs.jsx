import { useDispatch } from "react-redux";

import { TABS } from "../redux/actions/type";
import { toggleTab } from "../redux/actions";

const Tabs = ({ currentTab }) => {
  const dispatch = useDispatch();

  return TABS.map((tab, index) => (
    <button
      className={tab === currentTab ? "button selected" : "button"}
      onClick={() => dispatch(toggleTab(tab))}
      key={index}
    >
      {tab}
    </button>
  ));
};

export default Tabs;
