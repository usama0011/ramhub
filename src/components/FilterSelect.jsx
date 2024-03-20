import Select from "react-select";
import { products } from "../utils/products";

const options = [
  { value: "sofa", label: "Double A" },
  { value: "chair", label: "BLC" },
  { value: "watch", label: "City Supreme" },
  { value: "mobile", label: "Paper One" },
  { value: "wireless", label: "City plus" },
  { value: "wireless", label: "Aria" },
  { value: "wireless", label: "Gifto" },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#0f3460",
    color: "white",
    borderRadius: "5px",
    border: "none",
    boxShadow: "none",
    width: "200px",
    height: "40px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#0f3460" : "white",
    color: state.isSelected ? "white" : "#0f3460",
    "&:hover": {
      backgroundColor: "#0f3460",
      color: "white",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
  }),
};

const FilterSelect = ({ setFilterList }) => {
  const handleChange = (selectedOption) => {
    setFilterList(
      products.filter((item) => item.category === selectedOption.value)
    );
  };
  return (
    <Select
      options={options}
      defaultValue={{ value: "", label: "Filter By Category" }}
      styles={customStyles}
      onChange={handleChange}
    />
  );
};

export default FilterSelect;
