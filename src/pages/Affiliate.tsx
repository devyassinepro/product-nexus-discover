
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/affiliate/hero-section";
import { BenefitsSection } from "@/components/affiliate/benefits-section";
import { EarningsCalculator } from "@/components/affiliate/earnings-calculator";
import { AffiliateStats } from "@/components/affiliate/affiliate-stats";
import { AffiliateLinkSection } from "@/components/affiliate/affiliate-link-section";
import { ReferredUsersTable } from "@/components/affiliate/referred-users-table";

const Affiliate = () => {
  const [isAffiliate] = useState(false); // This would come from your auth system

  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <HeroSection isAffiliate={isAffiliate} />
      <BenefitsSection />
      <EarningsCalculator />
      {isAffiliate && (
        <>
          <AffiliateStats />
          <AffiliateLinkSection />
          <ReferredUsersTable />
        </>
      )}
    </div>
  );
};

export default Affiliate;
