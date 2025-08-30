type Props = {
  setYear: React.Dispatch<React.SetStateAction<number>>;
  SetIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Header({ setYear, SetIsOpen }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (+value >= 1750 && +value <= 2023) {
      setYear(+value);
    }
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
            onChange={handleChange}
          />
        </div>
      </div>
    </header>
  );
}
