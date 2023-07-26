// Imported files
import { useRef, useState } from 'react';
import './App.css';
import DragOptions from './DragOptions/DragOptions';

function App() {
  // Category functionality
  const [category, setCategory] = useState([]);


  // Item functionality
  const [item, setItem] = useState([]);
  const [singleChoice, setSingleChoice] = useState([]);
  const [multipleChoice, setMultipleChoice] = useState([]);

  console.log(category);

  return (
    <div className="App">
      {/* Form */}
      <h1 className="text-2xl font-bold text-green-500">Form fillup</h1>

      {/* Category section */}
      <input
        type="text"
        name="question"
        placeholder="Question"
        className="bg-teal-100"
      />

      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        <DragOptions
          category={category}
          setCategory={setCategory}
          addNew={"Add New Category"}
        />
        <DragOptions
          category={item}
          setCategory={setItem}
          addNew={"Add New Item"}
        />
      </div>

      {/* Comprehensive */}
      <div>
        <div>
          <select name="question_type" id="">
            <option value="single_choice">Choose the best answer</option>
            <option value="multiple_choice">Select multiple answers</option>
          </select>

          <input
            type="text"
            name="question"
            placeholder="Question"
            className="bg-teal-100"
          />

          <DragOptions
            category={singleChoice}
            setCategory={setSingleChoice}
            addNew={"Add More Options"}
          />
        </div>
        <div>
          <select name="question_type" id="">
            <option value="single_choice">Choose the best answer</option>
            <option value="multiple_choice">Select multiple answers</option>
          </select>

          <input
            type="text"
            name="question"
            placeholder="Question"
            className="bg-teal-100"
          />

          <DragOptions
            category={multipleChoice}
            setCategory={setMultipleChoice}
            addNew={"Add More Options"}
          />
        </div>
        <div>
          <input
            type="text"
            name="question"
            placeholder="Question"
            className="bg-teal-100"
          />
          <h1>Max word:100 , Min word: 60</h1>
        
        </div>
      </div>
    </div>
  );
}

export default App;
