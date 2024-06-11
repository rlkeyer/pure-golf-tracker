import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import "./Container.scss";
import { Counter } from "./Counter";

export const Container = () => {
  const [club, setClub] = useState<string>();

  const clubMap: { [key: string]: string } = {
    w1: "Driver",
    w3: "3 Wood",
    w5: "5 Wood",
    w7: "7 Wood",
    h3: "3 Hybrid",
    h4: "4 Hybrid",
    h5: "5 Hybrid",
    i3: "3 Iron",
    i4: "4 Iron",
    i5: "5 Iron",
    i6: "6 Iron",
    i7: "7 Iron",
    i8: "8 Iron",
    i9: "9 Iron",
    wp: "Pitching Wedge",
    wa: "Approach Wedge",
    wg: "Gap Wedge",
    ws: "Sand Wedge",
    wl: "Lob Wedge",
  };

  const handleChangeClub = (event: SelectChangeEvent<unknown>) => {
    console.log(club);
    setClub(event.target.value as string);
  };

  return (
    <div className="Container">
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="club-select-label">Club</InputLabel>
        <Select
          labelId="club-select-label"
          id="demo-simple-select"
          value={club}
          label="Club"
          onChange={handleChangeClub}
        >
          {Object.keys(clubMap).map((club) => (
            <MenuItem value={club}>{clubMap[club]}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Counter />
    </div>
  );
};
