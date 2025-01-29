import type { Dispatch, SetStateAction } from "react"

const tipOptions = [
    {
        id: 'tip-0',
        value: 0,
        label: 'No propina'
    },
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>,
    tip: number
}

export default function TipPercentageForm({ setTip, tip }: TipPercentageFormProps) {
    return (
        <div>
            <h3 className="font-black text-2xl">Propina:</h3>

            <form className="flex gap-2 mt-4 flex-wrap">
                {tipOptions.map(tipOption => (
                    <button
                        key={tipOption.id}
                        type="button"
                        onClick={() => setTip(tipOption.value)}
                        className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                            tip === tipOption.value
                                ? 'bg-orange-500 text-white' 
                                : 'bg-orange-200 text-orange-800 hover:bg-orange-300' 
                        }`}
                    >
                        {tipOption.label}
                    </button>
                ))}
            </form>
        </div>
    )
}