import { useEffect } from "react";
import Nav from "../Components/Nav";

export default function Login() {
        useEffect(()=>{
          document.title= "Login | SorteZoom"
        })

        
    return (
        <div>
          <Nav />


        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-3x1 font-bold text-gray-800 text-center">
                    Bem vindo
                </h2>
                <p className="text-gray-600 text-center mb-8" >
                    Entre em sua conta por aqui.
                </p>

                <form >
                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-1">
                            E-mail
                        </label>
                        <div className="flex items-center border-b border-gray-300 py-2">
                            <span className="text-gray-500 mr-2">📧</span>
                            <input 
                            type="email"
                            placeholder="Digite seu e-mal"
                            className="w-full outline-none bg-transparent py-1" 
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-1">
                            Senha
                        </label>
                        <div className="flex items-center border-b border-gray-300 py-2">
                            <span className="text-gray-500 mr-2">🔒</span>
                            <input 
                            type="password"
                            placeholder="Digite sua senha"
                            className="w-full outline-none bg-transparent py-1" 
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg flex justify-center items-center transition duration-300"

                    >
                        🔑 Fazer login
                    </button>
                </form>

                <div className="text-center mt-4">
                    <a href="#" className="text-blue-500 text-sm hover:underline">
                        Esqueci minha senha
                    </a>
                </div>

                <div className="text-center mt-2">
                    <a href="#" className="text-blue-500 text-sm hover:underline">
                        Ainda não tenho cadastro
                    </a>
                </div>
            </div>
        </div>
    </div>
    );
}