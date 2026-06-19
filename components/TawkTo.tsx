"use client";

import Script from "next/script";
import { siteConfig } from "@/lib/siteConfig";

export default function TawkTo() {
  const src = siteConfig.tawkSrc;
  if (!src) return null;

  return (
    <Script id="tawk-to" strategy="lazyOnload">{`
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true; s1.src='${src}'; s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
      })();
    `}</Script>
  );
}
