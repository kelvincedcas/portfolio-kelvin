import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { PortfolioKelvin } from './PortfolioKelvin';

function App() {
  return (
    <>
      <ThemeProvider>
        <LanguageProvider>
          <PortfolioKelvin />
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
