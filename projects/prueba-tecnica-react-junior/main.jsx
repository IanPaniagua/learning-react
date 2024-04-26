// import { createRoot } from 'react-dom/client';
// const root = createRoot(document.getElementById('app'))
// createRoot.render(<h1> Hello, world! </h1>)

//chatGPT:
import ReactDOM from 'react-dom/client';
// import { createRoot } from 'react-dom/client';
import {App} from './src/App.jsx'
const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(<App />);
