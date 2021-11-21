import React from "react";
import { Provider } from "react-redux";
import { store } from "../../store";

interface Props {}

const index = (props: Props) => {
  return (
    <div>
      <Provider store={store} />

      <div></div>
    </div>
  );
};

export default index;
