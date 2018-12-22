import React from 'react';
import './Footer.css';
class FooterComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="flex Footer">
                <button className="flex" onClick={() => this.props.propsHandlerFooter.clickFilter(true)}>
                    <i class="fa fa-search"></i>
                    Explore
               </button>
                <button className="flex" onClick={() => this.props.propsHandlerFooter.onClickRating(this.props.propsHandlerFooter.setRating === 1 ? -1 : 1)}>
                    <i class="fa fa-star"></i>
                    <span>
                        <i class="fa fa-arrow-down" style={this.props.propsHandlerFooter.setRating === -1 ? { display: 'none' } : { display: 'block' }} aria-hidden="true"></i>
                        <i class="fa fa-arrow-up" style={this.props.propsHandlerFooter.setRating === -1 ? { display: 'block' } : { display: 'none' }} aria-hidden="true"></i>
                        Rating
                    </span>
                </button>
                <button className="flex" onClick={() => this.props.propsHandlerFooter.onClickDeliveryTime(this.props.propsHandlerFooter.deliveryStatus === 1 ? -1 : 1)}>
                    <i class="fa fa-clock-o"></i>
                    <span>
                        <i class="fa fa-arrow-down" style={this.props.propsHandlerFooter.deliveryStatus === -1 ? { display: 'none' } : { display: 'block' }} aria-hidden="true"></i>
                        <i class="fa fa-arrow-up" style={this.props.propsHandlerFooter.deliveryStatus === -1 ? { display: 'block' } : { display: 'none' }} aria-hidden="true"></i>
                        Delivery Time
                    </span>
                </button>
            </div>
        )
    }
}

export default FooterComponent;