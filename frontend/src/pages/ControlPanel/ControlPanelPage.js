import React from "react";
import { HeaderSub } from "../../components/DesingPageComponents/HeaderSub/HeaderSub";
import { ControlPanelSection } from "../../components/ControlPanel/ControlPanelSection";
import "./controlPanelPage.css";
export const ControlPanelPage = () => {
  return (
    <>
      <HeaderSub />
      <div className="ControlPanelPage">
        <div className="container">
          <div className="controlPanel">
            <h4 className="controlPanel__title">CONTROL PANEL</h4>

            <ControlPanelSection
              typePack="Desing Packs"
              firstCardTitletype="BRONZE PACK"
              secondCardTitletype="SILVER PACK"
              thirdCardTitletype="GOLDEN PACK"
            />
            <ControlPanelSection
              typePack="Development Packs"
              firstCardTitletype="BRONZE PACK"
              secondCardTitletype="SILVER PACK"
              thirdCardTitletype="GOLDEN PACK"
            />
            <ControlPanelSection
              typePack="Marketin Packs"
              firstCardTitletype="BRONZE PACK"
              secondCardTitletype="SILVER PACK"
              thirdCardTitletype="GOLDEN PACK"
            />
          </div>
        </div>
      </div>
    </>
  );
};
