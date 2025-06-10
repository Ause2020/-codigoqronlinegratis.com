import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Generador de Código QR Gratis Online - CodigoQRonlineGratis.com",
  description: "Genera códigos QR gratis online. Crea códigos QR para URLs, texto, contactos, redes WiFi, teléfonos, eventos y más. Sin registro requerido.",
  keywords: ["generador QR", "código QR gratis", "QR online", "crear QR", "generar código QR", "QR generator"],
  authors: [{ name: "Generador QR" }],
  creator: "Generador QR",
  metadataBase: new URL('https://codigoqronlinegratis.com'),
  publisher: "CodigoQRonlineGratis.com",
  robots: "index, follow",
  openGraph: {
    title: "Generador de Código QR Gratis Online",
    description: "Genera códigos QR gratis online para URLs, texto, contactos y más. Sin registro requerido.",
    url: "https://codigoqronlinegratis.com",
    siteName: "Generador QR - CodigoQRonlineGratis.com",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Generador de Código QR Gratis Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Generador de Código QR Gratis Online",
    description: "Crea códigos QR personalizados gratis. Sin límites ni registro.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://codigoqronlinegratis.com",
    languages: {
      "es-ES": "https://codigoqronlinegratis.com",
      "es-MX": "https://codigoqronlinegratis.com/mx",
      "es-AR": "https://codigoqronlinegratis.com/ar",
      "es-CO": "https://codigoqronlinegratis.com/co",
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" dir="ltr">
      <head>
        <link rel="canonical" href="https://codigoqronlinegratis.com" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="geo.region" content="ES" />
        <meta name="geo.placename" content="España" />
        <meta name="language" content="Spanish" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="theme-color" content="#4F46E5" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Generador QR" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebApplication",
                name: "Generador QR - Generador de Código QR Gratis",
                url: "https://codigoqronlinegratis.com",
                description:
                  "Generador gratuito de códigos QR online. Crea códigos QR personalizados para URLs, texto, WhatsApp, redes sociales y más.",
                applicationCategory: "UtilityApplication",
                operatingSystem: "Web Browser",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "EUR",
                },
                featureList: [
                  "Generador de código QR gratuito",
                  "Códigos QR personalizables", 
                  "Soporte para URLs, texto, WhatsApp",
                  "Descarga en formato PNG",
                  "Sin límites ni registro",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "¿Cómo crear un código QR gratis online?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Para crear un código QR gratis, simplemente ingresa a CodigoQRonlineGratis.com, selecciona el tipo de contenido (URL, texto, WhatsApp, etc.), ingresa tu información, personaliza los colores si deseas y haz clic en 'Generar Código QR Gratis'. Podrás descargar tu código QR al instante en formato PNG."
                    }
                  },
                  {
                    "@type": "Question",
                    name: "¿Los códigos QR generados tienen fecha de vencimiento?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No, los códigos QR estáticos generados en nuestro generador de código QR no tienen fecha de vencimiento. Una vez creados, funcionarán indefinidamente siempre que la información que contienen siga siendo válida."
                    }
                  },
                  {
                    "@type": "Question", 
                    name: "¿Puedo personalizar el diseño de mi código QR?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Sí, nuestro generador de código QR permite personalizar los colores del código QR y del fondo. Puedes elegir cualquier color que desees manteniendo suficiente contraste para garantizar la legibilidad."
                    }
                  }
                ]
              }
            ]),
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
