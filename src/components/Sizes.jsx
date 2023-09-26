// Icons
import Chevron from "../icons/chevron";

// Components
import Size from "./Size";

//Hooks
import { useState } from "react";

//Redux

import { useDispatch, useSelector } from "react-redux";
import { sizeActions } from "../redux/slices/sizeSlice";

// Styles
const styles = {
  btn: "flex justify-between items-center py-4 w-full",
  icon: "duration-100 w-4 h-4",
  ul: "flex flex-wrap gap-2",
};

const sizeData = [
  {
    id: 1,
    title: "Extra Small",
    name: "xs",
  },
  {
    id: 2,
    title: "Small",
    name: "s",
  },
  {
    id: 3,
    title: "Medium",
    name: "m",
  },
  {
    id: 4,
    title: "Large",
    name: "l",
  },
  {
    id: 5,
    title: "Extra Large",
    name: "xl",
  },
];
const Colors = () => {
  const [showSize, setShowSize] = useState(false);
  const dispatch = useDispatch();

  const sizeState = useSelector((state) => state.size);

  const toggleSize = () => {
    setShowSize(!showSize);
  };

  const setSize = (size) => {
    dispatch(sizeActions.addsize(size));
  };

  return (
    <div>
      <button onClick={toggleSize} className={styles.btn}>
        <span className="font-bold">Size</span>
        <div>
          <Chevron
            className={`${styles.icon} ${!showSize && "rotate-180"}`}
            color="black"
          />
        </div>
      </button>
      {showSize && (
        <ul className={styles.ul}>
          {sizeData.map((size) => (
            <Size
              click={() => {
                setSize(size.name);
              }}
              key={size.id}
              title={size.title}
              selected={sizeState.includes(size.name)}
            >
              {size.name}
            </Size>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Colors;
