import MyLayout from "@/layouts/my-layout";
import { Link, router } from "@inertiajs/react";
import { useState } from "react";

export default function DetailArticle({ article }) {

    const [values, setValues] = useState({
        contenu: '',
        article_id: article.id
    })

    const commentaire = (e) => {
        e.preventDefault()
        router.post('/commentaire/post', values)
    }

    return (
        <MyLayout>
            <div className="pt-3 bg-gray-100 min-h-screen">
                <div className="mb-6 ml-5">
                    <Link href="/#articles" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
                        ← Retour
                    </Link>
                </div>

                <div className="flex items-center justify-center">
                    <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-6xl px-8 py-8 flex flex-col md:flex-row items-center md:items-start gap-8">
                        <img src={article.image} alt={article.titre} className="w-full md:w-[45%] max-h-200 rounded-lg object-cover" />

                        <div className="md:w-[55%] text-center md:text-left">
                            <h3 className="text-3xl font-bold text-gray-800">{article.titre}</h3>
                            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                                {article.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* COMMENTAIRES */}
                <div className="mt-6 px-5 md:px-20">
                    <h4 className="text-2xl font-semibold text-gray-800 mb-6">Commentaires</h4>

                    {article.commentaire.map((item, index) => (
                        <div key={index} className="bg-white rounded-xl shadow p-4 mb-4">
                            <p className="text-sm text-gray-500 font-semibold mb-1">{item.user.name}</p>
                            <p className="text-gray-700 text-base">{item.contenu}</p>
                        </div>
                    ))}
                </div>


                <form onSubmit={commentaire} className="mt-10 px-5 md:px-20">
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Laisser un commentaire</h4>

                    <textarea name="contenu" placeholder="Écris ton commentaire ici..." onChange={(e) => setValues({ ...values, contenu: e.target.value })} className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 min-h-[120px] resize-none"></textarea>

                    <button type="submit" className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-xl transition duration-300">Envoyer</button>
                </form>

            </div>
        </MyLayout>
    );
}
