import React from "react";
import {connect} from 'react-redux';

const ObedenitTable = ({obidinet}) => {
    return (
        <div className='mb-5'>
            <h1>Ajratilganlar: </h1>
            {
                obidinet.length > 0 ?
                <div className='table table-bordered'>
                    <thead>
                    <th>Id:</th>
                    <th>Name:</th>
                    </thead>
                    <tbody>
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
                </div> : <p className='text-center text-warning'>There is not data</p>
            }
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        obidinet: state.table.obidinet
    }
};

export default connect(mapStateToProps)(ObedenitTable)
