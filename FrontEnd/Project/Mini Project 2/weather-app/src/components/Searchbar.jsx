import PropTypes from "prop-types";
import Button from "./Button";
import { useWeather } from "../context/Weather";
const Searchbar = ({ placeholder = "Search...", value, onChange }) => {
  const weather = useWeather();
  console.log("weather", weather);

  return (
    <>
      <div className=" my-5 flex flex-col max-w-xl container text-center mx-auto">
        <input
          className="text-center bg-sky-300"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          aria-label={placeholder}
        />
        <Button value="search" />
      </div>
    </>
  );
};

Searchbar.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Searchbar;
