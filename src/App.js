import React from 'react';
import {connect} from 'react-redux';

//components
import MainTable from "./components/MainTable";
import ObedenitTable from "./components/ObedenitTable";
import KorzinkaTable from "./components/KorzinkaTable";

const App = () => {

    return (
        <div className="container">
            <h1 className='text-center'>Table Example</h1>
            <div className='row mt-5'>
                {/*Main Table*/}
                <div className="col-md-6 w-100">
                    <MainTable/>
                </div>

                {/*Changes Table*/}
                <div className="col-md-6 d-flex flex-column">
                  {/*Obedinet Table*/}
                    <ObedenitTable/>

                  {/*Korzinka Table*/}
                    <KorzinkaTable/>
                </div>

            </div>
        </div>
    );
};


export default connect()(App);
