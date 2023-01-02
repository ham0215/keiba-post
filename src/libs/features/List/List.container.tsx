import { useRouter } from 'next/router';
import { Header } from './components/Header';
import { NextRace } from './components/NextRace';
import { currentTag, tags } from 'data/KeibaCalendar';
import { Table } from './components/Table';

export function List() {
  const router = useRouter();
  const { tag } = router.query;
  const selectedTag = typeof tag === 'string' && tags.includes(tag) ? tag : currentTag;

  return (
    <>
      <Header tag={selectedTag} />
      <NextRace tag={selectedTag} />
      <Table tag={selectedTag} />
    </>
  );
}
