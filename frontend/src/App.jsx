import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./users/pages/User";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlaces from "./places/pages/UpdatePlaces";
import Auth from "./users/pages/Auth";
const App = () => {
  return (
    <>
      <Router>
        <MainNavigation />
        <main>
          <Routes>
            <Route index path="/" element={<User />} />
            <Route path="/:userId/places" element={<UserPlaces />} />
            <Route path="/places/new" element={<NewPlace />} />
            <Route path="/places/:placeId" element={<UpdatePlaces />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </main>
      </Router>
    </>
  );
};
export default App;
