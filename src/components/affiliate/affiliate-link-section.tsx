
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Copy } from "lucide-react";

export function AffiliateLinkSection() {
  const [copied, setCopied] = useState(false);
  const affiliateLink = "https://example.com/?ref=your-unique-id";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(affiliateLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Your Affiliate Link</h2>
        <p className="text-muted-foreground mt-2">Share this link to start earning commissions</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Copy Your Unique Link</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input value={affiliateLink} readOnly />
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
    </section>
  );
}
