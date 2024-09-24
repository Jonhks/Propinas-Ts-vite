import MenuItems from "./components/MenuItems";
import OrderContents from "./components/OrderContents";
import OrderTotal from "./components/OrderTotal";
import TipPercent from "./components/TipPercent";
import { menuItems } from "./data/db";
import { useOrder } from "./hooks/useOrder";

const App = () => {
  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder();
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className=" text-center text-4xl font-black">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className=" p-5">
          <h2 className="text-4xl font-black">Menú</h2>
          <div className=" space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItems
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>
        <div className=" border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length > 0 ? (
            <>
              <OrderContents
                order={order}
                removeItem={removeItem}
              />

              <TipPercent
                setTip={setTip}
                tip={tip}
              />

              <OrderTotal
                order={order}
                tip={tip}
                placeOrder={placeOrder}
              />
            </>
          ) : (
            <p className="text-center">La orden esta vacia </p>
          )}
        </div>
      </main>
    </>
  );
};

export default App;
