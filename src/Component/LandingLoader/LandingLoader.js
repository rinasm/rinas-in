/**
 * Created by intellicar-rinas on 27/2/18.
 */
import React, {Component} from 'react';
import './LandingLoader.css';

class LandingLoader extends Component {

    state = {
        active:false
    };

    constructor(){
        super();

        const handleLoadingChange =(store)=> {
            console.log(store)
        };

        window.subscribe(handleLoadingChange, 'pageLoaded');
    }

    render() {
        return (
            <div className={"LandingLoader" + (this.state.active ? ' active' : ' inactive')}>

            </div>
        )
    }

}

export default LandingLoader;