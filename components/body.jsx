import "./page.css"
import React from 'react'
import ClaudeReciepe from "./ClaudeReciepe";
import Ingrediants from "./IngredientList";
import { getRecipeFromMistral } from "../ai";
export default function Body() {
    const [ingredients, setIngrediants] = React.useState([]);
    
    console.log(ingredients);
    function OnSubmit(formData) {
        const New_ing = formData.get("ing");
        setIngrediants((prev) => {
            return [...prev, New_ing];
        })
    }
    const [recipeShown, setRecipeShown] = React.useState(false);
    const [recipe,setRecipe] = React.useState("");
    async function getReciepe(){
        setRecipeShown(true);

        try {
            const rec = await getRecipeFromMistral(ingredients);
            setRecipe(rec)
        }catch{
            setRecipe("Failed To Fetch")
        }
    }
    return (
        <div id="box">
            <div id="MainBox">
                <div id="sbmtbox">
                    <form action={OnSubmit}>
                        <input type="text" name="ing" placeholder="e.g. Onion" id="inpt"></input>
                        <button id="sbmt">+Add Ingredient</button>
                    </form>
                </div>
                {ingredients.length > 0 && <Ingrediants ingList={ingredients} getReciepe={getReciepe}/>}
                {recipeShown && <ClaudeReciepe recipe={recipe}/>}
            </div>
        </div>
    )
}