import React, {useState} from "react";
import {connect} from 'react-redux';

import {addObidinet, addKorzinka, removeTable} from "../redux/table/tableAction";



const MainTable = ({addObidinet, addKorzinka, removeTable}) => {
    const [contentMine, setContentMine] = useState([
        {id: 101, name: "Clothes", selected: false},
        {id: 102, name: "Sneakers", selected: false},
        {id: 103, name: "Fruits", selected: false},
        {id: 104, name: "Furnitures", selected: false},
        {id: 105, name: "Sofa", selected: false},
        {id: 106, name: "Car", selected: false},
        {id: 107, name: "Cap", selected: false},
        {id: 108, name: "Boot", selected: false},
        {id: 109, name: "Shirt", selected: false},
    ]);

    const addToObidinet = () => {
        contentMine.map(data => {
            if (data.selected){
                addObidinet(data);
                data.selected=false;
            }
            return data
        })
    };

    const addToKorzinka = () => {
        contentMine.map(data => {
            if (data.selected){
                addKorzinka(data);
                data.selected=false;
            }
            return data
        })
    };


    return (
        <div>
            <div className='table table-bordered'>
                <thead>
                    <th>
                        <input
                            className='form-control form-check'
                            type="checkbox"
                            onChange={e => {
                                let checked = e.target.checked;
                                setContentMine(contentMine.map(data => {
                                    data.selected=checked;
                                    return data
                                }))
                            }}
                        />
                    </th>
                    <th>Id:</th>
                    <th>Name:</th>
                </thead>
                <tbody>
                {contentMine.map(item => {
                    return (
                        <tr key={item.id}>
                            <td className='w-25'>
                                <input
                                    type="checkbox"
                                    checked={item.selected}
                                    onChange={(e) => {
                                        let checked = e.target.checked;
                                        setContentMine(contentMine.map(data => {
                                            if (item.id === data.id){
                                                data.selected=checked
                                            }
                                            return data
                                        }))
                                    }}
                                    className='form-check form-control'/>
                            </td>
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
            </div>
            <div className='d-flex justify-content-around'>
                <button onClick={addToObidinet} className='btn btn-primary'>Obidinet</button>
                <button onClick={addToKorzinka} className='btn btn-success'>Korzinka</button>
                <button onClick={removeTable} className='btn btn-danger'>Remove</button>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return{
        obidinet: state.table.obidinet
    }
};

export default connect(mapStateToProps, {addKorzinka, addObidinet, removeTable})(MainTable)
