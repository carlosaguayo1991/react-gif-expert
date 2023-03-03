import { useState } from "react";
import  { AddCategory, GifGrid }  from './components/index';

export const GifExpertApp = () => {
  const [categories, setcategories] = useState(['One Punch']);

  const addCatergory = (newCategory) => {
      console.log(newCategory);
      if(categories.includes(newCategory)) return;
      setcategories([...categories,newCategory]);
      // setcategories( ['Hola Mundo']);
  }
  return (
    <>
        <h1>GitExpertApp</h1>
        <AddCategory 
          onNewCategory = { (value) => addCatergory(value)} 
        />
     
        {
          categories.map( category => 
            (
              <GifGrid key = {category}
              category = {category} />
            )
          )
        }
    </>
  )
}

// export default GifExpertApp
