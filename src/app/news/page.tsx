import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const newsItems = [
  {
    title: "New Online Service Launched",
    date: "2023-10-15",
    description: "We are pleased to announce the launch of our new online service for applying for birth certificates.",
  },
  {
    title: "System Maintenance Notice",
    date: "2023-10-20",
    description: "The certificate portal will be undergoing maintenance on October 25th from 10 PM to 2 AM. We apologize for any inconvenience.",
  },
  {
    title: "Updated Document Requirements",
    date: "2023-10-22",
    description: "Please note that the document requirements for caste certificates have been updated. Check the application page for details.",
  },
  {
    title: "Holiday Notice",
    date: "2023-10-25",
    description: "Our offices will be closed on November 1st for the national holiday. Online services will remain available.",
  },
]

export default function NewsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">News & Updates</h1>
      <div className="space-y-4">
        {newsItems.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}