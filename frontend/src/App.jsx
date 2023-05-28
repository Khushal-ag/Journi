import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './users/pages/user';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
const App = () => {
  return (
    <>
      <Router>
        <MainNavigation />
        <main>
          <Routes>
            <Route path='/' element={<User />} />
            <Route path='/places/new' element={<NewPlace />} />
          </Routes>
        </main>
      </Router>
    </>
  );
};
export default App;

