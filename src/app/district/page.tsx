"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const performanceData = [
  { block: "Block A", processed: 45, pending: 12 },
  { block: "Block B", processed: 38, pending: 8 },
  { block: "Block C", processed: 52, pending: 15 },
  { block: "Block D", processed: 31, pending: 7 },
];

export default function DistrictDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">District Dashboard</h1>
          <div className="mt-2">
            <Select defaultValue="mumbai">
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select district" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="pune">Pune</SelectItem>
                <SelectItem value="nagpur">Nagpur</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button>Generate Report</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Blocks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Officers Assigned</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Processing Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92.5%</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Block Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <XAxis dataKey="block" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="processed" fill="hsl(var(--primary))" name="Processed" />
                <Bar dataKey="pending" fill="hsl(var(--muted))" name="Pending" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Block-wise Status</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Block Name</TableHead>
                <TableHead>Total Applications</TableHead>
                <TableHead>Processing Rate</TableHead>
                <TableHead>Officers</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { name: "Block A", total: 245, rate: "94%", officers: 8, status: "normal" },
                { name: "Block B", total: 189, rate: "87%", officers: 6, status: "warning" },
                { name: "Block C", total: 312, rate: "91%", officers: 10, status: "normal" },
              ].map((block) => (
                <TableRow key={block.name}>
                  <TableCell className="font-medium">{block.name}</TableCell>
                  <TableCell>{block.total}</TableCell>
                  <TableCell>{block.rate}</TableCell>
                  <TableCell>{block.officers}</TableCell>
                  <TableCell>
                    <Badge
                      variant={block.status === "normal" ? "default" : "secondary"}
                    >
                      {block.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}