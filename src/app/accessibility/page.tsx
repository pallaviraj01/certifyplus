import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AccessibilityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Accessibility Statement</h1>
      <Card>
        <CardHeader>
          <CardTitle>Our Commitment to Accessibility</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Revenue Department of Bihar is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
          </p>
          <h2 className="text-xl font-semibold">Conformance Status</h2>
          <p>
            The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Our website is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.
          </p>
          <h2 className="text-xl font-semibold">Accessibility Features</h2>
          <ul className="list-disc pl-6">
            <li>Consistent navigation structure throughout the website</li>
            <li>Use of ARIA landmarks to identify regions of a page</li>
            <li>Text alternatives for non-text content</li>
            <li>Proper heading structure</li>
            <li>Color contrast compliant with WCAG 2.1 level AA</li>
            <li>Keyboard accessibility for all functionality</li>
          </ul>
          <h2 className="text-xl font-semibold">Limitations</h2>
          <p>
            Despite our efforts to ensure accessibility of the Certificate Portal, there may be some limitations. Below is a description of known limitations, and potential solutions. Please contact us if you observe an issue not listed below.
          </p>
          <ul className="list-disc pl-6">
            <li>Some older PDF documents are not fully accessible. We are working on replacing these documents with accessible versions.</li>
            <li>Some video content may not have captions. We are working on adding captions to all video content.</li>
          </ul>
          <h2 className="text-xl font-semibold">Feedback</h2>
          <p>
            We welcome your feedback on the accessibility of the Certificate Portal. Please let us know if you encounter accessibility barriers:
          </p>
          <ul className="list-disc pl-6">
            <li>Phone: 1800-XXX-XXXX</li>
            <li>E-mail: accessibility@certificateportal.gov.in</li>
            <li>Visitor address: Revenue Department, Main Secretariat, Patna, Bihar - 800015</li>
          </ul>
          <p>
            We try to respond to feedback within 3 business days.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}