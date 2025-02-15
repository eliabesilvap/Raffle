import React, { useState, UseState} from 'react'

export default function NumberDram() {
    const [min, setMin] = useState('1');
    const [max, setMax] = useState('100');
    const [quantity, setQuantity] = useState('1');
    const [numbers, setNumbers] = useState([]);
    const [error, setError] = useState(false);

    function handleDraw() {
        const minValue = Number(min);
        const maxValue = Number(max);
        const quantityValue = Number(quantity);

        if (maxValue <= minValue || !min || !max ||!quantity) {
            setError(true);
            return;
        }
        setError(false);    
        const drawnNumbers = Array.from({ length: quantityValue }, () =>
            Math.floor(Math.random() * (maxValue - minValue +1)) + minValue
        );
        setNumbers(drawnNumbers);
    }

    return(
        <div className='flex items-center justify-center min-h-screen bg-gray-400 px-4 '>
            <div className='bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg text-white text-center'>
                <h2 className='text-xl font-bold mb-6'>Sorteio de Números</h2>

                <div className='flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 mb-4 text-lg'>
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
               
                <button
                    className='bg-blue-600 font-semibold text-white px-4 py-4 mb-4 w-full rounded-lg hover:bg-blue-700 transition'
                    onClick={handleDraw}
                >
                    Sortear Número
      

                </button>

                <div className='grid grid-cols-3 sm:grid-cols-5 gap-2'>
                    {numbers.map((num, index) => (
                        <div key={index} className='bg-gray-700 p-4 rounded-lg text-center text-blue-400'>
                            {num}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}