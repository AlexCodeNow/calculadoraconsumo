import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import { GiFoodTruck } from "react-icons/gi";


function App() {

  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder()

  return (
    <>
    <div className="bg-[url('/cool-background2.png')] bg-cover bg-center min-h-screen">
    <header className="bg-gradient-to-r from-orange-400 to-red-400 py-5 shadow-xl">
    <div className="flex items-center justify-center gap-2">
    <GiFoodTruck className="w-16 h-16" />
    <div>
      <h1 className="text-center text-4xl font-black text-white">Calculadora de Consumo</h1>
      <p className="text-center text-white mt-2">Calcula tu consumo y propina de manera fácil</p>
    </div>
  </div>
</header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2" >
        <div className="p-5">

          <h2 className="text-4xl font-black text-gray-800">Menú</h2>
          

          <div className="space-y-3 mt-10 ">
            {menuItems.map(item => (
              <MenuItem 
              key={item.id}
              item={item}
              addItem={addItem}
              />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-orange-300 p-5 rounded-xl space-y-10 bg-white bg-opacity-90 shadow-lg">
          {order.length ? (
            <>
              <OrderContents
                order={order}
                removeItem={removeItem}
              />
              <TipPercentageForm
                setTip={setTip}
                tip={tip}
              />
              <OrderTotals 
                order={order}
                tip={tip}
                placeOrder={placeOrder}
              />
            </>
          ) : (
            <p className="text-center text-gray-600">La orden esta vacía</p>
          )}
        </div>
      </main>
      <footer className="bg-gradient-to-r from-orange-400 to-red-400 py-4 mt-10 shadow-xl">
        <p className="text-center font-black text-white">¡Gracias por usar nuestra calculadora de consumo!</p>
      </footer>
      </div>
    </>
  )
}

export default App
