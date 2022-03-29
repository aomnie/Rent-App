import "./App.css";
import { Switch, Route } from "react-router-dom";
import AddPost from "./Components/AddPost/AddPost";
import Home from "./Components/Home/Home"
import PostList from "./Components/PostList/PostList";
import Search from "./Components/Search/Search";
import Mynav from "./Components/Mynav/Mynav";
import PostDetails from "./Components/PostDetails/PostDetails";
import SignUp from "./Components/Authentication/SignUp/SignUp"
import Login from "./Components/Authentication/Login/Login";



function App() {
  
  return (
    <div className="App">
      <Mynav />
      <Switch>
        <Route path="/Add Post" render={() => <AddPost />} />
        <Route path="/Home" render={() => <Home />} />
        <Route exact path="/" render={() => <Home />} />
        <Route path="/Announces" render={() => <PostList />} />
        <Route path="/SignUp" render={() => <SignUp />} />
        <Route path="/Login" render={() => <Login />} />
        <Route path="/Search" render={() => <Search />} />
        <Route path="/PostDetails/:id" render={()=><PostDetails  />} />
      </Switch>
    </div>
  );
}

export default App;
