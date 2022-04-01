import React, { useEffect } from "react";
import { useState } from "react";
import { Resizable } from "react-resizable";

const CustomResizeBox = ({ children, width, height, ...props }) => {

  const [style, setStyle] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
        setStyle({width, height});
  }, [width, height])

  const onResize = (e, { size }) => {
    const { width, height } = size;
    setStyle({
      ...style,
      width,
      height,
    });
  };

  return (
    <Resizable
      {...props}
      height={style.height}
      width={style.width}
      onResize={onResize}
    >
      <div
        className="box"
        style={{ width: style.width + "px", height: style.height + "px" }}
      >
        <span>{children}</span>
      </div>
    </Resizable>
  );
};

export default CustomResizeBox;
