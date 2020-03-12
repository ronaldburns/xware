import React from "react";

export interface WizardNav {
  title: string;
  desc: string;
  icon: string;
}

export const WizardNavItem = (props: WizardNav) => {
  return (
    <div
      className="kt-wizard-v2__nav-item"
      data-ktwizard-type="step"
      data-ktwizard-state="current"
    >
      <div className="kt-wizard-v2__nav-body">
        <div className="kt-wizard-v2__nav-icon">
          <i className={props.icon} />
        </div>
        <div className="kt-wizard-v2__nav-label">
          <div className="kt-wizard-v2__nav-label-title">{props.title}</div>
          <div className="kt-wizard-v2__nav-label-desc">{props.desc}</div>
        </div>
      </div>
    </div>
  );
};
