import React from "react";
import { WizardNav } from "../../../../components/wizard";
import RegionSelect from "../SelectRegion";
import AgreementNumberInput from "./AgreementNumberInput";

//interface Props {}

export const Nav: WizardNav = {
  title: "Customer Information",
  desc: "Setup Their Account Details",
  icon: "flaticon-avatar"
};

export function CustomerInfo(/*props: Props*/) {
  return (
    <div className="kt-wizard-v2__content" data-ktwizard-type="step-content">
      <div className="kt-heading kt-heading--md">Customer Information</div>
      <div className="kt-form__section kt-form__section--first">
        <div className="kt-wizard-v2__form">
          <div className="form-group row">
            <div className="col-lg-6 form-group-sub">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                name="fullname"
                placeholder="Customer Name"
                autoComplete="off"
              />
              <span className="form-text text-muted">
                Please enter their full name.
              </span>
            </div>

            <AgreementNumberInput className="col-lg-6 form-group-sub" />
          </div>
          <div className="form-group row">
            <div className="col-lg-6 form-group-sub">
              <label>Region</label>
              <RegionSelect />
              <span className="form-text text-muted">
                Select the region their internet is fed from.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default { Nav, CustomerInfo };
