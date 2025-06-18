import { type ReactNode } from 'react';
import Navbar from '@/components/navbar';

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
        </div>
    );
}