
import { Link } from "react-router-dom";



export default function Kittens() {
    return (
        <>
              <nav className='text-xl flex justify-evenly'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
        <Link to='/kittens'>Kittens</Link>
        <Link to='/resources'>Resources</Link>
        <Link to='/contact'>Contact</Link>
      
    </nav>
    <div className='grid grid-cols-1 place-items-center h-screen'>
        <div>
            <h1 className='text-7xl font-black'>Kittens</h1>
            <Link to='/kittens/filaberta'>Filaberta</Link>
            </div>
        </div>
        </>
    );
}