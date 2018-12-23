import React, { Component } from 'react';
import HeaderComponent from './Components/Header/HeaderComponent';
import MainComponent from './Components/Main/MainComponent';
import FooterComponent from './Components/Footer/FooterComponent';
import { connect } from 'react-redux';
import { setFilterData, getData, reSetResData, setSearchHistory,setDeliveryTime, setRating } from './Redux/Actions/mainActions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.clickFilter = this.clickFilter.bind(this);
    this.filterData = this.filterData.bind(this);
    this.onClickDeliveryTime = this.onClickDeliveryTime.bind(this);
    this.onClickRating = this.onClickRating.bind(this);
    
  }


  clickFilter(data) {
    this.props.setFilterData(data);
    this.filterData("");
  }

  componentDidMount() {
    this.props.getData();
  }


  filterData(dt) {
    const SEARCHED_DATA = this.props.MAINREDUCER.resData.map ((d,index) => {
      if (d.res_name.toLocaleLowerCase().includes(dt.toLocaleLowerCase())) {
        return d;
      }
    }).filter((dt) => dt !== undefined || dt !== null)

    let hist = this.props.MAINREDUCER.searchHistory;
    if (hist.indexOf(dt) === -1) {
      if (dt !== "") {
        hist.unshift(dt)
      }

    }
    hist.length = 10;

    this.props.setSearchHistory(hist);
    this.props.reSetResData(SEARCHED_DATA);

  }

  onClickDeliveryTime(data) {
    if (data === 1) {
      const SEARCHED_DATA = this.props.MAINREDUCER.resData.sort((a, b) => a.d_time - b.d_time);
      this.props.reSetResData(SEARCHED_DATA);
    } else {
      const SEARCHED_DATA = this.props.MAINREDUCER.resData.sort((a, b) => b.d_time - a.d_time);
      this.props.reSetResData(SEARCHED_DATA);
    }

    this.props.setDeliveryTime(data);
  }

  onClickRating(data) {
    if (data === 1) {
      const SEARCHED_DATA = this.props.MAINREDUCER.resData.sort((a, b) => a.res_rating - b.res_rating);
      this.props.reSetResData(SEARCHED_DATA);
    } else {
      const SEARCHED_DATA = this.props.MAINREDUCER.resData.sort((a, b) => b.res_rating - a.res_rating);
      this.props.reSetResData(SEARCHED_DATA);
    }

    this.props.setRating(data);
  }

  render() {
    const PROPSDATA = {
      isFilterOpen: this.props.MAINREDUCER.isFilterOpen,
      clickFilter: this.clickFilter,
      filterData: this.filterData,
      searchHistory: this.props.MAINREDUCER.searchHistory,
      onClickDeliveryTime:this.onClickDeliveryTime,
      deliveryStatus:this.props.MAINREDUCER.setDeliveryTIme,
      onClickRating:this.onClickRating,
      setRating:this.props.MAINREDUCER.setRating
    }
    const LIST_DATA = this.props.MAINREDUCER.resDataCopy.filter((dt) => dt !== undefined && dt !== null);
    return (
      <div className="wrapper">
        <HeaderComponent propsHandler={PROPSDATA} />
        <MainComponent listData={LIST_DATA} />
        <FooterComponent propsHandlerFooter={PROPSDATA} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

const mapDispatchToProps = {
  setFilterData,
  getData,
  reSetResData,
  setSearchHistory,
  setDeliveryTime,
  setRating
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
