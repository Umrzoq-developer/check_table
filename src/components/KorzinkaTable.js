import React from "react";
import {connect} from 'react-redux';

const KorzinkaTable = ({korzinka, obidinet}) => {

    return (
        <div className='mt-5'>
            <h1>Korzinka: </h1>
            {
                korzinka.length > 0 ? (
                    <div className='table table-active'>
                        <thead>
                        <th>Id:</th>
                        <th>Name:</th>
                        </thead>
                        <tbody>
                        {korzinka.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td className='w-25'>
                                        {item.id}
                                    </td>
                                    <td className='w-25'>
                                        {item.name}
                                    </td>
                                </tr>
                            )
                        })}
                        {obidinet.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td className='w-25'>
                                        {item.id}
                                    </td>
                                    <td className='w-25'>
                                        {item.name}
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </div>) : (<p className='text-warning text-center'>There is not data</p>)
            }
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        korzinka: state.table.korzinka,
        obidinet: state.table.obidinet
    }
};

export default connect(mapStateToProps)(KorzinkaTable)
