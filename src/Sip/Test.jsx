import {Provider} from "react-redux";
import {HashRouter, Route} from "react-router-dom";
import SimpleBarContainer from "./containers/SimpleBarContainer";
import GridData from "./components/GridData";

const Test =(props)=> {
    return (


        <Provider store={props.store}>

            <HashRouter>
                <div>

                    Test passed ok!
                    <SimpleBarContainer />
                    <div>
                        <Route
                            exact
                            path="/"
                            render={() => {
                                console.log('route to /');

                                /*this.props.setIsLogin(true);*/
                                return <div>page /</div>/*<LoginForm/>*/;
                            }}
                        />
                        <Route
                            path="/login"
                            render={() => {
                                /*this.props.setIsLogin(true);*/
                                console.log('route to /login');
                                return <div>page /login</div>/*<LoginForm/>*/;
                            }}
                        />
                        <Route
                            path="/grid"
                            render={() => {
                                /*this.props.setIsLogin(true);*/
                                  console.log('route to /login');
                                return <GridData />/*<LoginForm/>*/;
                            }}
                        />
                    </div>
                </div>
            </HashRouter>
        </Provider>


    )
}
export default Test;