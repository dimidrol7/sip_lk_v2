import {Provider} from "react-redux";
import {HashRouter, Route} from "react-router-dom";
import SimpleBarContainer from "./containers/SimpleBarContainer";
import GridDataContainer from "./containers/GridDataContainer";
import AbonentListContainer from "./containers/AbonentListContainer";
import Navbar from './components/Navbar';
import './css/MainPage.css';

const MainPage =(props)=> {
    return (


        <Provider store={props.store}>

            <HashRouter>
                <div className='app-wrapper'>

                    Test passed ok!
                    <SimpleBarContainer />
                    <Navbar />
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
                                  console.log('route to /grid');
                                return <GridDataContainer />/*<LoginForm/>*/;
                            }}
                        />
                        <Route
                            path="/abonentlist"
                            render={() => {

                                console.log('route to /abonentlist');
                                return <AbonentListContainer />;
                            }}
                        />
                    </div>
                </div>
            </HashRouter>
        </Provider>


    )
}
export default MainPage;