import react from 'react';
import Coinitem from './Coinitem';
import './Coin.css'
import Coins from './Route/Coins'
import {Link} from 'react-router-dom';
const Coin=(props)=>{
    return (
        <div className='container'>
           
                <div className='heading'>
                    <p>#</p>
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'>Mkt Cap</p>
                </div>
                {props.coins.map(coin=>{
                    return(
                        <Link to={`/coins/${coin.id}`} element={<Coins />} key={coin.id}>
                        <Coinitem coins={coin} />
                    </Link>)
                })}
                
            
        </div>
    )
}
export default Coin