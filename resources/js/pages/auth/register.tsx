import { Link, router } from "@inertiajs/react"
import { useState } from "react"

export default function Register() {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    })

    const enregistrer = (e) => {
        e.preventDefault()
        router.post('register', values)
    }

    return (
        <div>
            <h1 className="text-5xl">Register :</h1>

            <Link href="/">
                <button className="border p-2 rounded-2xl cursor-pointer">Back</button>
            </Link>

            <form onSubmit={enregistrer} className="max-w-md mx-auto p-4 shadow-md rounded-lg space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Nom</label>
                    <input type="text" name="name" onChange={(e) => setValues({ ...values, name: e.target.value })}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                
                <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input type="text" name="email" onChange={(e) => setValues({ ...values, email: e.target.value })}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Mot de passe</label>
                    <input type="password" name="password" onChange={(e) => setValues({ ...values, password: e.target.value })}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Confirmation mot de passe</label>
                    <input type="password" name="password_confirmation" onChange={(e) => setValues({ ...values, password_confirmation: e.target.value })}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200 cursor-pointer">
                    Enregistrer
                </button>
            </form>

        </div>
    )
}