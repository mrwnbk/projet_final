import MyLayout from "@/layouts/my-layout"
import { Link, router } from "@inertiajs/react"
import { useState } from "react"

export default function Register() {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    })

    const ajouter = (e) => {
        e.preventDefault()
        router.post('register', values)
    }

    return (
        <MyLayout>
            <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
                <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-8 space-y-6 border-t-4 border-green-500">
                    <h1 className="text-3xl font-extrabold text-center text-green-600 tracking-wide uppercase">
                        Inscription - Foot Actu
                    </h1>

                    <Link href="/">
                        <button className="text-sm text-green-600 hover:underline hover:text-green-800 transition duration-200">
                            ← Retour à l'accueil
                        </button>
                    </Link>

                    <form onSubmit={ajouter} className="space-y-5">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Nom complet</label>
                            <input type="text" name="name" onChange={(e) => setValues({ ...values, name: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none transition" placeholder="Kylian Mbappé" />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Email</label>
                            <input type="text" name="email" onChange={(e) => setValues({ ...values, email: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none transition" placeholder="fan@footactu.com" />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Mot de passe</label>
                            <input type="password" name="password" onChange={(e) => setValues({ ...values, password: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none transition" placeholder="••••••••" />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Confirmation mot de passe</label>
                            <input type="password" name="password_confirmation" onChange={(e) => setValues({ ...values, password_confirmation: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none transition" placeholder="••••••••" />
                        </div>

                        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg shadow-md transition duration-300 uppercase tracking-wider">
                            S'inscrire maintenant
                        </button>
                    </form>
                </div>
            </div>
        </MyLayout>

    )
}