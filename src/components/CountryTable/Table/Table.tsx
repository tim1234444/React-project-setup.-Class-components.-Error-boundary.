import { memo } from 'react';
import type { Country, Tag } from '../../../type/type';
import TableRow from '../TableRow/TableRow';

type Props = {
  data: Record<string, Country>;
  selectedTags: Tag[];
};
function Table({ data, selectedTags }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>country</th>
          <th>ISO</th>
          {selectedTags.map((tag) => (
            <th key={tag}>{tag}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.entries(data).map(([key, value]) => {
          const YearInfo = value.yearInfo;

          return (
            <tr key={key}>
              <td>{key}</td>

              <td>{data[key].iso_code || 'N/A'}</td>

              {selectedTags.map((tag) => {
                return (
                  <TableRow
                    key={tag + '_' + key}
                    value={YearInfo?.[tag] || 'N/A'}
                  ></TableRow>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default memo(Table);
