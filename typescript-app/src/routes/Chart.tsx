import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "./api";
import ApexChart from "react-apexcharts";
interface ChartProps {
  coinId?: string;
  isDark: boolean;
}
interface IHistoricalData {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}
const Chart = ({ coinId, isDark }: ChartProps) => {
  const { isLoading, data } = useQuery<IHistoricalData[]>(
    ["chart", coinId],
    () => fetchCoinHistory(coinId)
  );
  console.log(data);
  return (
    <>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <>
          <ApexChart
            type="line"
            series={[
              {
                name: "chart",
                data: data?.map((price) => parseFloat(price.close)) ?? [],
              },
            ]}
            options={{
              theme: {
                mode: isDark ? "dark" : "light",
              },
              chart: {
                height: 300,
                width: 500,
                toolbar: {
                  show: false,
                },
                background: "transparent",
              },
              grid: { show: false },
              stroke: {
                curve: "smooth",
                width: 4,
              },
              yaxis: {
                show: false,
              },
              xaxis: {
                axisBorder: { show: false },
                axisTicks: { show: false },
                labels: { show: false },
                type: "datetime",
                categories: data?.map((date) => date.time_close),
              },
              fill: {
                type: "gradient",
                gradient: { gradientToColors: ["blue"], stops: [0, 100] },
              },
              colors: ["#0fbcf9"],
            }}
          ></ApexChart>
          <ApexChart
            type="candlestick"
            series={[
              {
                name: "ca",
                data: data?.map((p) => {
                  return [
                    p.time_close,
                    parseFloat(p.open),
                    parseFloat(p.high),
                    parseFloat(p.low),
                    parseFloat(p.close),
                  ];
                }) as any,
              },
            ]}
            options={{
              theme: {
                mode: isDark ? "dark" : "light",
              },
              chart: {
                height: 300,
                width: 500,
                toolbar: {
                  show: false,
                },
                background: "transparent",
              },
              grid: { show: false },
              stroke: {
                curve: "smooth",
                width: 4,
              },
              yaxis: {
                show: false,
              },
              xaxis: {
                axisBorder: { show: false },
                axisTicks: { show: false },
                labels: { show: false },
                type: "datetime",
                categories: data?.map((date) => date.time_close),
              },

              colors: ["#0fbcf9"],
            }}
          ></ApexChart>
        </>
      )}
    </>
  );
};

export default Chart;
