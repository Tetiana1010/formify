import { useState } from "react";
import Item from "./Item";

const initialItemValue = {
  productName: '',
  quantity: 1,
  rate: 0,
  description: '',
}

const Items = () => {
  const [item, setItem] = useState(initialItemValue);

  const [items, setItems] = useState([item]);

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
  
    setItems(prevItems => {
      const updatedItems = [...prevItems];
      updatedItems[index] = {
        ...updatedItems[index],
        [name]: name === 'rate' ? getNumber(value) : value
      };
      return updatedItems;
    });
  };
  
  const getNumber = (value) => {
    let number = '';
    let foundNonZero = false;
  
    for(let i = 0; i < value.length; i++){
      if (value[i] !== '0' || foundNonZero){
        number += value[i];
        foundNonZero = true;
      }
    };
    return number || "0";
  };
  
  const addItem = () => {
    setItems(prevItems => [...prevItems, item]);
    setItem(initialItemValue);
  };

  const deleteItem = (index) => {
    setItems(prevState => {
      const updatedItems = [...prevState];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  };

  return (
    <div>
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
            {
              items.map((item, index) => (
                <Item 
                  key={index}
                  productName={item.productName}
                  quantity={item.quantity}
                  rate={item.rate}
                  description={item.description}
                  handleItemChange={(e) => handleItemChange(index, e)}
                  deleteItem={(e) => deleteItem(index, e)}
                />
              ))
            }
          </tbody>
        </table>
      </div>
      <div>
        <button
          onClick={addItem}
          className="bg-blue-700 text-white rounded-md p-2 mt-2">
          Add new invoice item
        </button>
      </div>
    </div>
  );
};

export default Items;
