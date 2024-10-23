import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      <Card>
        <CardHeader>
          <CardTitle>Agreement to Our Legal Terms</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            These Terms of Service govern your use of the online certificate issuance services provided by the Revenue Department of Bihar. By accessing or using our services, you agree to be bound by these Terms.
          </p>
          <h2 className="text-xl font-semibold">Use of Services</h2>
          <p>
            You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
          </p>
          <h2 className="text-xl font-semibold">Accuracy of Information</h2>
          <p>
            You are responsible for providing accurate and complete information when applying for certificates or using our services. Providing false or misleading information may result in the rejection of your application or revocation of issued certificates.
          </p>
          <h2 className="text-xl font-semibold">Intellectual Property</h2>
          <p>
            The content, features, and functionality of our services are owned by the Revenue Department of Bihar and are protected by copyright, trademark, and other intellectual property laws.
          </p>
          <h2 className="text-xl font-semibold">Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, the Revenue Department of Bihar shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
          </p>
          <h2 className="text-xl font-semibold">Changes to These Terms</h2>
          <p>
            We may revise these Terms from time to time. The most current version will always be posted on our website. By continuing to use our services after revisions become effective, you agree to be bound by the revised Terms.
          </p>
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at legal@certificateportal.gov.in.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}