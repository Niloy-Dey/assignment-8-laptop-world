import { useEffect, useState } from 'react';
import './App.css';
import Products from './Component/Products/Products';


function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('product.json')
    .then(res => res.json() )
    .then(data => setData(data))
  }, [])

  return (
    <div>
      <Products data={data}> </Products>
    </div>  
)
}
export default App;


