
import { Card, Cards } from 'fumadocs-ui/components/card';
import { docs } from '@/utils/source';
import type { DocsPage } from '@/utils/source';

export function Category({ page }: { page: DocsPage; }): React.ReactElement {
  const filtered = docs
    .getPages()
    .filter(
      (item) =>
        item.file.dirname === page.file.dirname && item.file.name !== 'index',
    );

  return (
    <Cards>
      {filtered.map((item) => (
        <Card
          key={item.url}
          title={item.data.title}
          description={item.data.description ?? 'No Description'}
          href={item.url}
        />
      ))}
    </Cards>
  );
}
