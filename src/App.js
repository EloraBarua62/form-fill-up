// Imported files
import { useState } from 'react';
import './App.css';
import DragOptions from './DragOptions/DragOptions';

function App() {
  // Category functionality
  const [category, setCategory] = useState([]);


  // Item functionality
  const [item, setItem] = useState([]);
  const [singleChoice, setSingleChoice] = useState([]);
  const [multipleChoice, setMultipleChoice] = useState([]);
  const [cloze, setCloze] = useState([]);

  console.log(category);

  const handleForm = event => {
    event.preventDefault();
    const category_question = event.target.category_question.value;
    const comprehensive_question_type_single = event.target.comprehensive_question_type_single.value;
    const comprehensive_question_type_multiple = event.target.comprehensive_question_type_multiple.value;
    const comprehensive_question_one = event.target.comprehensive_question_one.value;
    const comprehensive_question_two= event.target.comprehensive_question_two.value;
    const comprehensive_question_three = event.target.comprehensive_question_three.value;
    const fill_gap = event.target.fill_gap.value;


    const formdata = {
      category_question,
      category,
      item,
      comprehensive_question_type_single,
      comprehensive_question_one,
      singleChoice,
      comprehensive_question_type_multiple,
      comprehensive_question_two,
      multipleChoice,
      comprehensive_question_three,
      fill_gap,
      cloze
    };


    const url = "http://localhost:5000/api/v1/formdata";

    fetch(url , {
      method: "POST",
      headers:{
        "content-type": "application/json",
      },
      body: JSON.stringify(formdata)
    })
    .then(data => data.json())
    .then(data => console.log(data))
  }

  return (
    <div className="App">
      {/* Form */}
      <h1 className="text-2xl font-bold text-green-500">Form fillup</h1>

      {/* Category section */}
      <form onSubmit={handleForm}>
        <div className="m-5 p-5 border-2 border-green-200">
          <h1 className="text-2xl font-medium font-blue">Category Question</h1>
          <input
            type="text"
            name="category_question"
            placeholder="Question"
            className="bg-teal-50 p-1"
          />

          <div className="w-full grid grid-cols-2">
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
        </div>

        {/* Comprehensive */}
        <div className="m-5 p-5 border-2 border-green-200">
          <h1 className="text-2xl font-medium font-blue">
            Comprehensive Section
          </h1>

          {/* comprehensive question one*/}
          <div className="border-[1px] m-2 border-green-200 p-2 flex flex-col gap-3">
            {/* choose MCQ type */}
            <select name="comprehensive_question_type_single" id="">
              <option value="single_choice">Choose the best answer</option>
              <option value="multiple_choice">Select multiple answers</option>
            </select>

            {/* comprehensive question */}
            <input
              type="text"
              name="comprehensive_question_one"
              placeholder="Question"
              className="bg-teal-50 p-1 "
            />

            {/* options */}
            <DragOptions
              category={singleChoice}
              setCategory={setSingleChoice}
              addNew={"Add More Options"}
            />
          </div>

          {/* comprehensive question two*/}
          <div className="border-[1px] m-2 border-green-200 p-2 flex flex-col gap-3">
            {/* choose MCQ type */}
            <select name="comprehensive_question_type_multiple" id="">
              <option value="single_choice">Choose the best answer</option>
              <option value="multiple_choice">Select multiple answers</option>
            </select>

            {/* comprehensive question */}
            <input
              type="text"
              name="comprehensive_question_two"
              placeholder="Question"
              className="bg-teal-50 p-1"
            />

            {/* options */}
            <DragOptions
              category={multipleChoice}
              setCategory={setMultipleChoice}
              addNew={"Add More Options"}
            />
          </div>

          {/* comprehensive question three*/}
          <div className="border-[1px] m-2 border-green-200 p-2 flex flex-col gap-3">
            <h1>Enter question</h1>
            <input
              type="text"
              name="comprehensive_question_three"
              placeholder="Question"
              className="bg-teal-50 p-1"
            />
          </div>
        </div>

        {/* Cloze */}
        <div className="m-5 p-5 border-2 border-green-200">
          <h1 className="text-2xl font-medium font-blue">Cloze Section</h1>
          <textarea
            name="fill_gap"
            id=""
            cols="40"
            rows="10"
            className="border-[1px] m-2 border-green-200 p-2"
            placeholder="Write Paragraph For Fill Gaps"
          ></textarea>

          <h1>Make Suitable Options For Fill Gaps</h1>
          <DragOptions
            category={cloze}
            setCategory={setCloze}
            addNew={"Make Gaps"}
          />
        </div>

        <input type="submit" value="Submit" className="bg-blue-400 p-2" />
      </form>
    </div>
  );
}

export default App;
