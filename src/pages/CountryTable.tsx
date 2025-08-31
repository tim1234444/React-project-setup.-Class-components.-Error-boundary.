import { use, useCallback, useMemo, useState } from 'react';
import { fetchData } from '../utils/FetchData';
import type { Country, Tag } from '../type/type';
import Table from '../components/CountryTable/Table/Table';
import { Modal } from '../components/CountryTable/Modal/Modal';
import SelectTags from '../components/CountryTable/SelectTags/SelectTags';
import Header from '../components/Header';

const dataPromise = fetchData();
export default function CounrtyTable() {
  const data: Record<string, Country> = use(dataPromise);
  const [sortedData, setSortedData] = useState<Record<string, Country>>({});

  const [isOpen, SetIsOpen] = useState(false);
  const [year, setYear] = useState<number>(2023);
  const [tags, SetTags] = useState<Tag[]>([
    'year',
    'population',
    'co2',
    'co2_per_capita',
  ]);
  const [search, setSearch] = useState('');
  const [ascending, setAscending] = useState(false);

  const filteredByCountry = useMemo(() => {
    return Object.fromEntries(
      Object.entries(data).filter(([country]) =>
        country.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  }, [data, search]);
  const filteredByYear = useMemo(() => {
    return Object.fromEntries(
      Object.entries(filteredByCountry).map(([key, country]) => {
        const yearInfo = country.data.find((el) => el.year === year);
        return [key, { ...country, yearInfo }];
      }),
    );
  }, [filteredByCountry, year]);
  const handleSortPopulation = useCallback(() => {
    const sorted = Object.fromEntries(
      Object.entries(filteredByYear).sort((a, b) => {
        const popA = a[1].yearInfo?.population || 0;
        const popB = b[1].yearInfo?.population || 0;
        return ascending ? popA - popB : popB - popA;
      }),
    );
    setSortedData(sorted);
    setAscending(!ascending);
  }, [filteredByYear, ascending]);

  const handleChangeYear = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = +e.target.value;
      if (value >= 1750 && value <= 2023) {
        setSortedData({});
        setYear(value);
      }
    },
    [],
  );
  const handleChangeCountry = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSortedData({});
      setSearch(e.target.value);
    },
    [],
  );
  const toggleTag = useCallback((tag: Tag, checked: boolean) => {
    SetTags((prev) => {
      if (checked) {
        return prev.includes(tag) ? prev : [...prev, tag];
      } else {
        return prev.filter((t) => t !== tag);
      }
    });
  }, []);
  return (
    <>
      <Header
        ascending={ascending}
        SetIsOpen={SetIsOpen}
        handleChangeSort={handleSortPopulation}
        handleChangeCountry={handleChangeCountry}
        handleChangeYear={handleChangeYear}
      ></Header>

      <section className="table">
        <div className="table__container">
          <Table
            selectedTags={tags}
            data={Object.keys(sortedData).length ? sortedData : filteredByYear}
          ></Table>
        </div>
      </section>

      <Modal isOpen={isOpen} handleClose={() => SetIsOpen(false)}>
        <SelectTags selectedTags={tags} toggleTag={toggleTag}></SelectTags>
      </Modal>
    </>
  );
}
