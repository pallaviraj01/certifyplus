'use client';

import { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type DistrictData = {
  id: string;
  name: string;
  applications: number;
  processed: number;
  pending: number;
  status: 'In Progress' | 'Completed' | 'Backlog';
};

const DistrictTable = () => {
  const [data, setData] = useState<DistrictData[]>([]);
  const [filter, setFilter] = useState<string>('');
  const [sorting, setSorting] = useState<'asc' | 'desc' | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  useEffect(() => {
    const fetchData = () => {
      const statuses: ('In Progress' | 'Completed' | 'Backlog')[] = [
        'In Progress',
        'Completed',
        'Backlog',
      ];
      const newData: DistrictData[] = Array.from({ length: 20 }, (_, i) => ({
        id: `district-${i + 1}`,
        name: `District ${String.fromCharCode(65 + i)}`,
        applications: Math.floor(Math.random() * 1000),
        processed: Math.floor(Math.random() * 800),
        pending: Math.floor(Math.random() * 200),
        status: statuses[Math.floor(Math.random() * statuses.length)],
      }));
      setData(newData);
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  // Filter logic
  const filteredData = data.filter((district) =>
    district.name.toLowerCase().includes(filter.toLowerCase())
  );

  // Sorting logic
  const sortedData = sorting
    ? [...filteredData].sort((a, b) => {
        if (sorting === 'asc') {
          return a.name.localeCompare(b.name);
        }
        return b.name.localeCompare(a.name);
      })
    : filteredData;

  // Pagination logic
  const paginatedData = sortedData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter districts..."
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <button
                  onClick={() => setSorting(sorting === 'asc' ? 'desc' : 'asc')}
                >
                  District/Subdivision {sorting === 'asc' ? '↑' : '↓'}
                </button>
              </TableHead>
              <TableHead>Applications</TableHead>
              <TableHead>Processed</TableHead>
              <TableHead>Pending</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length ? (
              paginatedData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.applications}</TableCell>
                  <TableCell>{row.processed}</TableCell>
                  <TableCell>{row.pending}</TableCell>
                  <TableCell>{row.status}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage * rowsPerPage >= sortedData.length}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default DistrictTable;
