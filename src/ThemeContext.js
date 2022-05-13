import { createContext } from "react";

//const [theme, setTheme] = useState('darkblue');
//mimicking/writing above hook as createContext func of react

const ThemeContext = createContext(["green", () => {}]); //this green will be overriden in app.js's useState

export default ThemeContext;
