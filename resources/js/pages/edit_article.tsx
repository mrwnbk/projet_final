import MyLayout from "@/layouts/my-layout"
import { router } from "@inertiajs/react"
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
            <div className="mt-15">
                <h1 className="text-5xl">Edit article :</h1>

                <form onSubmit={modifier} className="max-w-xl mx-auto bg-white p-8 shadow-md rounded-lg space-y-6">

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Titre</label>
                        <input type="text" name="titre" value={values.titre} onChange={(e) => setValues({ ...values, titre: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <input type="text" name="description" value={values.description} onChange={(e) => setValues({ ...values, description: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
                        <input type="text" name="image" value={values.image} onChange={(e) => setValues({ ...values, image: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                    </div>

                    <div className="text-right">
                        <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-700 transition duration-300 font-semibold">
                            Modifier
                        </button>
                    </div>

                </form>
            </div>

        </MyLayout>
    )
}