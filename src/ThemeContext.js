import { createContext } from "react";

//const [theme, setTheme] = useState('darkblue');
//mimicking/writing above hook as createContext func of react

const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
