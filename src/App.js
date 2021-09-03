import { Navigation } from "./components/DesktopNavigation/Navigation";
import { GreetUser } from "./components/greetuser/GreetUser";
import { Routes } from "./routes/Routes";

function App() {
  return (
    <Routes>
      <Navigation />
    </Routes>
    /* <GreetUser name="hörna av internet!" age="35"></GreetUser> */

  );
}

export default App;
