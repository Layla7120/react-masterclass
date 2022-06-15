import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoinHistory } from "./api";
import { ChartProps, fixpoint2, IHistorical } from "./Chart";

const Table = styled.table`
  text-align: center;
  caption {
    margin-bottom: 20px;
    font-weight: 600;
  }

  th {
    text-transform: uppercase;
    font-weight: 500;
    padding: 10px;
    border: 1px solid ${props => props.theme.tableLineColor};
  }
  td {
    text-transform: uppercase;
    padding: 10px;
    border: 1px solid ${props => props.theme.tableLineColor};
  }
`;

export const Price = ({ coinId }: ChartProps) => {
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
        <Table>
          <caption> Recent Price Data</caption>
          <tr>
            <th>Date</th>
            <th>open</th>
            <th>high</th>
            <th>low</th>
            <th>close</th>
          </tr>
          {data?.map(price => (
            <>
              <tr>
                <td>{price.time_open.slice(2, 10)}</td>
                <td> {fixpoint2(price.open)} </td>
                <td> {fixpoint2(price.high)} </td>
                <td> {fixpoint2(price.low)} </td>
                <td> {fixpoint2(price.close)} </td>
              </tr>
            </>
          ))}
        </Table>
      )}
    </div>
  );
};

export default Price;
