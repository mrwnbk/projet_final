import MyLayout from "@/layouts/my-layout"
import { Link, router } from "@inertiajs/react"
import { useState } from "react"

export default function EditArticle({ article }) {

    const [values, setValues] = useState({
        titre: article.titre,
        description: article.description,
        image: article.image,
        user_id: article.user_id
    })

    const modifier = (e) => {
        e.preventDefault()
        router.put(`/article/update/${article.id}`, values)
        router.get('/dashboard')
    }

    return (
        <MyLayout>
            <div className="min-h-screen bg-gray-50 py-4 px-4 sm:px-6 lg:px-8">

                <div className="mb-8">
                    <Link href="/dashboard" className="inline-flex items-center bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300">
                        ← Retour
                    </Link>
                </div>

                <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-10 space-y-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">Modifier l'article</h1>
                    </div>

                    <form onSubmit={modifier} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Titre</label>
                            <input type="text" name="titre" value={values.titre} onChange={(e) => setValues({ ...values, titre: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Déscription</label>
                            <textarea name="description" rows="4" value={values.description} onChange={(e) => setValues({ ...values, description: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">URL de l’image</label>
                            <input type="text" name="image" value={values.image} onChange={(e) => setValues({ ...values, image: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
                            {values.image && <img src={values.image} alt="Aperçu" className="mt-4 rounded-md shadow-sm max-h-60 object-cover w-full" />}
                        </div>

                        <div className="text-right">
                            <button type="submit" className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300 font-semibold cursor-pointer">✅ Modifier</button>
                        </div>
                    </form>
                </div>
            </div>


        </MyLayout>
    )
}