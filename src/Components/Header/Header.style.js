import styled from 'styled-components';

const HeaderWrapper = styled.div`


    display:flex;
    border-bottom: ${props => props.prospStyle.isFilterOpen ? '1px solid rgba(46, 43, 43, 0.12)' : '1px solid rgba(46, 43, 43, 0.12)'};
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;

    div {
        display:flex;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
    div > .logo-img {
    height: 21px;
    margin-left: 15px;
}
.fa-search {
    cursor:pointer;
}

    div > .location-details {
    flex-direction: column;
    align-items: flex-start;
}

    div > .location-details > .head-location {
    font-size: 16px;
    color: #282c3f;
    font-weight: 600;
    text-transform: capitalize;
}
    div > .location-details > .sub-location {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 12px;
    margin-top: 2px;
    color: #7e808c;
    width: calc(100vw - 150px);
}

`

export default HeaderWrapper;