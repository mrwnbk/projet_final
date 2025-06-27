import { type ReactNode } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

interface MyLayoutProps {
    children: ReactNode;
}

export default function MyLayout({ children }: MyLayoutProps) {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main className="py-18">
                {children}
            </main>
            <Footer />
        </div>
    );
}