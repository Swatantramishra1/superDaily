import React from 'react';
import NODATFOUND from '../NoDataFound/NoDataFoundComponent';

import './Main.css';
class MainComponent extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        
        const CONTENT = this.props.listData.length > 0 ? this.props.listData.map((dt) => <div className="flex card">
            <img className="card-image" src={dt.res_image} alt={dt.res_name} srcset="" />
            <div className="flex card-details">
                <h3 className="card-header-text">
                    {dt.res_name}
                </h3>
                <h5 className="card-sub-header-text">{dt.res_cusines.join(',')}</h5>
                <div className="divider"></div>
                <div className="flex card-footer">

                    <span>
                        <span className="star-text"><i className="fa fa-star"></i> {dt.res_rating}</span></span>
                    <span>{dt.d_time} Min</span>
                </div>
            </div>
        </div>) : <NODATFOUND />

        return (
            <div className="Main">
                {CONTENT}
            </div>
        )
    }
}

export default MainComponent;