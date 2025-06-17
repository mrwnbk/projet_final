import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard({ articles }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto text-white">
                <div>
                    <Link href="/article/create" className="inline-block bg-green-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-700 transition duration-300 font-semibold text-sm">
                        Créer un article
                    </Link>
                </div>

{/* METTRE SUR GITHUB ET TU VIENT DE FAIRE LE STYLE DU BTN CREATE */}

                <div className='flex flex-col-reverse'>
                    {articles.map((item, index) => (
                        <div key={index}>
                            <h3>{item.titre}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
