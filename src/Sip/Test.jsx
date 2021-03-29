import {Provider} from "react-redux";
import {HashRouter, Route} from "react-router-dom";
import SimpleBarContainer from "./containers/SimpleBarContainer";

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
                                <div>page /</div>
                                /*this.props.setIsLogin(true);*/
                                return /*<LoginForm/>*/;
                            }}
                        />
                        <Route
                            path="/login"
                            render={() => {
                                /*this.props.setIsLogin(true);*/
                                <div>page /login</div>
                                console.log('route to /login');
                                return /*<LoginForm/>*/;
                            }}
                        />
                    </div>
                </div>
            </HashRouter>
        </Provider>


    )
}
export default Test;