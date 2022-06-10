import react , {useState , useEffect} from 'react';
import axios from 'axios';
import Coin from './Coin';
import Navbar from './Navbar';
import {Routes,Route} from 'react-router-dom'
import Coins from './Route/Coins'
function App() {
  const[coins,setcoins]=useState([])
  const url="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  useEffect(()=>{
    axios.get(url).then(res=>{
      setcoins(res.data)
      console.log(res.data)
    }).catch((error)=>{
      console.log(error)
    })
  },[])
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Coin coins={coins}></Coin>}/>
        <Route path='/coins' element={<Coins />}>
          <Route path=':coinId' element={<Coins />} />
        </Route>
      </Routes>
     
    </div>
  );
}

export default App;
