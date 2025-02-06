import { Link } from 'react-scroll';


const Nav = () => {
    const content =<>
        <div className= "">
            <ul>
                <Link to="Home">
                    <li>Home</li>
                </Link>
                <Link to="About">
                    <li>Contato</li>
                </Link>
                <Link to="About">
                    <li>About</li>
                </Link>
            </ul>
        </div>
    </>
    return (
        <nav>
            <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
                <div className='flex items-center  flex-1'>
                    <span className='text-3xl front-bold'>Logo</span>
                </div>
                <div className='lg:flex md:flex lg: flex-1 itens center justify-end font-normal hidden'>
                    <div className='flex-10'>
                     <ul className='flex gap-8 rm-16 text-[19px]'>
                <Link to="Home">
                <li>Home</li>
                </Link>
                <Link to="About">
                <li>Contato</li>
                </Link>
                <Link to="About">
                <li>About</li>
                </Link>        
            </ul>   
                    </div>
                </div>
            </div>
      </nav>
    );
};

export default Nav;