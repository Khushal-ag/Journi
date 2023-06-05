import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./users/pages/User";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
const App = () => {
  return (
    <>
      <Router>
        <MainNavigation />
        <main>
          <Routes>
            <Route path="/" element={<User />} />
            <Route path="/:userId/places" element={<UserPlaces />} />
            <Route path="/places/new" element={<NewPlace />} />
          </Routes>
        </main>
      </Router>
    </>
  );
};
export default App;
