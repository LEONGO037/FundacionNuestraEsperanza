import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GlobalProvider } from "@/context/GlobalContext";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO
export const metadata = {
  title: {
    template: '%s | Fundación Nuestra Esperanza',
    default: 'Fundación Nuestra Esperanza | Apoyo a niños con cáncer',
  },
  description:
    "Fundación Nuestra Esperanza apoya a niños, niñas y adolescentes de escasos recursos con cáncer y a sus familias en Bolivia, a través del albergue Casa Esperanza y programas gratuitos de apoyo integral.",
  openGraph: {
    title: "Fundación Nuestra Esperanza",
    description: "Organización dedicada a mejorar la calidad de vida de niños con cáncer en Bolivia.",
    url: "https://fundacion-nuestra-esperanza.cloud",
    siteName: "Fundación Nuestra Esperanza",
    locale: "es_BO",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" async></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== "undefined") {
                window.addEventListener("load", function() {
                  if (window.netlifyIdentity) {
                    window.netlifyIdentity.on("login", function() {
                      document.location.href = "/admin/";
                    });
                  }
                });
              }
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <GlobalProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </GlobalProvider>
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
      </body>
    </html>
  );
}