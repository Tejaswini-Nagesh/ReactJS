import './App.scss';
import { AuthProvider } from './Auth/Auth';
import RouterComponent from "./Route"

function App() {
  return (
    <AuthProvider>
      <RouterComponent/>
    </AuthProvider>
    // <RouterComponent/>
    
  );
}

export default App;
