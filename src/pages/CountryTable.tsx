import { use } from 'react';
import { fetchData } from '../utils/FetchData';
type Country = {
  iso_code: string;
  data: {
    co2: number;
    co2_per_capita: number;
    year: number;
    population: number;
  }[];
};
type Tag = 'co2' | 'co2_per_capita';

const dataPromise = fetchData();
export default function CounrtyTable() {
  const tags: Tag[] = ['co2', 'co2_per_capita'];
  const data: Record<string, Country> = use(dataPromise);

  console.log(data);
  return (
    <>
      {data && (
        <section className="table">
          <div className="table__container">
            <table>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Year</th>
                  <th>ISO</th>
                  <th>Population</th>
                  <th>Co2</th>
                  <th>Co2_per_capita</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(data).map(([key, value]) => {
                  const LastYear = data[key].data.length - 1;
                  return (
                    <tr key={key}>
                      <td>{key}</td>
                      <td>{value.data[LastYear].year || 'N/A'}</td>
                      <td>{data[key].iso_code || 'N/A'}</td>
                      <td>{data[key].data[LastYear].population || 'N/A'}</td>
                      {tags.map((tag) => {
                        if (value.data[LastYear][tag]) {
                          return <td key={tag}>{value.data[LastYear][tag]}</td>;
                        } else {
                          return <td key={tag}>N/A</td>;
                        }
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </>
  );
}
