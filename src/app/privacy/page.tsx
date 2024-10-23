import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <Card>
        <CardHeader>
          <CardTitle>Our Commitment to Your Privacy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Revenue Department of Bihar is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our online certificate issuance services.
          </p>
          <h2 className="text-xl font-semibold">Information We Collect</h2>
          <p>
            We collect personal information that you provide directly to us, such as your name, address, email address, phone number, and any other information you submit when applying for certificates or using our services.
          </p>
          <h2 className="text-xl font-semibold">How We Use Your Information</h2>
          <ul className="list-disc pl-6">
            <li>To process your certificate applications</li>
            <li>To communicate with you about your applications and services</li>
            <li>To improve our services and user experience</li>
            <li>To comply with legal obligations</li>
          </ul>
          <h2 className="text-xl font-semibold">Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.
          </p>
          <h2 className="text-xl font-semibold">Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us using the information provided in the Contact Us section.
          </p>
          <h2 className="text-xl font-semibold">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@certificateportal.gov.in.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}