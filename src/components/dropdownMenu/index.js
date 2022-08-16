import * as React from "react";

const Menu = (props) => {
  const options = [
    { label: 2022, value: 2022 },
    { label: 2021, value: 2021 },
    { label: 2020, value: 2020 },
    { label: 2019, value: 2019 },
    { label: 2018, value: 2018 },
    { label: 2017, value: 2017 },
    { label: 2016, value: 2016 },
    { label: 2015, value: 2015 },
    { label: 2014, value: 2014 },
    { label: 2013, value: 2013 },
    { label: 2012, value: 2012 },
    { label: 2011, value: 2011 },
  ];

  const [value, setValue] = React.useState(2022);

  props.func(value);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Dropdown
        label="Please select a year "
        options={options}
        value={value}
        onChange={handleChange}
      />

      <h2>{value}</h2>
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

export default Menu;
