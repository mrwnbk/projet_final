import MyLayout from "@/layouts/my-layout"
import { Link, router } from "@inertiajs/react"
import { useState } from "react"

export default function Login() {

    const [values, setValues] = useState({
        email: '',
        password: '',
        remember: false
    })

    const connexion = (e) => {
        e.preventDefault()
        router.post('login', values)
    }

    return (
        <MyLayout>
            <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-4">
                <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 space-y-6 border-t-4 border-green-500">
                    <h1 className="text-2xl font-bold text-center text-green-600 uppercase tracking-wide">
                        Connexion - Foot Actu
                    </h1>

                    <Link href="/">
                        <button className="text-sm text-green-600 hover:underline hover:text-green-800 transition duration-200">
                            ← Retour à l'accueil
                        </button>
                    </Link>

                    <form onSubmit={connexion} className="space-y-5">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Email</label>
                            <input type="text" name="email" onChange={(e) => setValues({ ...values, email: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none transition" placeholder="ton@email.com" />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Mot de passe</label>
                            <input type="password" name="password" onChange={(e) => setValues({ ...values, password: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none transition" placeholder="••••••••" />
                        </div>

                        <label className="flex items-center text-sm text-gray-700">
                            <input type="checkbox" name="remember" checked={values.remember} onChange={(e) => setValues({ ...values, remember: !values.remember })} className="mr-2 accent-green-600" />
                            Se souvenir de moi
                        </label>

                        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg transition duration-300">
                            Se connecter
                        </button>

                        <p className="text-center text-sm text-gray-600">
                            Pas encore inscrit ?
                            <Link href="/register" className="text-green-600 font-semibold hover:underline ml-1">Créer un compte</Link>
                        </p>
                    </form>
                </div>
            </div>
        </MyLayout>

    )
}