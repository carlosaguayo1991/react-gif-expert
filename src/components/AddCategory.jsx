import { useState } from "react";

export  function AddCategory( {onNewCategory} ) {
  const [inputValue, setinputValue] = useState("");

  const onInputChange = ({ target }) => {
    console.log(target.value);
    setinputValue(target.value);
  };

  const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return; 
        // setCategories( categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setinputValue('');
  };

  return (
    <form onSubmit={ (event) => onSubmit(event) }>
      <input
        type="text"
        placeholder="buscar gift"
        value={inputValue}
        onChange={onInputChange}
      ></input>
    </form>
  );
}
