import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@fontsource-variable/bricolage-grotesque'
import '@fontsource-variable/newsreader'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);
