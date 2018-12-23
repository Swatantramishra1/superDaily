import React from 'react';
import { DebounceInput } from 'react-debounce-input';
import './Search.css';
class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const RECENT_SEARCH = this.props.propsHandlerFooter.searchHistory.map(dt => <li onClick={ () => this.props.propsHandlerFooter.filterData(dt)}> {dt}</li>)
        return (
            <div className="flex Search">
                <div className="flex header-section">
                    <form className="form-search">
                        <DebounceInput
                            minLength={2}
                            debounceTimeout={300}
                            placeholder="Search.."
                            autofocus
                            onChange={event => this.props.propsHandlerFooter.filterData(event.target.value)} />
                        <i className="fa fa-search"></i>
                        <span onClick={() => this.props.propsHandlerFooter.clickFilter(false)}>X</span>
                    </form>
                    <p className="recent-search">Recent Search</p>
                    <div className="search-history">
                        <ul>
                            {RECENT_SEARCH}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchComponent;