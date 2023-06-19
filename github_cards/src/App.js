import Form from "./Form";
import './App.css';
import {React} from "react";
import CardList from "./CardList";
import useEffect from "react";
const Extra=()=>{
useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);
}
class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
  	this.setState(prevState => ({
    	profiles: [...prevState.profiles, profileData],
    }));
  };
	render() {
  	return (
    	<div>
    	 <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
    	</div>
    );
  }
}

export default App;
