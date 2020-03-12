import React, { useState } from "react";
import Select, { OptionsType } from "react-select";
import { makeStyles, NoSsr, useTheme } from "@material-ui/core";

const useStyles = makeStyles((/*theme*/) => ({
  root: {
    "& div": {
      borderColor: "#e2e5ec",
      "&:hover": {
        borderColor: "#e2e5ec"
      },
      borderRadius: "4px",
      "& div div": {
        fontSize: "1rem",
        lineHeight: "1.5",
        fontWeight: "400",
        color: "#495057"
      }
    }
  }
}));

enum Platform {
  Calix,
  Adtran
}

interface region {
  label: string;
  platform: Platform;
}

const regions: region[] = [
  { label: "Altona", platform: Platform.Adtran },
  { label: "Bishop Hill", platform: Platform.Adtran },
  { label: "Brimfield", platform: Platform.Calix },
  { label: "Bryant", platform: Platform.Calix },
  { label: "Canton", platform: Platform.Adtran },
  { label: "Dunfermline", platform: Platform.Calix },
  { label: "Ellisville", platform: Platform.Adtran },
  { label: "Elmwood", platform: Platform.Adtran },
  { label: "Fairview", platform: Platform.Adtran },
  { label: "Farmington", platform: Platform.Calix },
  { label: "Gilson", platform: Platform.Adtran },
  { label: "Knoxville", platform: Platform.Calix },
  { label: "La Fayette", platform: Platform.Adtran },
  { label: "Lewiston", platform: Platform.Calix },
  { label: "Maquon", platform: Platform.Adtran },
  { label: "Marietta", platform: Platform.Adtran },
  { label: "Oak Run", platform: Platform.Adtran },
  { label: "Princeville", platform: Platform.Calix },
  { label: "Smithfield", platform: Platform.Adtran },
  { label: "Summum", platform: Platform.Adtran },
  { label: "Table Grove", platform: Platform.Adtran },
  { label: "Victoria", platform: Platform.Adtran },
  { label: "Williamsfield", platform: Platform.Adtran },
  { label: "Yates City", platform: Platform.Adtran }
];

const options: OptionsType<{ value: string; label: string }> = regions.map(
  region => ({
    value: region.label,
    label: region.label
  })
);

export default function RegionSelect() {
  const classes = useStyles();
  const theme = useTheme();
  const [single, setSingle] = useState(options[0]);

  function handleChangeSingle(value: any) {
    setSingle(value);
  }

  const selectStyles = {
    input: (base: any) => ({
      ...base,
      color: theme.palette.text.primary,
      "& input": {
        font: "inherit"
      }
    })
  };

  return (
    <div className={classes.root}>
      <NoSsr>
        <Select
          classes={classes}
          styles={selectStyles}
          TextFieldProps={{
            label: "Region",
            InputLabelProps: {},
            placeholder: "Search a region"
          }}
          value={single}
          options={options}
          onChange={handleChangeSingle}
        />
      </NoSsr>
    </div>
  );
}
