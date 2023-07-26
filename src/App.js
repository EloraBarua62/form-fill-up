// Imported files
import { useState } from 'react';
import './App.css';

function App() {

  const [category , setCategory] = useState([]);

  const handleAdd = () => {
    const previous = [...category , []];
    setCategory(previous);
  }
  return (
    <div className="App">
      
      
      {/* Form */}
      <h1 className="text-2xl font-bold text-green-500">Form fillup</h1>

      {category.map((data , index) => {
        return (
          <input className='bg-green-100 border-[1px] border-green-500' onChange={ e => e.handleNewCategory(e,index)} type="text" />
        )

      })}

    {/* Add new category */}
      <button onClick={() => handleAdd()} className='bg-green-500'>Add New Category</button>
    </div>
  );
}

export default App;
