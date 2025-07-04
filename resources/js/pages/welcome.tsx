import MyLayout from "@/layouts/my-layout"
import { router, usePage } from "@inertiajs/react"

export default function Welcome({ articles }) {

    const { auth } = usePage().props

    const detail = (e, id) => {
        e.preventDefault()
        router.get(`/article/detail/${id}`)
    }

    console.log(articles);


    return (
        <MyLayout>
            {/* SECTION ACCEUIL */}
            <section className="w-screen h-screen bg-center bg-cover bg-no-repeat relative" style={{ backgroundImage: "url('/images/bannerprojetfinal.webp')" }}>
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.8)]"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">

                    <h1 className="text-5xl md:text-7xl font-extrabold uppercase mb-6 tracking-wide" style={{ fontFamily: "'Poppins', sans-serif", textShadow: "0 0 8px rgba(0,255,64,0.9), 0 0 20px rgba(0,255,64,0.5)" }}>
                        Bienvenue sur <span className="text-green-400">FootActu</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-gray-200 text-[25px] italic tracking-wide drop-shadow-md" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        Toute l’actualité du football en un seul endroit : résultats, transferts, rumeurs et bien plus encore.
                    </p>


                </div>
            </section>





            {/* SECTION ARTICLES */}
            <section id="articles" className="w-9/10 mx-auto mt-20" style={{ scrollMarginTop: "100px" }}>
                <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-black to-red-600 mb-12 text-center tracking-tight relative w-fit mx-auto after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-32 after:bg-gradient-to-r after:from-green-500 after:to-red-500 after:rounded-full">Actualités</h1>

                <div className="flex flex-col-reverse">
                    {articles.map((item, index) => (
                        <div key={index} className="w-full mx-auto bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row mb-10 h-68">
                            <div className="md:w-1/3 w-full h-64 md:h-auto">
                                <img src={item.image} alt={item.titre} className="w-full object-center" />
                            </div>
                            <div className="p-8 flex flex-col justify-between md:w-2/3">
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{item.titre}</h3>
                                    <p className="text-gray-600 line-clamp-3">
                                        {item.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {item.tage.map((element, index) => (
                                            <span key={index} className="inline-block bg-gradient-to-r from-green-500 to-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm hover:scale-105 transition-transform duration-200">
                                                #{element.nom}
                                            </span>
                                        ))}
                                    </div>

                                    <button onClick={(e) => detail(e, item.id)} type="submit" className="mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 cursor-pointer">
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