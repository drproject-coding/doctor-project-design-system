import React from "react";
import { TopBar } from "../../../components/TopBar/TopBar";

export interface ToolsTrackerTopBarProps {
  onMenuClick?: () => void;
  onSyncClick?: () => void;
}

export const ToolsTrackerTopBar: React.FC<ToolsTrackerTopBarProps> = ({
  onMenuClick,
  onSyncClick,
}) => (
  <TopBar
    title="Tools Tracker"
    menuButton={false}
    onMenuClick={onMenuClick}
    actions={
      <button
        className="drp-btn drp-btn--primary drp-btn--sm"
        onClick={onSyncClick}
      >
        Sync with AppSumo
      </button>
    }
  />
);
