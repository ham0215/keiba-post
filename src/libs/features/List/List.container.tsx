import { Header } from './components/Header';
import { NextRace } from './components/NextRace';
import { Table } from './components/Table';

export function List({ selectedTag }: { selectedTag: string }) {
  return (
    <>
      <Header tag={selectedTag} />
      <NextRace tag={selectedTag} />
      <Table tag={selectedTag} />
    </>
  );
}
