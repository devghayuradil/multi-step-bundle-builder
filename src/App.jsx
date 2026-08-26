import BundleBuilder from './components/BundleBuilder';
import { BundleProvider } from './context/BundleContext';

function App() {
  return (
    <BundleProvider>
      <BundleBuilder />
    </BundleProvider>
  );
}

export default App;