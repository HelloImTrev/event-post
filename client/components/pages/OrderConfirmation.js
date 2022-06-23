import React from "react";
import { connect, useSelector } from "react-redux";

export const OrderConfirmation = () => {
  const user = useSelector((state) => state.auth);

  return (
    <div>
      <h2>{`Your order was sent to ${user.email || user.username}`}</h2>
    </div>
  );
};

export default connect(null)(OrderConfirmation);
