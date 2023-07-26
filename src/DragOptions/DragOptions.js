import React, { useRef } from 'react';

const DragOptions = ({category, setCategory , addNew}) => {

    // Category functionality
//   const [category, setCategory] = useState([]);

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
    return (
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
            {addNew}
          </button>
        </div>
    );
};

export default DragOptions;