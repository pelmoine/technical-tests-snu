import { useState } from 'react';
import { SearchBar, PictureList } from './components';
function App() {
  const [result, setResult] = useState([]);
  return (
    <div className='flex p-5 flex-col'>
      <SearchBar setResult={setResult} />
      <PictureList pictures={result} />
    </div>
  );
}

export default App;
