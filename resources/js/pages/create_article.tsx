import { router } from "@inertiajs/react"
import { useState } from "react"

export default function CreateArticle({ categories }) {

    const [values, setValues] = useState({
        titre: '',
        description: '',
        image: '',
        user_id: 1,
        categorie_id: ''
    })

    const ajouter = (e) => {
        e.preventDefault()
        router.post('/article/post', values)
        router.get('/dashboard')
    }

    return (
        <div>
            <h1 className="text-5xl">Create article :</h1>

            <form onSubmit={ajouter}>
                <label htmlFor="">Titre</label>
                <input type="text" name="titre" onChange={(e) => setValues({ ...values, titre: e.target.value })} />
                <label htmlFor="">Déscription</label>
                <input type="text" name="description" onChange={(e) => setValues({ ...values, description: e.target.value })} />
                <label htmlFor="">Image</label>
                <input type="text" name="image" onChange={(e) => setValues({ ...values, image: e.target.value })} />
                <select name="categorie" id="" onChange={(e) => setValues({...values, categorie_id: e.target.value})}>
                    <option value="" selected disabled>Choisir une catégorie</option>
                    {categories.map((item) => (
                        <option key={item.id} value={item.id}>{item.nom}</option>
                    ))}
                </select>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    )
}