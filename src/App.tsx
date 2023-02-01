
import './App.css';
import { ZigZagBoxMui } from './zig_zag/ZigZagBoxMui';
import { Box } from '@mui/material';




function App() {
  return <ZigZagBoxMui width={300} height={300} color={'rgba(236, 112, 99 , 0.05)'} radius={52}>
    <div style={{padding:'20px'}}>Hola mundo</div>
    </ZigZagBoxMui>
}

export default App;

