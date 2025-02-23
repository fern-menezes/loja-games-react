import { Gamepad, Search, User, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-zinc-900 text-white border-b border-zinc-500'>
            
                <div className="container flex justify-between text-lg px-5">
                    <div className='flex items-center gap-2'>
                        <Gamepad /> 
                        <Link to='/' className="text-xl font-bold">
                        GAMELAND
                        </Link>
                    </div>

                    <div className='flex items-center gap-2'>
                        <input type="text" placeholder='Buscar...' className='bg-zinc-800 rounded-sm px-2 py-1 text-sm outline-none w-90'/>
                        <Search className='size-5 cursor-pointer hover:scale-110 hover:text-sky-600'/> 
                    </div>
                    


                    <div className='flex items-center gap-4 text-md'>
                        <p>Produtos</p>
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastrarcategoria' className='hover:underline'>Nova Categoria</Link>
                        <p>
                            <User className='size-5 cursor-pointer hover:scale-110 hover:text-sky-600'/>
                        </p>
                        <p>
                            <ShoppingCart className='size-5 cursor-pointer hover:scale-110 hover:text-sky-600'/>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar