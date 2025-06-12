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
        <div>
            <h1 className="text-5xl">Login :</h1>

            <Link href="/">
                <button className="border p-2 rounded-2xl cursor-pointer">Back</button>
            </Link>

            <form onSubmit={connexion} className="flex flex-col gap-4 w-80 mx-auto mt-12 p-6 border border-gray-300 rounded-lg shadow-sm">
                <div className="flex flex-col">
                    <label className="mb-1 text-sm text-gray-700">Email</label>
                    <input type="text" name="email" onChange={(e) => setValues({ ...values, email: e.target.value })} className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1 text-sm text-gray-700">Mot de passe</label>
                    <input type="password" name="password" onChange={(e) => setValues({ ...values, password: e.target.value })} className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <label className="inline-flex items-center text-sm text-gray-700">
                    <input type="checkbox" name="remember" checked={values.remember} onChange={(e) => setValues({ ...values, remember: !values.remember })} className="mr-2" />
                    Se souvenir de moi
                </label>

                <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                    Connexion
                </button>

                <button type="button" className="text-white text-sm">
                    Vous n'avez pas de compte ? <Link href="/register" className="text-blue-600 hover:underline">Register</Link>
                </button>
            </form>
        </div>
    )
}