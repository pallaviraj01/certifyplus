'use client'

import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function FilterSearch() {
  const [district, setDistrict] = useState('')
  const [certificateType, setCertificateType] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = () => {
    console.log('Searching with:', { district, certificateType, searchQuery })
    // Implement search logic here
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <Select value={district} onValueChange={setDistrict}>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Select District" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="districtA">District A</SelectItem>
            <SelectItem value="districtB">District B</SelectItem>
            <SelectItem value="districtC">District C</SelectItem>
          </SelectContent>
        </Select>
        <Select value={certificateType} onValueChange={setCertificateType}>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Certificate Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="caste">Caste Certificate</SelectItem>
            <SelectItem value="income">Income Certificate</SelectItem>
            <SelectItem value="residence">Residence Certificate</SelectItem>
          </SelectContent>
        </Select>
        <Input 
          className="w-full md:w-[300px]" 
          placeholder="Search..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <Button onClick={handleSearch}>Search</Button>
    </div>
  )
}