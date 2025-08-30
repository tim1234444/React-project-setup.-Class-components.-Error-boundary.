import { useState } from 'react';
import type { Country } from '../type/type';

type Props = {
  setYear: React.Dispatch<React.SetStateAction<number>>;
  SetIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  SetFilteredData: React.Dispatch<
    React.SetStateAction<Record<string, Country>>
  >;
  allCountry: Record<string, Country>;
  year: number;
};
export default function Header({
  setYear,
  SetIsOpen,
  SetFilteredData,
  allCountry,
 
  year
}: Props) {
  const [ascending, setAscending] = useState(false);
  const handleSort = () => {
    SetFilteredData((prev) => {
      const sortedEntries = Object.fromEntries(
        Object.entries(prev).sort((a, b) => {
          const popA =
            a[1].data.find((el: { year: number }) => el.year === year)
              ?.population || 0;
          const popB =
            b[1].data.find((el: { year: number }) => el.year === year)
              ?.population || 0;

          return ascending ? popA - popB : popB - popA;
        }),
      );

      return sortedEntries;
    });
    setAscending(!ascending);
  };
  const handleChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (+value >= 1750 && +value <= 2023) {
      setYear(+value);
    }
  };
  const handleChangeCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    SetFilteredData(() => {
      const filteredData = Object.fromEntries(
        Object.entries(allCountry).filter(([country]) =>
          country.toLowerCase().includes(value.toLowerCase()),
        ),
      );
      return filteredData;
    });
  };
  return (
    <header className="header">
      <div className="header__container">
        <button
          onClick={() => {
            SetIsOpen(true);
          }}
          className=""
        >
          Select additional fields
        </button>
        <div className="year-input-container">
          <label htmlFor="year"></label>
          Enter year ({1750}-{2023}):
          <input
            className="year-input"
            id="year"
            type="number"
            min={1750}
            max={2023}
            onChange={handleChangeYear}
          />
        </div>
        <div className="search-country">
          <label htmlFor="country">Enter country name</label>
          <input
            onChange={handleChangeCountry}
            id="country"
            type="text"
            className="search-country__input"
          />
        </div>
        <div className="sortByPopulation">
          <button className="sort-button" onClick={handleSort}>
            Sort by Population
            <span className={`sort-arrow ${ascending ? 'ascending' : ''}`}>
              ▲
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
