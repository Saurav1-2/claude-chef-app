import { useState } from "react"

export default function MainContent()
{
    const [ingridents,setIngridients] = useState([])

    const ingridentsAtHand = ingridents.map((ingredient)=>
    {
        return <li key={ingredient}>{ingredient}</li>
    })

    function handleFormSubmit(event)
    {
       event.preventDefault()
       const formData = new FormData(event.currentTarget)
       const newIngridient = formData.get("ingridient")
       setIngridients((prevIngridients)=>[...prevIngridients,newIngridient])

    }

    return (
        <main className="content">
            <form action="" className="add-ingridient-form" onSubmit={handleFormSubmit}>
                <input 
                type="text"
                placeholder="e.g. oregano" 
                aria-label="Add ingredient"
                className="input"
                name="ingridient"
                />
                <button className="button" ><i class="bi bi-plus"></i>Add ingredient</button>
            </form>
            <ul>
                {ingridentsAtHand}
            </ul>
        </main>
    )
}