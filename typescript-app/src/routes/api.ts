const URL = `https://api.coinpaprika.com/v1`;
export async function fetchCoins() {
  return fetch(`${URL}/coins`).then((response) => response.json());
}
export async function fetchCoininfo(coinId?: string) {
  return fetch(`${URL}/coins/${coinId}`).then((response) => response.json());
}
export async function fetchCoinPrice(coinId?: string) {
  return fetch(`${URL}/tickers/${coinId}`).then((response) => response.json());
}
export async function fetchCoinHistory(coinId?: string) {
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
  ).then((response) => response.json());
}
