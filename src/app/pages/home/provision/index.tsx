import React, { Component, RefObject } from "react";
import ONT, { SelectONT, OntID, ONTs } from "./ont";
import "../../../../_metronic/_assets/sass/pages/wizard/wizard-2.scss";
import KTWizard from "../../../../_metronic/_assets/js/wizard.js";
import { WizardNavItem, WizardNav } from "../../../components/wizard";
import Customer, { CustomerInfo } from "./customer";

interface Props {}

interface State {
  selectedONT: OntID;
}

class Provision extends Component<Props, State> {
  formRef: RefObject<HTMLDivElement>;
  wizard: any;

  constructor(props: Props) {
    super(props);
    this.formRef = React.createRef();
    this.state = {
      selectedONT: ONTs[0].id
    };
  }

  componentDidMount() {
    this.wizard = new (KTWizard as any)(this.formRef.current, {
      startStep: 1,
      clickableSteps: true
    });
  }

  getNavItems() {
    const navItems: WizardNav[] = [Customer.Nav, ONT.Nav];
    return navItems.map(item => (
      <WizardNavItem title={item.title} desc={item.desc} icon={item.icon} />
    ));
  }

  getContent() {
    return [<CustomerInfo />];
  }

  onONTSelect = (ONT: OntID) => {
    this.setState({ selectedONT: ONT });
  };

  render() {
    return (
      <div className="kt-portlet">
        <div className="kt-portlet__body kt-portlet__body--fit">
          <div
            className="kt-grid kt-wizard-v2 kt-wizard-v2--white"
            ref={this.formRef}
            id="kt_wizard_v2"
            data-ktwizard-state="first"
          >
            <div className="kt-grid__item kt-wizard-v2__aside">
              <div className="kt-wizard-v2__nav">
                <div className="kt-wizard-v2__nav-items kt-wizard-v2__nav-items--clickable">
                  {this.getNavItems()}

                  <div
                    className="kt-wizard-v2__nav-item"
                    data-ktwizard-type="step"
                    data-ktwizard-state="current"
                  >
                    <div className="kt-wizard-v2__nav-body">
                      <div className="kt-wizard-v2__nav-icon">
                        <i className="flaticon-pie-chart" />
                      </div>
                      <div className="kt-wizard-v2__nav-label">
                        <div className="kt-wizard-v2__nav-label-title">
                          Services
                        </div>
                        <div className="kt-wizard-v2__nav-label-desc">
                          Select your services
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="kt-grid__item kt-grid__item--fluid kt-wizard-v2__wrapper">
              <form
                className="kt-form"
                onSubmit={e => {
                  e.preventDefault();
                  console.log("Form Submit", e);
                }}
              >
                {this.getContent()}
                <div
                  className="kt-wizard-v2__content"
                  data-ktwizard-type="step-content"
                >
                  <div className="kt-heading kt-heading--md">ONT Type</div>
                  <div className="kt-form__section kt-form__section--first">
                    <div className="kt-wizard-v2__form">
                      <div className="form-group row">
                        <div className="col-lg-12">
                          <div className="row">
                            <SelectONT ONTType={OntID["ADTRAN-411"]} />
                            <SelectONT ONTType={OntID["ADTRAN-424GE"]} />
                            <SelectONT ONTType={OntID["CALIX-844G"]} />
                            <SelectONT ONTType={OntID["CALIX-717GE"]} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="kt-wizard-v2__content"
                  data-ktwizard-type="step-content"
                >
                  <div className="kt-heading kt-heading--md">Services</div>
                  <div className="kt-form__section kt-form__section--first">
                    <div className="kt-wizard-v2__form">
                      <div className="form-group row">
                        <div className="col-lg-12">
                          <div className="row"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/** Form Actions */}
                <div className="kt-form__actions">
                  <button
                    className="btn btn-secondary btn-md btn-tall btn-wide kt-font-bold kt-font-transform-u"
                    data-ktwizard-type="action-prev"
                  >
                    Previous
                  </button>
                  <button
                    className="btn btn-success btn-md btn-tall btn-wide kt-font-bold kt-font-transform-u"
                    data-ktwizard-type="action-submit"
                  >
                    Submit
                  </button>
                  <button
                    className="btn btn-brand btn-md btn-tall btn-wide kt-font-bold kt-font-transform-u"
                    data-ktwizard-type="action-next"
                  >
                    Next Step
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Provision;
