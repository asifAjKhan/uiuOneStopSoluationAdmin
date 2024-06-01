import Home from "./pages/home/Home";
import Login from "./pages/register/Login.jsx"
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import NewsLetter from "./pages/newsLetter/NewsLetter";

import Book from "./pages/Book/Book";
import NewBook from "./pages/newBook/NewBook";
import Event from "./pages/event/Event";
import ShowEvent from "./pages/showEvent/ShowEvent";
import Register from "./pages/register/Register.jsx";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="books">
              <Route index element={<Book />} />
              {/* <Route path=":bookId" element={<Single />} /> */}
              <Route
                path="newBook"
                element={<NewBook inputs={productInputs}/>}
              />
            </Route>

            <Route path="newsletter" element={<NewsLetter />}/>
            <Route path="event" >
                <Route index element={<ShowEvent />} />
                <Route path="newEvent" element={<Event />}/>
            </Route>


           
          </Route>

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
