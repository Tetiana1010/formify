import { useState } from "react";

const Items = () => {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [rate, setRate] = useState(0);

  const getNumber = (value) => {

    let number = '';
    let foundNonZiro = false;

    for(let i = 0; i < value.length; i++){
      if (value[i] !== '0' || foundNonZiro){
        number += value[i];
        foundNonZiro = true;
      }
    };
    return number || "0";
  };

  console.log(description)
  return (
    <div className="pt-4 w-full">
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-blue-700 text-white">
            <th className="py-1 px-4 w-2/6">Item</th>
            <th className="py-1 px-4 w-1/6">Quantity</th>
            <th className="py-1 px-4 w-1/6">Rate</th>
            <th className="py-1 px-4 w-1/6">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-1">
              <textarea 
                placeholder="Description of service or product..."
                value={description}
                onChange={e => setDescription(e.target.value)}
                required
              />
            </td>
            <td className="p-1">
              <input
                type="number"
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}
                min={1} 
                placeholder="1" 
                step="any" 
                autoComplete="off" 
                required
              />
            </td>
            <td className="p-1">
              <input
                type="number"
                min={0}
                placeholder="1"
                step="any"
                autoComplete="off"
                required
                inputMode="numeric"
                value={rate}
                onChange={(e) => setRate(getNumber(e.target.value))}
              />
            </td>
            <td className="p-1 text-end">
              $ {rate}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};

export default Items;