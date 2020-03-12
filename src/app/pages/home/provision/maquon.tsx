import React, { FormEvent, useState, ChangeEvent } from "react";
import axios from "axios";

const apiClient = axios.create({
  baseURL: "/api/v0/fuck",
  responseType: "json",
  headers: {
    "Content-Type": "application/json"
  }
});

enum Speed {
  "25M",
  "50M",
  "100M",
  "500M",
  "1000M"
}

export default function Maquon() {
  const [video, setVideo] = useState(false);
  const [ip, setIP] = useState("");
  const [speed, setSpeed] = useState(Speed["50M"]);
  const [shelf, setShelf] = useState("1");
  const [data, setData] = useState(true);
  const [slot, setSlot] = useState("1");
  const [pon, setPon] = useState("1");
  const [ont, setOnt] = useState("1");
  const [name, setName] = useState("");
  const [agreement, setAgreement] = useState("");
  const [crv, setCrv] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [crvPlaceholder, setCrvPlaceholder] = useState("");

  const handleChangeIP = (event: ChangeEvent<HTMLInputElement>) => {
    setIP(event.target.value);
  };

  const handleChangeShelf = (event: ChangeEvent<HTMLInputElement>) => {
    setShelf(event.target.value);
  };

  const handleChangeSlot = (event: ChangeEvent<HTMLInputElement>) => {
    setSlot(event.target.value);
  };

  const handleChangePon = (event: ChangeEvent<HTMLSelectElement>) => {
    setPon(event.target.value);
  };

  const handleChangeSpeed = (event: ChangeEvent<HTMLSelectElement>) => {
    const s: Speed = (Speed as any)[event.target.value];
    setSpeed(s);
  };

  const handleChangeOnt = (event: ChangeEvent<HTMLSelectElement>) => {
    setOnt(event.target.value);
  };

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeAgreement = (event: ChangeEvent<HTMLInputElement>) => {
    setAgreement(event.target.value);
  };

  const handleChangeCrv = (event: ChangeEvent<HTMLInputElement>) => {
    setCrv(event.target.value);
  };

  const handleChangeVideo = (event: ChangeEvent<HTMLInputElement>) => {
    setVideo(event.target.checked);
  };

  const handleChangeData = (event: ChangeEvent<HTMLInputElement>) => {
    setData(event.target.checked);
  };

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(pon, ont, name, agreement, crv);
      setSubmitting(true);
      const response = await apiClient.post(
        "/buildAOE",
        JSON.stringify({
          ip,
          shelf,
          slot,
          pon,
          ont,
          name,
          agreement,
          crv,
          video,
          data,
          speed
        })
      );
      console.log(response);
      setCrv("");
      setAgreement("");
      setName("");
      setOnt((parseInt(ont) + 1).toString());
      setVideo(false);
      setData(true);
      setSpeed(Speed["50M"]);
      setCrvPlaceholder((parseInt(crv) + 1).toString());
      setSubmitting(false);
    } catch (err) {
      console.log(err);
      setSubmitting(false);
    }
  };

  return (
    <div className="kt-portlet">
      <div className="kt-portlet__body kt-portlet__body--fit">
        <div className="row">
          <div className="col-md-6">
            <div className="kt-portlet">
              <div className="kt-portlet__head">
                <div className="kt-portlet__head-label">
                  <h3 className="kt-portlet__head-title">
                    Provision Maquon Test
                  </h3>
                </div>
              </div>
              <form
                className="kt-form"
                onSubmit={e => {
                  submitForm(e);
                }}
              >
                <div className="kt-portlet__body">
                  <div className="form-group form-group-last">
                    <div className="alert alert-secondary" role="alert">
                      <div className="alert-icon">
                        <i className="flaticon-warning kt-font-brand"></i>
                      </div>
                      <div className="alert-text">
                        This is just a test. If it doesn't work, don't come
                        crying to Ron like a baby. Fix it yourself.
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-3">
                      <label>IP Address</label>
                      <input
                        type="text"
                        className="form-control"
                        name="ip"
                        placeholder=""
                        autoComplete="off"
                        onChange={handleChangeIP}
                        value={ip}
                      />
                      <span className="form-text text-muted">
                        IP of the Node
                      </span>
                    </div>
                    <div className="form-group col-3">
                      <label>Shelf</label>
                      <input
                        type="text"
                        className="form-control"
                        name="shelf"
                        placeholder=""
                        autoComplete="off"
                        onChange={handleChangeShelf}
                        value={shelf}
                      />
                      <span className="form-text text-muted">
                        IP of the Node
                      </span>
                    </div>
                    <div className="form-group col-3">
                      <label>Slot</label>
                      <input
                        type="text"
                        className="form-control"
                        name="slot"
                        placeholder=""
                        autoComplete="off"
                        onChange={handleChangeSlot}
                        value={slot}
                      />
                      <span className="form-text text-muted">
                        This is their Card in the shelf.
                      </span>
                    </div>
                    <div className="form-group col-3">
                      <div
                        style={{ display: "flex" }}
                        className="row kt-switch kt-switch--sm"
                      >
                        <label
                          style={{ padding: "4.5px, 0" }}
                          className="col-4 col-form-label"
                        >
                          Data
                        </label>
                        <label className="col-4" />
                        <label className="col-4">
                          <input
                            checked={data}
                            type="checkbox"
                            onChange={handleChangeData}
                          />
                          <span />
                        </label>
                      </div>
                      <div
                        style={{ display: "flex" }}
                        className="row kt-switch kt-switch--sm"
                      >
                        <label
                          style={{ padding: "4.5px, 0" }}
                          className="col-form-label col-4"
                        >
                          Video
                        </label>
                        <label className="col-4" />
                        <label className="col-4">
                          <input
                            checked={video}
                            type="checkbox"
                            onChange={handleChangeVideo}
                          />
                          <span />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-4">
                      <label>Pon:</label>
                      <select
                        name="pon"
                        className="form-control"
                        id="exampleSelect1"
                        onChange={handleChangePon}
                        value={pon}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                      </select>
                    </div>
                    <div className="form-group col-4">
                      <label>ONT:</label>
                      <select
                        name="ont"
                        className="form-control"
                        id="exampleSelect1"
                        onChange={handleChangeOnt}
                        value={ont}
                      >
                        {(() => {
                          let render = [];
                          for (let i = 1; i <= 32; i++) {
                            render.push(<option>{i}</option>);
                          }
                          return render;
                        })()}
                      </select>
                    </div>
                    <div className="form-group col-4">
                      <label>CRV</label>
                      <input
                        type="text"
                        className="form-control"
                        name="crv"
                        placeholder={crvPlaceholder}
                        autoComplete="off"
                        onChange={handleChangeCrv}
                        value={crv}
                      />
                      <span className="form-text text-muted">
                        CRV ID. If you don't type anything in, this will not
                        provision phones.
                      </span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-4">
                      <label>Full Name</label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleChangeName}
                        className="form-control"
                        placeholder="Full name"
                        autoComplete="off"
                        value={name}
                      />
                      <span className="form-text text-muted">
                        Full customer name. Make this match iVUE.
                      </span>
                    </div>

                    <div className="form-group col-4">
                      <label>Agreement Number</label>
                      <input
                        type="text"
                        className="form-control"
                        name="agreement"
                        placeholder="___-___-____"
                        autoComplete="off"
                        onChange={handleChangeAgreement}
                        value={agreement}
                      />
                      <span className="form-text text-muted">
                        Full agreement number. Include the dashes!!!
                        111-111-1111
                      </span>
                    </div>
                    <div className="form-group col-4">
                      <label>Speed</label>
                      <select
                        name="speed"
                        className="form-control"
                        onChange={handleChangeSpeed}
                        disabled={!data}
                        value={Speed[speed]}
                      >
                        {(() => {
                          let render = [];
                          for (let i = 0; i <= 4; i++) {
                            render.push(<option>{Speed[i]}</option>);
                          }
                          return render;
                        })()}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="kt-portlet__foot">
                  <div className="kt-form__actions">
                    <div className="row">
                      <div className="col-9"></div>
                      <div className="col-3">
                        <button
                          type="submit"
                          disabled={submitting}
                          className="btn btn-success"
                        >
                          Submit
                        </button>
                        <button
                          type="reset"
                          disabled={submitting}
                          className="btn btn-secondary"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
