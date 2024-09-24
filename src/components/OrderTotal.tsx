import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";
type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};

const OrderTotal = ({ order, tip, placeOrder }: OrderTotalsProps) => {
  const subTotal = useMemo(
    () =>
      order.reduce(
        (total: number, item: OrderItem) => total + item.quantity * item.price,
        0
      ),
    [order]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tipAmount = useMemo(() => subTotal * tip, [tip, order]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const totalAmount = useMemo(() => subTotal + tipAmount, [tip, order]);

  return (
    <>
      <div className=" space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina:</h2>
        <p>
          Subtotal a pagar:
          <span className="font-bold"> {formatCurrency(subTotal)}</span>
        </p>
        <p>
          Propina:{" "}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a pagar:{" "}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button
        className=" w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
        disabled={totalAmount === 0}
        onClick={() => placeOrder()}
      >
        Guardar orden
      </button>
    </>
  );
};

export default OrderTotal;
