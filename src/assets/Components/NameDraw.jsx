import React, {useState} from 'react';

export default function NameDraw() {
    const [name, setName] = useState('');
    const [winner, setWinner] = useState([]);
    const [quantity, setQuantity] = useState('1'); // Quantidade padrão: 1
    
    function handleDraw() {
        // Separar por quebra de linha ou vírgula
        const nameList = name
            .split(/[\n,]/) // Divide por linha ou vírgula
            .map(name => name.trim()) // Remove espaços extras
            .filter(name => name); // Remove entradas vazias
        
        const mumQuantity = parseInt(quantity, 10) || 1; // Garante que sempre seja um número valido

        if (nameList.length >= mumQuantity && mumQuantity > 0) {
            // Embaralha a lista e pega os primeiros 'quantity' nomes
            const shuffled = nameList.sort(()=> 0.5 - Math.random());
            setWinner(shuffled.slice(0, mumQuantity));
        } else{
            setWinner([]);
        }         
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-400 px-4 sm:px-6 md:px-8'>
            <div className='bg-gray-800 p-6 rounded-lg shadow-lg w-full sm:w-6/12 text-white text-center'>
                <h2 className='text-xl font-bold mb-4 text-center'>Sorteio de Nomes</h2>
                
            <textarea
                className='w-full p-3 border rounded-lg min-h-64 bg-gray-700'
                placeholder='Separe os nomes por linha ou vírgula....'
                value={name}
                onChange={(e) => setName(e.target.value)}
        />

        <div className='mt-3 flex flex-col items-center text-center '>
            <label className='block font-semibold flex items-center gap-2 '>
            Quantidade de nomes a sortear: 
            <input
                type="text" // Permite que o usuário apague o valor
                className='w-16 p-2 border rounded-lg text-center bg-gray-700' 
                value={quantity}
                onChange={(e) => {
                const val = e.target.value;
                if (/^\d*$/.test(val))  {// Permite apenas números 
                    setQuantity(val);
                }
            }}
            placeholder='Qtd'
        /> 
   
            </label>
 

    </div>
                <button
                    className="bg-blue-600 font-semibold text-white px-4 py-2 mt-10 w-full rounded-lg hover:bg-blue-700 transition relative group"
                    onClick={handleDraw} 
                >
                    Sortear {quantity || 1} {quantity > 1 ? 'nomes' : 'nome'} 
                    <span className="inline-block ml-2 transition-all duration-0 group-hover:opacity-0">
                        &gt;
                    </span>
                    <span className="inline-block ml-0 absolute opacity-0 transition-all duration-0 group-hover:opacity-100 group-hover:translate-x1">
                        -&gt;
                    </span>
                </button>

                {winner.length > 0 && (
                    <div className='mt-4 text-center'>
                        <p className='text-lg front-semibold'>🎉 Ganhador: {winner.join(', ')} 🎉</p>
                    </div>
                )}
            </div>
        </div>
    );
}
