import "./page.css"
import ReactMarkdown from 'react-markdown'
export default function ClaudeReciepe({recipe}){
    return(
        <fieldset>
            <legend>Suggested Reciepe</legend>
        <section className="suggested-recipe-container">
                <ReactMarkdown>{recipe}</ReactMarkdown>
        </section>
        </fieldset>
    )
}