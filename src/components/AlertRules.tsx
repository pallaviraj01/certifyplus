'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
  metricType: z.string().min(1, { message: 'Metric type is required' }),
  threshold: z.number().min(1, { message: 'Threshold must be at least 1' }),
  district: z.string().min(1, { message: 'District is required' }),
})

export default function AlertRules() {
  const [rules, setRules] = useState<z.infer<typeof formSchema>[]>([])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      metricType: '',
      threshold: 0,
      district: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setRules([...rules, values])
    form.reset()
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Set Alert Rules</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="metricType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Metric Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a metric type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="pendingApplications">Pending Applications</SelectItem>
                    <SelectItem value="processingTime">Processing Time</SelectItem>
                    <SelectItem value="backlogPercentage">Backlog Percentage</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>Select the type of metric to monitor</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="threshold"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Threshold</FormLabel>
                <FormControl>
                  <Input type="number" {...field} onChange={e => field.onChange(+e.target.value)} />
                </FormControl>
                <FormDescription>Enter the threshold value for the alert</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="district"
            render={({ field }) => (
              <FormItem>
                <FormLabel>District</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a district" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="all">All Districts</SelectItem>
                    <SelectItem value="districtA">District A</SelectItem>
                    <SelectItem value="districtB">District B</SelectItem>
                    <SelectItem value="districtC">District C</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>Select the district to apply the alert rule</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Add Alert Rule</Button>
        </form>
      </Form>

      <div>
        <h3 className="text-xl font-semibold mb-4">Current Alert Rules</h3>
        <ul className="space-y-2">
          {rules.map((rule, index) => (
            <li key={index} className="bg-secondary p-4 rounded-md">
              {rule.metricType} &gt; {rule.threshold} in {rule.district}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}