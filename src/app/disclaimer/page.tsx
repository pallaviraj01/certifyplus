import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Disclaimer</h1>
      <Card>
        <CardHeader>
          <CardTitle>Important Notice</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
          </p>
          <h2 className="text-xl font-semibold">No Guarantee</h2>
          <p>
            The Revenue Department of Bihar does not guarantee the accuracy, completeness, or usefulness of any information on the website and will not be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
          </p>
          <h2 className="text-xl font-semibold">External Links</h2>
          <p>
            Through this website, you may be able to link to other websites which are not under the control of the Revenue Department of Bihar. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
          </p>
          <h2 className="text-xl font-semibold">Errors and Omissions</h2>
          <p>
            Every effort is made to keep the website up and running smoothly. However, the Revenue Department of Bihar takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
          </p>
          <h2 className="text-xl font-semibold">Professional Advice</h2>
          <p>
            The information on this website is not intended to be a substitute for professional advice. Always seek the advice of qualified professionals with any questions you may have regarding your certificates or legal matters.
          </p>
          <h2 className="text-xl font-semibold">Changes to This Disclaimer</h2>
          <p>
            We may update this Disclaimer from time to time. We will notify you of any changes by posting the new Disclaimer on this page.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}