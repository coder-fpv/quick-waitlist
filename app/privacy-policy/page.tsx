import Link from "next/link";
import React from "react";
import Card from "@/components/Card";

const PrivacyPolicyPage = () => {
  return (
    <Card className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 p-4">
      <div className="max-w-screen-md w-full bg-black/30 backdrop-blur-md border border-purple-500/30 rounded-xl shadow-2xl overflow-hidden">
        <div className="flex flex-col items-center p-8 md:p-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Privacy Policy
          </h1>
          <div className="bg-white/10 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 mb-8 w-full">
            <p className="text-cyan-300 text-center">
              {`At ${process.env.NEXT_PUBLIC_SITE_NAME || 'our company'}, we take your privacy seriously. Here's what you need to know:

1. Data Collection: We only collect essential information like your email address for our waitlist.
2. Usage: Your data is used solely for sending updates about our launch and services.
3. Protection: We employ industry-standard security measures to protect your information.
4. No Sharing: We do not sell or share your personal data with third parties.
5. Opt-Out: You can unsubscribe from our communications at any time.
6. Updates: This policy may be updated, and we'll notify you of any significant changes.

By joining our waitlist, you agree to these terms. We're committed to respecting your privacy while keeping you informed about ${process.env.NEXT_PUBLIC_SITE_NAME || 'our exciting developments'}.`}
            </p>
          </div>
          <Link
            href="/"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:from-pink-500 hover:to-purple-500 hover:shadow-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default PrivacyPolicyPage;
