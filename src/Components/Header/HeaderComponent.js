import React from 'react';
import HeaderWrapper from './Header.style';
import SearchComponent from '../Search/SearchComponent';
class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const CONTENT = this.props.propsHandler.isFilterOpen ? <SearchComponent propsHandlerFooter={this.props.propsHandler} /> : window.screen.width > 768 ?
            <div>
                <div className="flex location-details">
                    <h3 className="head-location">Kondapur</h3>
                    <h5 className="sub-location">Masjid Banda Rd, Sai Pruthvi Enclave, Kondapur, Hyderabad, Telangana 500084, India</h5>
                </div>
                <i className="fa fa-search" onClick={() => this.props.propsHandler.clickFilter(true)}></i>
                <img className="logo-img" src="http://uploads.webflow.com/58a12822f703a9087cc36583/58a134936063a93654e4fff0_Logo.svg" alt="SuperDaily" />
            </div> : <div>
                <div className="flex location-details">
                    <h3 className="head-location">Kondapur</h3>
                    <h5 className="sub-location">Masjid Banda Rd, Sai Pruthvi Enclave, Kondapur, Hyderabad, Telangana 500084, India</h5>
                </div>
                <img className="logo-img" src="http://uploads.webflow.com/58a12822f703a9087cc36583/58a134936063a93654e4fff0_Logo.svg" alt="SuperDaily" />
            </div>
        return (
            <HeaderWrapper prospStyle={{ isFilterOpen: this.props.propsHandler.isFilterOpen }}>
                {CONTENT}
            </HeaderWrapper>
        )
    }
}

export default HeaderComponent;