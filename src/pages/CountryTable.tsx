import { use, useState } from 'react';
import { fetchData } from '../utils/FetchData';
import type { Country, Tag } from '../type/type';
import Table from '../components/CountryTable/Table/Table';
import { Modal } from '../components/CountryTable/Modal/Modal';
import SelectTags from '../components/CountryTable/SelectTags/SelectTags';
import Header from '../components/Header';

const dataPromise = fetchData();
export default function CounrtyTable() {
  const [isOpen, SetIsOpen] = useState(false);
  const [year, setYear] = useState<number>(0);

  const [tags, SetTags] = useState<Tag[]>([
    'year',
    'population',
    'co2',
    'co2_per_capita',
  ]);

  const data: Record<string, Country> = use(dataPromise);

  console.log(data);
  return (
    <>
      <Header SetIsOpen={SetIsOpen} setYear={setYear}></Header>

      <section className="table">
        <div className="table__container">
          <Table year={year} selectedTags={tags} data={data}></Table>
        </div>
      </section>

      <Modal isOpen={isOpen} handleClose={() => SetIsOpen(false)}>
        <SelectTags selectedTags={tags} SetTags={SetTags}></SelectTags>
      </Modal>
    </>
  );
}
