import { fetchCoinHistory } from "./api";
import { useQuery } from "react-query";
import ReactApexChart from "react-apexcharts";

export interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

export interface ChartProps {
  coinId: string;
  theme?: boolean;
}

export const fixpoint2 = (num: number) => {
  return num.toFixed(2);
};

export const Chart = ({ coinId, theme }: ChartProps) => {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 5000,
    }
  );

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ReactApexChart
          type="candlestick"
          series={[
            {
              name: "Price",
              data:
                data?.map(price => {
                  return {
                    x: price.time_open.slice(2, 10),
                    y: [
                      fixpoint2(price.open),
                      fixpoint2(price.high),
                      fixpoint2(price.low),
                      fixpoint2(price.close),
                    ],
                  };
                }) ?? [],
            },
          ]}
          options={{
            theme: {
              mode: theme ? "dark" : "light",
            },
            chart: {
              height: 350,
              width: 500,
              background: "transparent",
            },
            title: {
              text: "CandleStick Chart",
              align: "left",
            },
            yaxis: {
              labels: {
                formatter: value => value.toFixed(),
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default Chart;
