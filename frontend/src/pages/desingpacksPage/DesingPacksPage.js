import { HeaderSub } from "../../components/DesingPageComponents/HeaderSub/HeaderSub.js";
import { NextAndBack } from "../../components/DesingPageComponents/DownContainer/NextBack.js";
import { SectionDesktopCards } from "../../components/DesingPageComponents/Cards/SectionDesktopCards.js";
import "./desingpacksPakcs.css";
import { CircleBar } from "../../components/DesingPageComponents/barComponent/CircleBar.js";

export const DesingPacksPage = () => {
  return (
    <div className="desingPacksPage">
      <HeaderSub />
      <div className="container custom-flexDesingpage  ">
        <SectionDesktopCards />
      </div>
      {/* <NextAndBack /> */}
      <CircleBar />
    </div>
  );
};
