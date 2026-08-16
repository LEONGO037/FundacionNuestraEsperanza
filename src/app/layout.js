import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { GlobalProvider } from "@/context/GlobalContext";

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
      <body className="min-h-full flex flex-col">
        <GlobalProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
        </GlobalProvider>
      </body>
    </html>
  );
}