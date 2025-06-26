import MyLayout from "@/layouts/my-layout"
import { Link, router } from "@inertiajs/react"
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
        <MyLayout>
            <div className="max-w-3xl mx-auto px-6 py-10">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-4xl font-bold text-gray-800">Créer un article</h1>
                    <Link href="/dashboard" className="inline-flex items-center bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300">
                        ← Retour
                    </Link>
                </div>

                <form onSubmit={ajouter} className="bg-white p-8 rounded-xl shadow-lg space-y-6">
                    <div>
                        <label htmlFor="titre" className="block text-gray-700 font-medium mb-1">Titre</label>
                        <input type="text" name="titre" id="titre" onChange={(e) => setValues({ ...values, titre: e.target.value })} className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ex: Messi bat un nouveau record" />
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-gray-700 font-medium mb-1">Description</label>
                        <input type="text" name="description" id="description" onChange={(e) => setValues({ ...values, description: e.target.value })} className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Brève description de l'article" />
                    </div>

                    <div>
                        <label htmlFor="image" className="block text-gray-700 font-medium mb-1">Image (URL)</label>
                        <input type="text" name="image" id="image" onChange={(e) => setValues({ ...values, image: e.target.value })} className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="https://..." />
                    </div>

                    <div>
                        <label htmlFor="categorie" className="block text-gray-700 font-medium mb-1">Catégorie</label>
                        <select name="categorie" id="categorie" onChange={(e) => setValues({ ...values, categorie_id: e.target.value })} className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="" disabled selected>Choisir une catégorie</option>
                            {categories.map((item) => (
                                <option key={item.id} value={item.id}>{item.nom}</option>
                            ))}
                        </select>
                    </div>

                    <div className="text-right">
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                            Publier l’article
                        </button>
                    </div>
                </form>
            </div>
        </MyLayout>

    )
}