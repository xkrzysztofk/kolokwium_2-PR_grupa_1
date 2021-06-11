import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Posts from "./components/posts";
import KKhome from "./components/KKhome";

function App() {

  return (
      <div className="container-fluid">
        <div className="container">
            <div className="content">
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/home" exact component={KKhome}/>
                </Switch>
            </div>
        </div>
      </div>
  );
}

export default App;
