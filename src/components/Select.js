import React from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

class RenderSelect extends React.Component {
  state = {
    selectedOption: null,
  };

  handleChange = (selectedOption) => {
    this.setState(() => ({
      selectedOption: selectedOption,
    }));
    console.log(selectedOption);
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}

export default RenderSelect;
