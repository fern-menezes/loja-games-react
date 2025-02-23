import { Link } from 'react-router-dom'
import { Tag} from 'lucide-react'
import Categoria from '../../../models/Categoria'


interface CardCategoriasProps{
    categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriasProps) {
    return (
        
        
        <div className='border flex flex-col rounded-sm overflow-hidden w-80 ml-10'>
            <header className='flex justify-start items-center gap-2 py-2 px-2 text-zinc-800 border-b border-zinc-300'>
               
                    <Tag className='size-5 hover:scale-110 hover:text-sky-600'/>
                    <p className=' text-xl'> Categoria </p>
            </header>

                <div>
                    <p className='text-xl p-4'>{categoria.tipo}</p>
                </div>

                <div className="flex">
                <Link to={`/editarcategoria/${categoria.id} `} 
                        className='w-full text-zinc-900 bg-zinc-300 hover:bg-zinc-200 
                        flex items-center justify-center py-2'>
                        <button>Editar</button>
                    </Link>

                    <Link to={`/deletarcategoria/${categoria.id} `} 
                        className='w-full text-zinc-100 bg-zinc-600 hover:bg-zinc-800 
                        flex items-center justify-center py-2'>
                        <button>Deletar</button>
                    </Link>
            </div>

        </div>
    )
}

export default CardCategorias