import React, {useEffect, useState} from 'react';

export default function NameDraw() {
    const [name, setName] = useState('');
    const [winnerHistory, setWinnerHistory] = useState([]);
    const [quantity, setQuantity] = useState('1'); // Quantidade padrão: 1
    const [noRepeat, setNoRepeat] = useState(false);
    const [usedNames, setUsedNames] = useState(new Set());
    const [showAlert, setShowAlert] = useState(false);
    const [showResult, setShowResult] = useState(false)


    useEffect(() =>{
        setWinnerHistory([]);
        setUsedNames(new Set());
    }, [name]); // Reseta o histórico se a lista de nomes for alterada

    // Função para carregar e processar o arquivo CSV
    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file && file.type === 'text/csv') {
            const reader = new FileReader();
            reader.onload = (e) => {
                const text = e.target.result;
                // Processa o conteúdo CSV (Assume-se que cada linha ou célula tenha um nome)
                const nameFromCsv = text
                    .split(/\r?\n/)
                    .map(line => line.trim())
                    .filter(line => line); // Remove linhas vazizas
                setName(nameFromCsv.join('\n')); // Insere os nomes no estado "name"
            };
            reader.readAsText(file);
        } else {
            alert('Por favor, carregue um arquivo CSV.');
        }
    }
    
    function handleDraw() {
        // Separar por quebra de linha ou vírgula
        let nameList = name
            .split(/[\n,]/) // Divide por linha ou vírgula
            .map(name => name.trim()) // Remove espaços extras
            .filter(name => name); // Remove entradas vazias
        
        const numQuantity = parseInt(quantity, 10) || 1; // Garante que sempre seja um número valido

        if (noRepeat) {
            // Filtra nomes que já foram sorteados
            nameList = nameList.filter(n => !usedNames.has(n));
        }
        
        if (nameList.length >= numQuantity && numQuantity >0) {
            // Embaralha a lista e pega os primeiros "quantity" nomes
            const shuffled = nameList.sort(() => 0.5 - Math.random());
            const selectedWinners = shuffled.slice(0, numQuantity);

            const newWinners = selectedWinners.map((winner, index) => ({
                id: winnerHistory.length + index + 1,
                name: winner,
                timestamp: new Date().toDateString()
            }));

            setWinnerHistory(prevHistory => [...prevHistory, ...newWinners]);
            setShowResult(true);           

            if (noRepeat) {
                setUsedNames(new Set([...usedNames, ...selectedWinners]));               
            }
        } else {
            if(noRepeat && nameList.length === 0){
                setShowAlert(true);
            }
        }
    }

    function handleReset() {
        setWinnerHistory([]);
        setUsedNames(new Set());
        setShowResult(false);
    }

    function handleToggleNoRepeat() {
        setNoRepeat(!noRepeat);
        if(!noRepeat) {
            setUsedNames(new Set()); // Limpa os nomes usados ao desativar a opção
            setWinnerHistory([]);
        }
    }

    // Limpar o resultado quando clicar em "Voltar"
    function handleBack() {
        setWinnerHistory([]);
        setUsedNames(new Set());
        setShowResult(false);
    }    

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-400 px-4 sm:px-6 md:px-7'>
            <div className='bg-gray-800 p-6 rounded-lg shadow-lg w-full sm:w-6/12 text-white text-center'>
                <h2 className='text-xl font-bold mb-4 text-center'>Sorteio de Nomes</h2>
                
                <textarea
                    className='w-full p-3 border rounded-lg min-h-64 bg-gray-700'
                    placeholder='Separe os nomes por linha ou vírgula....'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <div className='mt-3 flex flex-col items-center text-center'>
                    <label className='font-semibold flex items-center gap-2 cursor-pointer'>
                        Para carregar a lista de um arquivo .csv, clique aqui
                        <input 
                        type="file"
                        accept='.csv'
                        className='hidden'
                        onChange={handleFileChange} 
                        />

                    </label>

                </div>

                <div className='mt-3 flex flex-col items-start text-center '>
                    <label className='font-semibold flex items-center gap-2'>
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
                <div className='mt-5 flex items-center gap-4'>
                    <button 
                        className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${noRepeat ? 'bg-blue-600' : 'bg-gray-700'}`}
                        onClick={handleToggleNoRepeat}
                    >
                        <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${noRepeat ? 'translate-x-6' : 'translate-x-0'}`}></span>
                    </button>
                    <label className='font-semibold flex items-center gap-2'>Não repetir nome</label>
                </div>
            </div>
            <button
                className="bg-blue-600 font-semibold text-white px-4 py-2 mt-10 w-full rounded-lg hover:bg-blue-700 transition relative group"
                onClick={handleDraw} 
            >
                Sortear {quantity || 1} {quantity > 1 ? 'nomes' : 'nome'} 
            </button>
        </div>

 {/*Modal de Resultado*/}
        {showResult && (
            <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75'>
                <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
                    <h2 className='text-xl font-bold mb-4 text-gray-800'>Resultado do Sorteio</h2>
                    {winnerHistory.map((winner, index) => (
                        <p key={index} className='text-lg font-semibold text-blue-600'>
                            {winner.id}º Resultado - {winner.name}
                        </p>
                    ))}
                    <button
                        className='mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
                        onClick={handleDraw}
                    >
                        Sortear de novo
                    </button>
                    <button
                        className='mt-4 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700'
                        onClick={handleBack}
                    >
                         Voltar
                </button>
            </div>
        </div>

)}

{/* Modal de Alerta */}
{showAlert && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
                        <p className='text-lg font-semibold text-gray-800'>Ops! Acabaram as possibilidades.</p>
                        <button className='mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700' onClick={() => setShowAlert(false)}>
                            Entendi
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
