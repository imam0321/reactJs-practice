import React from "react";

export default function Field({ label, children, htmlFor, error }) {
  const id = htmlFor || getChildrenId(children);
  return (
    <div>
      {label && (
        <label
          className="flex flex-col items-start justify-start p-0 w-full my-2 text-md font-semibold"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      {children}
      {!!error && <div className="text-red-500">{error.message}</div>}
    </div>
  );
}

const getChildrenId = (children) => {
  const child = React.Children.only(children);

  if ("id" in child?.props) {
    return child?.props?.id;
  }
};
