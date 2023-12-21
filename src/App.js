import Router from "./Router/Router";
import { BrowserRouter } from "react-router-dom";
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';


function App() {
  return (
    <BrowserRouter>
      <CustomCursor
        targets={['.link', '.your-css-selector']}
        customClass='custom-cursor'
        dimensions={30}
        fill='#FFF'
        smoothness={{
          movement: 0.2,
          scale: 0.1,
          opacity: 0.2,
        }}
        targetOpacity={0.5}
        strokeWidth={100}
      />
      <Router />
    </BrowserRouter>
  );
}

export default App;
