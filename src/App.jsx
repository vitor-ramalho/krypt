import './App.css'
import { Navbar, Welcome, Footer, Loader, Services, Transactions } from './Components';

const App = () => {
  return (
    <h1 className="min-h-screen">
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </h1>
  )
}

export default App;