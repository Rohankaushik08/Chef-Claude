import "./page.css"
import ReactMarkdown from 'react-markdown'
export default function ClaudeReciepe(props){
    return(
        <fieldset >
            <legend>Suggested Reciepe</legend>
        <section className="suggested-recipe-container">
                <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
        </fieldset>
    )
}