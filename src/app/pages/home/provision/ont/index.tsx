import React, { Component } from "react";
import { WizardNav } from "../../../../components/wizard";

export const Nav: WizardNav = {
  title: "ONT Type",
  desc: "Select your ONT",
  icon: "flaticon-globe"
};

export enum OntID {
  "ADTRAN-411",
  "ADTRAN-424GE",
  "ADTRAN-424RG",
  "CALIX-844G",
  "CALIX-717GE"
}

export interface ONT {
  id: OntID;
  name: string;
  image: string;
  vendor: string;
}

const devicesFilepath: string = "/media/devices/";

export const ONTs: ONT[] = [
  {
    id: OntID["ADTRAN-411"],
    name: "411",
    image: devicesFilepath + "adtran/411_401_uncropped.jpg",
    vendor: "Adtran"
  },

  {
    id: OntID["ADTRAN-424GE"],
    name: "424GE",
    image: devicesFilepath + "adtran/424RG_uncropped.jpg",
    vendor: "Adtran"
  },

  {
    id: OntID["ADTRAN-424RG"],
    name: "424RG",
    image: devicesFilepath + "adtran/424RG_uncropped.jpg",
    vendor: "Adtran"
  },

  {
    id: OntID["CALIX-844G"],
    name: "844G",
    image: devicesFilepath + "calix/gigacenter.png",
    vendor: "Calix"
  },

  {
    id: OntID["CALIX-717GE"],
    name: "717GE",
    image: devicesFilepath + "calix/722GE_bad.png",
    vendor: "Calix"
  }
];

interface Props {
  ONTType: OntID;
}

export class SelectONT extends Component<Props, any> {
  ont = ONTs.find(o => o.id === this.props.ONTType);

  render() {
    if (!this.ont) {
      return <div>Error: No ONT Selected</div>;
    } else {
      return (
        <div className="col-lg-3" style={{ display: "flex" }}>
          <button
            type="button"
            onClick={() => {}}
            style={{ textAlign: "left" }}
            className={`btn btn-secondary btn-hover-${this.ont.vendor.toLowerCase()} kt-portlet kt-iconbox kt-iconbox--${this.ont.vendor.toLowerCase()} kt-iconbox--animate-slow`}
          >
            <div className="kt-portlet__body" style={{ padding: "0" }}>
              <div className="kt-iconbox__body">
                <div className="kt-iconbox__icon">
                  <img
                    src={this.ont.image}
                    alt="ont-model"
                    style={{
                      height: "50px"
                    }}
                  />
                </div>
                <div className="kt-iconbox__desc">
                  <h3
                    className="kt-iconbox__title"
                    style={{ marginBottom: "0" }}
                  >
                    {this.ont.name}
                  </h3>
                  <div className="kt-iconbox__content">{this.ont.vendor}</div>
                </div>
              </div>
            </div>
          </button>
        </div>
      );
    }
  }
}

export default { Nav };
