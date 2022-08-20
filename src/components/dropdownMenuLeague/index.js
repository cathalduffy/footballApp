import * as React from "react";

const DropdownLeague = (props) => {
  const options = [
    { label: "Premier League", value: 39 },
    { label: "Championship", value: 40 },
    { label: "League One", value: 41 },
    { label: "League Two", value: 42 },
  ];

  const [value, setValue] = React.useState(39);

  props.func(value);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Dropdown
        label="Please select a league "
        options={options}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};

export default DropdownLeague;