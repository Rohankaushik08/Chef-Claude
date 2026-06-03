import "./page.css"
export default function Ingrediants(props){
    const ingredientsList = props.ingList.map((ing) => {
        return <li key={ing}>{ing}</li>;
    })
    return(
        <section>
                    <h2>Ingredients on hand:</h2>
                    <ul id="ingbox" aria-live="polite">{ingredientsList}</ul>
                    {props.ingList.length > 3 && <div className="get-recipe-container">
                        <div ref={props.ref} id="toScroll">
                            <h3>Ready for a recipe?</h3>
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button onClick={props.getReciepe}>Get a recipe</button>
                    </div>}
                </section>
    )
}