"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar } from "@/components/ui/calendar";
import { Download, FileSpreadsheet } from "lucide-react";
import { DateRange } from "react-day-picker"; // Use react-day-picker's DateRange type

export default function ReportPage() {
  // Align with react-day-picker's DateRange type where from/to can be undefined
  const [dateRange, setDateRange] = useState<DateRange>({ from: undefined, to: undefined });
  const [reportType, setReportType] = useState("");

  const handleDateRangeChange = (range: DateRange | undefined) => {
    // Directly use the range from react-day-picker as it's already compatible
    setDateRange(range ?? { from: undefined, to: undefined });
  };

  const generateReport = () => {
    // In a real application, this would trigger an API call to generate the report
    console.log("Generating report:", reportType, dateRange);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Generate Reports</h1>
      <Card>
        <CardHeader>
          <CardTitle>Report Parameters</CardTitle>
          <CardDescription>Select the type of report and date range</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="reportType">Report Type</label>
            <Select value={reportType} onValueChange={setReportType}>
              <SelectTrigger id="reportType">
                <SelectValue placeholder="Select report type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="issuedCertificates">Issued Certificates</SelectItem>
                <SelectItem value="pendingApplications">Pending Applications</SelectItem>
                <SelectItem value="rejectedApplications">Rejected Applications</SelectItem>
                <SelectItem value="revenueGenerated">Revenue Generated</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label>Date Range</label>
            <Calendar selected={dateRange} onSelect={handleDateRangeChange} />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={generateReport} className="w-full">Generate Report</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Report Name</TableHead>
                <TableHead>Generated On</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Issued Certificates - Oct 2023</TableCell>
                <TableCell>2023-11-01</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Revenue Report - Q3 2023</TableCell>
                <TableCell>2023-10-15</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            <FileSpreadsheet className="mr-2 h-4 w-4" />
            Export All to Excel
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
