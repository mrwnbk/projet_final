import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import MyLayout from '@/layouts/my-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard({ articles }) {

    const supprimer = (e, id) => {
        e.preventDefault()
        router.delete(`/article/delete/${id}`)
    }

    return (
        <MyLayout>
            <div className="min-h-screen flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div>
                    <Link href="/article/create" className="inline-block bg-green-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-700 transition duration-300 font-semibold text-sm">
                        Créer un article
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 bg-white shadow-lg rounded-2xl overflow-hidden">
                        <thead className="bg-gradient-to-r from-blue-100 to-blue-200 sticky top-0 z-10">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">#</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Titre</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {articles.map((item, index) => (
                                <tr key={index} className="hover:bg-blue-50 transition duration-300 ease-in-out group">
                                    <td className="px-6 py-4 text-sm text-gray-600 group-hover:text-blue-600 font-medium">{item.id} .</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">{item.titre}</td>
                                    <td className="px-6 py-4 flex items-center gap-4">
                                        <Link href={`/article/edit/${item.id}`} className="text-blue-500 hover:text-blue-700 transition cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 7.125L16.862 4.487M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>
                                        </Link>
                                        <button onClick={(e) => supprimer(e, item.id)} className="text-red-500 hover:text-red-700 transition cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21a48.108 48.108 0 00-3.478-.397m-12 .562a48.11 48.11 0 013.478-.397m7.5 0V4.876c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </MyLayout>
    );
}
