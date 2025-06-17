import MyLayout from "@/layouts/my-layout";
import { Link } from "@inertiajs/react";

export default function DetailArticle({ article }) {
    return (
        <MyLayout>
            <div className="pt-18 bg-gray-100 min-h-screen">
                <div className="mb-6">
                    <Link href="/" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
                        ← Retour
                    </Link>
                </div>

                <div className="flex items-center justify-center">
                    <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-6xl px-8 py-8 flex flex-col md:flex-row items-center md:items-start gap-8">
                        <img src={article.image} alt={article.titre} className="w-full md:w-[45%] max-h-200 rounded-lg object-cover"/>

                        <div className="md:w-[55%] text-center md:text-left">
                            <h3 className="text-3xl font-bold text-gray-800">{article.titre}</h3>
                            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                                {article.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </MyLayout>
    );
}
