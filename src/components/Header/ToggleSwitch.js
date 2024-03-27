import { useState } from "react";
import { useTheme, useThemeUpdate } from "../../context/themeContext";
import { Input, Label, Switch } from "./styled";

const ToggleSwitch = () => {
  const [checked, setChecked] = useState(false);
  const theme = useTheme();
  const { setTheme } = useThemeUpdate();

  const handleChange = (e) => {
    setChecked(e.target.checked);
    setTheme(e.target.checked ? 1 : 0);
  };

  return (
    <Label theme={theme}>
      <span>{checked ? "Light" : "Dark"} Mode</span>
      <Input checked={checked} type="checkbox" onChange={handleChange} />
      <Switch />
    </Label>
  );
};

export default ToggleSwitch;
