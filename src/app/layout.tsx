import Script from "next/script";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Estudio Velasco Abogados",
  description: "Asesoría Legal desde 1998",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.className} ${playfair.variable} antialiased`}
      >
        <Script id="smooth-scroll" strategy="afterInteractive">
          {`
            document.addEventListener("click", function(e) {
              const link = e.target.closest('a[href^="#"]');
              if (!link) return;

              const id = link.getAttribute("href").substring(1);
              const target = document.getElementById(id);
              if (!target) return;

              e.preventDefault();

              const start = window.scrollY;
              const end = target.getBoundingClientRect().top + window.scrollY - 90;
              const duration = 700;
              let startTime = null;

              function easeInOut(t) {
                return t < 0.5
                  ? 2 * t * t
                  : 1 - Math.pow(-2 * t + 2, 2) / 2;
              }

              function animateScroll(currentTime) {
                if (!startTime) startTime = currentTime;
                const time = currentTime - startTime;
                const progress = Math.min(time / duration, 1);
                const eased = easeInOut(progress);
                window.scrollTo(0, start + (end - start) * eased);
                if (time < duration) requestAnimationFrame(animateScroll);
              }

              requestAnimationFrame(animateScroll);
            });
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
