import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

interface Props {}

const Step1 = (props: Props) => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const base = useSelector((state) => state.base);

  return <div></div>;
};

export default Step1;
