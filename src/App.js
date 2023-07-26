// Imported files
import { useRef, useState } from 'react';
import './App.css';

function App() {
  // Category functionality
  const [category, setCategory] = useState([]);

  const handleNewCategory = (categoryInfo, index) => {
    const allCategory = [...category];
    allCategory[index] = categoryInfo.target.value;
    setCategory(allCategory);
  };

  const handleAddCategory = () => {
    const previous = [...category, []];
    setCategory(previous);
  };

  const handleDeleteCategory = (index) => {
    const previous = [...category];
    previous.splice(index, 1);
    setCategory(previous);
  };

  // Item functionality
  const [item, setItem] = useState([]);

  const handleNewItem = (itemInfo, index) => {
    const allItem = [...item];
    allItem[index] = itemInfo.target.value;
    setItem(allItem);
  };

  const handleAddItem = () => {
    const previous = [...item, []];
    setItem(previous);
  };

  const handleDeleteItem = (index) => {
    const previous = [...item];
    previous.splice(index, 1);
    setItem(previous);
  };

  
  
  // reference of dragedItem, dragOverItem
  const dragedItem = useRef(null);
  const dragOverItem = useRef(null);

  // senchronize Item
  const handleOrderItem = () => {
    let allItem = [...item];
    const dragedItemContent = allItem.splice(
      dragedItem.current,
      1
    )[0];
    allItem.splice(dragOverItem.current, 0, dragedItemContent);

    // reset position
    dragedItem.current = null;
    dragOverItem.current = null;
    setItem(allItem);
  };

  // reference of dragedCategory, dragOverCategory
  const dragedCategory = useRef(null);
  const dragOverCategory = useRef(null);

  // senchronize category
  const handleOrderCategory = () => {
    let allCategory = [...category];
    const dragedCategoryContent = allCategory.splice(
      dragedCategory.current,
      1
    )[0];
    allCategory.splice(dragOverCategory.current, 0, dragedCategoryContent);

    // reset position
    dragedCategory.current = null;
    dragOverCategory.current = null;
    setCategory(allCategory);
  };

  console.log(category);

  return (
    <div className="App">
      {/* Form */}
      <h1 className="text-2xl font-bold text-green-500">Form fillup</h1>

      <input type="text" name="question" placeholder='Question' className='bg-teal-100'/>

      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        <div>
          {/* Category selection */}
          {category.map((data, index) => (
            <div key={index}>
              <div
                onDragStart={(e) => (dragedCategory.current = index)}
                onDragEnter={(e) => (dragOverCategory.current = index)}
                onDragEnd={handleOrderCategory}
                onDragOver={(e) => e.preventDefault()}
                draggable
              >
                <input
                  className="bg-green-100 border-[1px] border-green-500"
                  onChange={(e) => handleNewCategory(e, index)}
                  value={data}
                  type="text"
                />
                <button onClick={(e) => handleDeleteCategory(index)}>X</button>
              </div>
            </div>
          ))}

          {/* Add new category */}
          <button
            onClick={() => handleAddCategory()}
            className="p-2 rounded-md bg-green-500 text-white font-medium"
          >
            Add New Category
          </button>
        </div>

        <div>
          {/* Item selection */}
          {item.map((data, index) => (
            <div key={index}>
              <div
                onDragStart={(e) => (dragedItem.current = index)}
                onDragEnter={(e) => (dragOverItem.current = index)}
                onDragEnd={handleOrderItem}
                onDragOver={(e) => e.preventDefault()}
                draggable
              >
                <input
                  className="bg-blue-100 border-[1px] border-blue-500"
                  onChange={(e) => handleNewItem(e, index)}
                  value={data}
                  type="text"
                />
                <button onClick={(e) => handleDeleteItem(index)}>X</button>
              </div>
            </div>
          ))}

          {/* Add new category */}
          <button
            onClick={() => handleAddItem()}
            className="p-2 rounded-md bg-blue-500 text-white font-medium"
          >
            Add More Items
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
