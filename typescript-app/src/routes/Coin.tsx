import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link, useMatch } from "react-router-dom";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchCoininfo, fetchCoinPrice } from "./api";
import Chart from "./Chart";
import Price from "./Price";
import { Helmet } from "react-helmet";
import Back from "../components/Back";
interface IinfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}
interface IpriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}
interface Istate {
  state: {
    name: string;
    rank: number;
  };
}
const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 48px;
`;
const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;
const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`;
// interface Iparams{
//     coinId:string;
// }
type Iparams = {
  coinId: string;
};
interface ICoinParams {
  isDark: boolean;
}
function Coin({ isDark }: ICoinParams) {
  const { coinId } = useParams<Iparams>();
  const { state } = useLocation() as Istate;
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");
  const { isLoading: priceLoading, data: pricedata } = useQuery<IpriceData>(
    ["price", coinId],
    () => fetchCoinPrice(coinId)
  );
  const { isLoading: infoLoading, data: info } = useQuery<IinfoData>(
    ["info", coinId],
    () => fetchCoininfo(coinId),
    {
      refetchInterval: 10000,
    }
  );
  return (
    <Container>
      <Back></Back>
      <Helmet>
        <title>
          {state?.name ? state.name : infoLoading ? "Loading..." : info?.name}
        </title>
      </Helmet>
      <Header>
        <Title>
          {state?.name ? state.name : infoLoading ? "Loading..." : info?.name}
        </Title>
      </Header>
      {infoLoading && priceLoading ? (
        "Loading..."
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{info?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${info?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Price:</span>
              <span>{pricedata?.quotes?.USD?.price.toFixed(3)}</span>
            </OverviewItem>
          </Overview>
          <Description>{info?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total suply :</span>
              <span>{pricedata?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max suply :</span>
              <span>{pricedata?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>
          <Routes>
            <Route path="price" element={<Price coinId={coinId} />}></Route>
            <Route
              path="chart"
              element={<Chart coinId={coinId} isDark={isDark} />}
            ></Route>
          </Routes>
        </>
      )}
    </Container>
  );
}
export default Coin;
