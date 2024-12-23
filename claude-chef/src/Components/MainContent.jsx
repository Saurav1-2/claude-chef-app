import { useState,useRef,useEffect } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from "../ai"
export default function MainContent()
{
    const [ingridents,setIngredients] = useState([])

    const [recipe,setRecipe] = useState("")

    const recipeSection  = useRef(null)
    
    useEffect(()=>{
        if(recipe!=="" && recipeSection.current!==null)
        {
            recipeSection.current.scrollIntoView({behavior:"smooth"})
        }
    },[recipe])

    function addIngredient(formData)
    {
       const ingredient = formData.get("ingredient")
       setIngredients((prevIngredients)=>
       
            [...prevIngredients,ingredient]
       )

    }

    async function getRecipe()
    {
      const recipeMarkdown =  await getRecipeFromMistral(ingridents)

      
      setRecipe(recipeMarkdown)
      
    }

    

    return (
        <main className="content">
            <form action={addIngredient} className="add-ingridient-form">
                <input 
                
                type="text"
                placeholder="e.g. oregano" 
                aria-label="Add ingredient"
                className="input"
                name="ingredient"
                />
                <button className="button" ><i class="bi bi-plus"></i>Add ingredient</button>
            </form>
            {

            ingridents.length > 0 &&
             <IngredientsList ingredients = {ingridents} getRecipe = {getRecipe} ref={recipeSection}/>
            }
            {
                recipe &&
                <ClaudeRecipe recipe={recipe}/>
            }

        </main>
    )
}