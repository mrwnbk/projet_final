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
            {/* SECTION ACCEUIL */}
            <section className="w-screen h-screen m-auto bg-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('/images/bannerprojetfinal.webp')" }}></section>


            {/* SECTION ARTICLES */}
            <section className="w-9/10 mx-auto mt-20">
                <h1 id="articles" className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-black to-red-600 mb-12 text-center tracking-tight relative w-fit mx-auto after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-32 after:bg-gradient-to-r after:from-green-500 after:to-red-500 after:rounded-full">Actualités</h1>

                <div className="flex flex-col-reverse">
                    {articles.map((item, index) => (
                        <div key={index} className="w-full mx-auto bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row mb-10 h-68">
                            <div className="md:w-1/3 w-full h-64 md:h-auto">
                                <img src={item.image} alt={item.titre} className="w-full object-center" />
                            </div>
                            <div className="p-8 flex flex-col justify-between md:w-2/3">
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{item.titre}</h3>
                                    <p className="text-gray-600 line-clamp-5">
                                        {item.description}
                                    </p>

                                    <button onClick={(e) => detail(e, item.id)} type="submit" className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 cursor-pointer">
                                        Voir plus ...
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </MyLayout>
    )
}