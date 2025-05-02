
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Copy } from "lucide-react";

export function AffiliateLinkSection() {
  const [copied, setCopied] = useState(false);
  const affiliateLink = "https://myapp.com/ref=XXXXX";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(affiliateLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Affiliate Link</CardTitle>
        <CardDescription>Share this unique link to start earning commissions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <Input value={affiliateLink} readOnly className="flex-1" />
          <Button onClick={copyToClipboard} variant="outline">
            {copied ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
