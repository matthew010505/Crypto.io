import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders={
    'X-RapidAPI-Key': '1ae0af36eamshb474afe5863e37cp115776jsnd9a6b77d1af7',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl='https://coinranking1.p.rapidapi.com';
const createRequest=(url)=>({url,headers:cryptoApiHeaders})

export const cryptoApi=createApi({
    reducerPath:"cryptoApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:()=>createRequest("/coins")
        })
    })
});

export const{
    useGetCryptosQuery,
}=cryptoApi;





/*const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
    headers: {
      'X-RapidAPI-Key': '1ae0af36eamshb474afe5863e37cp115776jsnd9a6b77d1af7',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };*/