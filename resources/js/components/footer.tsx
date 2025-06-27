export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white text-center py-4 mt-10">
            <p className="text-sm">FootActu - Projet Final</p>
            <p className="text-xs text-gray-400 mt-1">&copy; {new Date().getFullYear()} Tous droits réservés.</p>
        </footer>
    );
}
