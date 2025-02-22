import React, { useState} from 'react'

export default function NumberDram() {
    const [min, setMin] = useState('1');
    const [max, setMax] = useState('100');
    const [quantity, setQuantity] = useState('1');
    const [numbers, setNumbers] = useState([]);
    const [usedNumbers, setUsedNumbers] = useState(new Set());
    const [noReapeat, setNoRepeat] = useState(false);
    const [error, setError] = useState(false);
    const [winnerHistory, setWinnerHistory] = useState([]);

    function handleDraw() {
        const minValue = Number(min);
        const maxValue = Number(max);
        const quantityValue = Number(quantity);

        if (maxValue <= minValue || !min || !max ||!quantity) {
            setError(true);
            return;
        }

        setError(false);    
        let availableNumbers = Array.from({ length: maxValue - minValue + 1 }, (_, i) => i + minValue);

        if (noReapeat) {
            // Remove os números já sorteados
            availableNumbers = availableNumbers.filter(num => !usedNumbers.has(num));

            if (availableNumbers.length < quantityValue) {
                alert('Náo há números suficientes para sortear');
                return;
            }
        }

        const drawnNumbers = [];
        for (let i = 0; i < quantityValue; i++) {
            const randomIndex = Math.floor(Math.random() * availableNumbers.length);
            drawnNumbers.push(availableNumbers[randomIndex]);
            availableNumbers.splice(randomIndex, 1);
        }
        setNumbers(drawnNumbers);

        if (noReapeat) {
            setUsedNumbers(new Set([...usedNumbers, ...drawnNumbers]));
        }

        setWinnerHistory([...winnerHistory, ...drawnNumbers.map((num, i) => ({id: winnerHistory.length + i + 1, num}))]);
    }


    function handleToggleNoRepeat() {
        setNoRepeat(!noReapeat);
        if(!noReapeat) {
            setNumbers([]); // Limpa os números sorteados
            setWinnerHistory([]);
            setUsedNumbers(new Set());
        }
        
    }

    return(
        <div className='flex items-center justify-center min-h-screen bg-gray-400 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12'>
            <div className='bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-2xl text-white text-center'>
                <h2 className='text-xl font-bold mb-6'>Sorteio de Números</h2>

                <div className='flex flex-wrap items-center justify-center gap-2 mb-4 text-lg'>
                    <span className='whitespace-nowrap'>Sortear</span>
                        <input 
                            type="text" 
                            value={quantity}
                            onChange={(e) => {
                                const val = e.target.value.replace(/\D/g, '');
                                setQuantity(val);
                            }}
                            className='bg-gray-700 text-blue-400 p-2 rounded-lg w-full sm:w-16 text-center outline-none'
                            placeholder="1"
                            
                    />
                    <span>número entre</span>        
                    <input 
                    type="text" 
                    value={min}
                    onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '');
                        setMin(val);
                    }}
                    className='bg-gray-700 text-blue-400 p-2 rounded-lg w-full sm:w-16 text-center outline-none'
                    placeholder="1"
                    />

                    <span>e</span>
                    <input 
                    type="text" 
                    value={max}
                    onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '');
                        setMax(val);
                    }}
              
                    className='bg-gray-700 text-blue-400 p-2 rounded-lg w-full sm:w-16 text-center outline-none'
                    placeholder="100"
                    />
                </div>              
                <div className='mt-6 flex items-center gap-4'>
                <button 
                        className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${noReapeat ? 'bg-blue-600' : 'bg-gray-700'}`}
                        onClick={handleToggleNoRepeat}
                    >
                        <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${noReapeat ? 'translate-x-6' : 'translate-x-0'}`}></span>
                    </button>
                    <label className='font-semibold flex items-center gap-2'>Não repetir numero</label>
                </div>                    

                <button
                    className='bg-blue-600 font-semibold text-white px-6 py-4 mt-8 w-full rounded-lg hover:bg-blue-700 transition'
                    onClick={handleDraw}
                >
                    Sortear Número
                </button>

                {/* Exibir o histórico de sorteios */}
                <div className='grid grid-cols-3 sm:grid-cols-5 gap-2 mt-3 w-full'>
                    {winnerHistory.map((winner, index) => (
                        <div key={index} className='bg-gray-700 p-4 justify-center rounded-lg text-center text-blue-400'>
                            {winner.id}º Resultado:  {winner.num}
                        </div>
                    ))}
                </div>
            </div>
            </div>
    );
}