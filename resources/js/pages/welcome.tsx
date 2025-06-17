import MyLayout from "@/layouts/my-layout"
import { router, usePage } from "@inertiajs/react"

export default function Welcome({ articles }) {

    const { auth } = usePage().props

    const detail = (e, id) => {
        e.preventDefault()
        router.get(`/article/detail/${id}`)
    }

    return (
        <MyLayout>
            {/* SECTION ACCEUIL
            <section className="w-screen h-screen bg-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('/images/bannerprojetfinal.webp')" }}></section> */}


            {/* SECTION ARTICLES */}
            <section>
                {auth.user ? (
                    <div className="mt-20 flex flex-col-reverse">
                        {articles.map((item, index) => (
                            <div key={index} className="w-full mx-auto bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row mb-10 h-68">
                                <div className="md:w-1/3 w-full h-64 md:h-auto">
                                    <img src={item.image} alt={item.titre} className="w-full object-center" />
                                </div>
                                <div className="p-8 flex flex-col justify-between md:w-2/3">
                                    <div>
                                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{item.titre}</h3>
                                        <p className="text-gray-600">
                                            {item.description.length > 400 ? item.description.substring(0, 400) + "..." : item.description}
                                        </p>

                                        <button onClick={(e) => detail(e, item.id)} type="submit" className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300">
                                            Voir plus ...
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                ) : ""}
            </section>
        </MyLayout>
    )
}