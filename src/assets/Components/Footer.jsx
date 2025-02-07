const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-6 mt-10 text-center">
            <div className="container mx-auto px-6">
                <p className="text-sm">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
                <div className="flex justify-center gap-6 mt-4">
                    <a href="#" className="hover:text-fuchsia-600 transition">Política de Privacidade</a>
                    <a href="#" className="hover:text-fuchsia-600 transition">Termos de Uso</a>
                    <a href="#" className="hover:text-fuchsia-600 transition">Contato</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;