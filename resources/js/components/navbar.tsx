import { Link, router, usePage } from "@inertiajs/react";

export default function Navbar() {
    const { auth } = usePage().props;

    const deco = () => {
        router.post('logout');
    };

    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 font-sans">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                <Link href="/" className="text-3xl font-extrabold text-green-600 tracking-tight hover:text-green-700 transition duration-300">
                    Foot<span className="text-gray-800">Actu</span>
                </Link>

                <ul className="hidden md:flex space-x-10 text-gray-700 font-medium text-base">
                    <Link href="/" className="hover:text-green-600 transition duration-300">Accueil</Link>
                    <Link href="#articles" className="hover:text-green-600 transition duration-300">Actualités</Link>
                    <Link href="#" className="hover:text-green-600 transition duration-300">Clubs</Link>
                    <Link href="#" className="hover:text-green-600 transition duration-300">Résultats</Link>
                </ul>
                
                {auth.user ? (
                    <>

                        <div className="flex gap-3 items-center">
                            <Link href="/dashboard">
                                <button className="bg-green-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-600 transition duration-300 cursor-pointer">
                                    Dashboard
                                </button>
                            </Link>
                            <button
                                onClick={deco}
                                className="bg-red-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-red-600 transition duration-300 cursor-pointer">
                                Déconnexion
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="flex gap-3 items-center">
                        <Link href="/login">
                            <button className="bg-gray-100 text-gray-800 px-5 py-2 rounded-full border border-gray-300 hover:bg-gray-200 transition cursor-pointer">
                                Se connecter
                            </button>
                        </Link>
                        <Link href="/register">
                            <button className="bg-green-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-600 transition cursor-pointer">
                                S'enregistrer
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
