import './Home.css'

function Home() {
    return (
        <>
        <div  className="w-full flex justify-center items-center text-zinc-300 fundoHome">
            
            <div className="flex items-center coverbg">

                <div className="max-w 7xl flex flex-col items-center px-5 gap-2">
                    <h1 className="font-semibold 7xl text-5xl">Você entrou no reino dos jogos!</h1>
                    <p className="text-center px-10">Prepare-se para uma aventura épica e descubra os melhores títulos que vão desafiar sua mente e aquecer seu coração</p>

                    <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                Nova Categoria
                            </div>
                        </div>
                </div>

                <div className="flex flex-col items-center">
                    <img src="https://pbs.twimg.com/media/EjlaJIfXkAIXMGU.png" alt="Jinx From League of Legends" />
                </div>
            </div>
        </div>
        </>
    );
}
export default Home;