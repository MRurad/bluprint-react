// Icons
import Chevron from "../icons/chevron";

// Components
import Color from "./Color";

//Hooks
import { useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { colorActions } from "../redux/slices/colorSlice";

// Styles
const styles = {
  btn: "flex justify-between items-center py-4 w-full",
  icon: "duration-100 w-4 h-4",
  ul: "flex flex-wrap gap-2 pb-4",
};

const colorsData = [
  {
    id: 1,
    color: "bg-black",
    title: "Black",
  },
  {
    id: 2,
    color: "bg-white",
    title: "White",
  },
  {
    id: 3,
    color: "bg-red-500",
    title: "Red",
  },
  {
    id: 4,
    color: "bg-orange-500",
    title: "Orange",
  },
  {
    id: 5,
    color: "bg-green-500",
    title: "Green",
  },
  {
    id: 6,
    color: "bg-blue-500",
    title: "Blue",
  },
];

const Colors = () => {
  const [showColor, setShowColor] = useState(false);
  const dispatch = useDispatch();

  const colorsState = useSelector((state) => state.color);

  const toggleColor = () => {
    setShowColor(!showColor);
  };

  const setColor = (color) => {
    dispatch(colorActions.addcolor(color));
  };

  return (
    <div className="border-b">
      <button onClick={toggleColor} className={styles.btn}>
        <span className="font-bold">Color</span>
        <div>
          <Chevron
            className={`${styles.icon} ${!showColor && "rotate-180"}`}
            color="black"
          />
        </div>
      </button>
      {showColor && (
        <ul className={styles.ul}>
          {colorsData.map((color) => (
            <Color
              selected={colorsState.includes(color.title)}
              click={() => setColor(color.title)}
              key={color.id}
              color={color.color}
              title={color.title}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Colors;
