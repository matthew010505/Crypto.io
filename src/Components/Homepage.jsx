import React from 'react'
import millify from "millify";
import { Link } from 'react-router-dom';
import{Typography,Row,Col,Statistic} from "antd";

import { useGetCryptosQuery } from '../Services/cryptoApi';
import {Cryptocurrencies,News} from "../Components"

const{Title}=Typography
 const Homepage = () => {
  const {data,isFetching}=useGetCryptosQuery();
  const globaldata=data?.data?.stats;
  
  console.log(data);
  if (isFetching) return "Loading...";
  
  return (
    <>
    <Title className='heading' level={2}>World Crypto Hub</Title>
    <Row>
      <Col span={12}> <Statistic title='Total Cryptos' value={globaldata.total} /></Col>
      <Col span={12}> <Statistic title='Total Exchange' value={millify(globaldata.totalExchanges )} /></Col>
      <Col span={12}> <Statistic title='Total Marketcap' value={millify(globaldata.totalMarketCap )} /></Col>
      <Col span={12}> <Statistic title='Total 24 hr Volume' value={millify(globaldata.total24hVolume )} /></Col>
      <Col span={12}> <Statistic title='Total Markets' value={millify(globaldata.totalMarkets)} /></Col>

    </Row>
    <div className='home-heading-container'>
      <Title level={2} className='home-title'>Top CryptoCurrency in World</Title>
      <Title level={3} className='show-more'><Link to="/cryptocurrencies">Show More</Link></Title>
    </div>
    <Cryptocurrencies simplified/> {/*simplified prop is used here because we don't need full data of cryptocurrencies-only 10*/}

    <div className='home-heading-container'>
      <Title level={2} className='home-title'>Latest News</Title>
      <Title level={3} className='show-more'><Link to="/news">Show More</Link></Title>
    </div>
    <News simplified/>

    </>
  )
}
export default Homepage;
