const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-6 mt-0 text-center">
            <div className="container mx-auto px-4">

                <div className="flex flex-col md:flex-row justify-center gap-6 mt-2">
                    <a href="#" className="hover:text-fuchsia-600 transition mb-2 md:mb-0">Política de Privacidade</a>
                    <a href="#" className="hover:text-fuchsia-600 transition mb-2 md:mb-0">Termos de Uso</a>
                </div>
                <p className="text-sm mt-4 md:mt-2">Copyright &copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;