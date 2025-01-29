import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem,
  addItem: (item: MenuItem) => void
}

export default function MenuItem({item, addItem} : MenuItemProps) {
  return (
    <button
    className="border-2 border-orange-400 hover:bg-orange-200 w-full p-3 flex justify-between items-center rounded-xl bg-white bg-opacity-90 transition-all hover:scale-105 hover:shadow-lg"
    onClick={() => addItem(item)}
    >
    
    <div className="flex items-center gap-4">
      {item.image && (
        <img
          src={item.image}
          alt={item.name}
          className="w-8 h-8 object-cover rounded-lg"
        />
      )}
      <p className="text-lg font-semibold">{item.name}</p>
    </div>

    <p className="font-black text-lg">€{item.price}</p>
    </button>
  )
}
