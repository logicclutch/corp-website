"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Contact {
  id: number
  name: string
  email: string
  company: string
  phone: string
  subject: string
  message: string
  status: string
  created_at: string
  updated_at: string
}

interface Analytics {
  total_drafts: number
  avg_completion: number
  abandoned_forms: number
  completed_forms: number
}

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [analytics, setAnalytics] = useState<Analytics | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        setError(null)

        // Fetch contacts
        const contactsRes = await fetch("/api/admin/contacts")
        const contactsData = await contactsRes.json()

        if (!contactsData.success) {
          throw new Error(contactsData.error || "Failed to fetch contacts")
        }

        setContacts(contactsData.data || [])

        // Fetch analytics
        const analyticsRes = await fetch("/api/admin/analytics")
        const analyticsData = await analyticsRes.json()

        if (!analyticsData.success) {
          throw new Error(analyticsData.error || "Failed to fetch analytics")
        }

        setAnalytics(analyticsData.data || null)
      } catch (err) {
        console.error("Error fetching admin data:", err)
        setError(err instanceof Error ? err.message : "An unknown error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleString()
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Contact Management</h1>

      <Tabs defaultValue="contacts">
        <TabsList className="mb-6">
          <TabsTrigger value="contacts">Contact Submissions</TabsTrigger>
          <TabsTrigger value="analytics">Form Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="contacts">
          <Card>
            <CardHeader>
              <CardTitle>Contact Submissions</CardTitle>
              <CardDescription>View and manage all contact form submissions.</CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="text-center py-10">Loading contacts...</div>
              ) : error ? (
                <div className="text-center py-10 text-red-500">{error}</div>
              ) : contacts.length === 0 ? (
                <div className="text-center py-10">No contact submissions found.</div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {contacts.map((contact) => (
                        <TableRow key={contact.id}>
                          <TableCell className="font-medium">{contact.name}</TableCell>
                          <TableCell>{contact.email}</TableCell>
                          <TableCell>{contact.subject}</TableCell>
                          <TableCell>
                            <Badge variant={contact.status === "new" ? "default" : "outline"}>{contact.status}</Badge>
                          </TableCell>
                          <TableCell>{formatDate(contact.created_at)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Form Analytics</CardTitle>
              <CardDescription>Insights about form completion and abandonment.</CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="text-center py-10">Loading analytics...</div>
              ) : error ? (
                <div className="text-center py-10 text-red-500">{error}</div>
              ) : !analytics ? (
                <div className="text-center py-10">No analytics data available.</div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-2xl font-bold">{analytics.total_drafts}</div>
                      <p className="text-sm text-muted-foreground">Total Form Starts</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-2xl font-bold">{analytics.avg_completion}%</div>
                      <p className="text-sm text-muted-foreground">Average Completion</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-2xl font-bold">{analytics.abandoned_forms}</div>
                      <p className="text-sm text-muted-foreground">Abandoned Forms</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-2xl font-bold">{analytics.completed_forms}</div>
                      <p className="text-sm text-muted-foreground">Completed Forms</p>
                    </CardContent>
                  </Card>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
