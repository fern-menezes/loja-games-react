import { Edit, Trash } from 'lucide-react'
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'
import FormProduto from '../formprodutos/FormProduto'


interface CardProdutosprops {
    produto: Produto
}
function CardProduto({ produto }: CardProdutosprops) {
    return (
        <div className='border-zinc-300 border w-70
            flex flex-col rounded-sm overflow-hidden justify-between m-4 transition duration-200 hover:bg-zinc-200 hover:scale-102 hover:border-sky-700'>
                
            <div>
                <div className="flex justify-end w-full py-2 px-4 gap-4 border-b border-zinc-300">
                    
                    <Link to={`/editarproduto/${produto.id} `}>
	                    <Edit className='size-5 cursor-pointer hover:scale-110 hover:text-sky-600'/>
                    </Link>
                    
                    <Link to={`/deletarproduto/${produto.id} `}>
                        <Trash className='size-5 cursor-pointer hover:scale-110 hover:text-sky-600'/>
                    </Link>
                    
                </div>
                <div className='p-4 flex flex-col items-center'>
                    <img src={produto.foto} alt="Game cover" />
                    <h4 className='text-lg font-semibold uppercase text-center'>{produto.nome}</h4>
                    <p>{produto.preco}</p>
                    <p>{produto.categoria?.tipo}</p>
                </div>
            </div>
            <div className="flex">
            <Link to={`/editarproduto/${produto.id}`} className='w-full text-white text-lg bg-zinc-500 
                    hover:bg-zinc-800 flex items-center justify-center py-2 cursor-pointer'>
                    <button>Comprar</button>
                </Link>

            </div>
        </div>
    )
}

export default CardProduto