import * as React from 'react';
import Navigator from './app/routes/LoginStack';
import WelcomeScreen from './app/screens/Welcome';


export default class App extends React.Component {
    state = {
        component : <WelcomeScreen />
    }
    
    componentDidMount(){
        this.delay = setTimeout(() => {
            this.setState({component: <Navigator/>})
        }, 5000);
    }

    componentWillUnmount(){
        clearTimeout(this.delay);
    }

    render(){
        return(
        this.state.component
        );
    }
}
		