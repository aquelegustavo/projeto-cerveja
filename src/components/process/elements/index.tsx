import React from "react";

type ElementProps = {
  id: string;
  className?: string;
  width: string;
  height: string;
  transform?: string;
  data: string;
};

function Element({
  id,
  className,
  width,
  height,
  transform,
  data,
}: ElementProps) {
  return (
    <image
      id={id}
      className={className}
      width={width}
      height={height}
      transform={transform}
      xlinkHref={data}
    />
  );
}

export default Element;
