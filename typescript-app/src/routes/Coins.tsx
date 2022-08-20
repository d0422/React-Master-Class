import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "./api";
import { Helmet } from "react-helmet";
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "./atoms";
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
const CoinsList = styled.ul``;
const Coin = styled.li`
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 15px;
  font-size: 30px;
  a {
    display: flex;
    align-items: center;

    transition: color 0.2s ease-in;
    display: block;
    padding: 20px;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;
const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 48px;
`;
const Img = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}
const Btn = styled.button`
  font-size: 20px;
  border-radius: 25px;
  margin-top: 20px;
  margin-left: 30px;
  border-style: solid;
  border-color: white;
  width: 100px;
  height: 50px;
`;
function Coins() {
  const setDark = useSetRecoilState(isDarkAtom);
  const { isLoading, data } = useQuery<CoinInterface[]>(
    ["allCoins"],
    fetchCoins
  );
  return (
    <Container>
      <Helmet>
        <title>코인</title>
      </Helmet>
      <Header>
        <Title>코인</Title>
        <Btn
          onClick={() => {
            setDark((prev) => !prev);
            console.log("c");
          }}
        >
          Toggle mode
        </Btn>
      </Header>
      <CoinsList>
        {isLoading
          ? "Loading..."
          : data?.slice(0, 100).map((coin) => (
              <Coin key={coin.id}>
                <Link to={`/${coin.id}`} state={coin}>
                  <Img
                    src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                    alt=""
                  ></Img>
                  {coin.name} &rarr;
                </Link>
              </Coin>
            ))}
      </CoinsList>
    </Container>
  );
}
export default Coins;
