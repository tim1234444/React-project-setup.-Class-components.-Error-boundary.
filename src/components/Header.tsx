type Props = {
  ascending: boolean;
  SetIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleChangeSort: () => void;
  handleChangeCountry: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeYear: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function Header({
  ascending,
  SetIsOpen,
  handleChangeSort,
  handleChangeCountry,
  handleChangeYear,
}: Props) {
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
          <button className="sort-button" onClick={handleChangeSort}>
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
