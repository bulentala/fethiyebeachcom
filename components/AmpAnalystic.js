import React from "react";
import { GA_TRACKING_ID } from "../lib/ampAnalystic";

const AmpAnalytics = () => {
  return (
    <>
      <amp-analytics
        type='googleanalytics'
        id='analytics1'
        data-credentials='include'
      >
        <script
          type='application/json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              vars: {
                account: GA_TRACKING_ID,
                gtag_id: GA_TRACKING_ID,
                config: {
                  GA_TRACKING_ID: { groups: "default" },
                },
              },
              triggers: {
                trackPageview: {
                  on: "visible",
                  request: "pageview",
                },
              },
            }),
          }}
        />
      </amp-analytics>
    </>
  );
};
export default AmpAnalytics;
