"use client"

import { useState, useEffect, useRef } from "react"
import { QrCode, Download, Palette } from "lucide-react"
import QRCode from "qrcode"
import Link from 'next/link'

export default function GeneradorCodigoQR() {
  const [inputText, setInputText] = useState("")
  const [qrDataURL, setQrDataURL] = useState("")
  const [qrColor, setQrColor] = useState("#000000")
  const [bgColor, setBgColor] = useState("#ffffff")
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const generateQR = async () => {
    if (!inputText.trim()) return

    try {
      const canvas = canvasRef.current
      if (canvas) {
        await QRCode.toCanvas(canvas, inputText, {
          width: 256,
          margin: 2,
          color: {
            dark: qrColor,
            light: bgColor,
          },
        })
        const dataURL = canvas.toDataURL("image/png")
        setQrDataURL(dataURL)
      }
    } catch (error) {
      console.error("Error al generar código QR:", error)
    }
  }

  useEffect(() => {
    if (inputText.trim()) {
      generateQR()
    }
  }, [inputText, qrColor, bgColor])

  const downloadQR = () => {
    if (qrDataURL) {
      const link = document.createElement("a")
      link.download = "codigo-qr-personalizado.png"
      link.href = qrDataURL
      link.click()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2">
            <QrCode className="h-8 w-8 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-900">Generador QR</h2>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Generador de Código QR Gratis Online
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
            Crea códigos QR personalizados gratis, rápido y sin límites
          </h2>
          <p className="text-lg text-gray-500 mb-8 max-w-3xl mx-auto">
            <strong>CodigoQRonlineGratis.com</strong> - El mejor generador de códigos QR en español. 
            Genera códigos QR para URLs, texto y más. 100% gratuito, sin registro y con descarga instantánea.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Formulario del Generador */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
              <QrCode className="h-5 w-5" />
              <span>Crear Código QR Personalizado</span>
            </h3>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="qr-input" className="block text-sm font-medium text-gray-700 mb-2">
                  Ingresa tu texto o URL:
                </label>
                <textarea
                  id="qr-input"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="https://mi-sitio-web.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="qr-color" className="block text-sm font-medium text-gray-700 mb-2">
                    Color del QR:
                  </label>
                  <input
                    id="qr-color"
                    type="color"
                    value={qrColor}
                    onChange={(e) => setQrColor(e.target.value)}
                    className="w-full h-10 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="bg-color" className="block text-sm font-medium text-gray-700 mb-2">
                    Color de fondo:
                  </label>
                  <input
                    id="bg-color"
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="w-full h-10 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Resultado del QR */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Tu Código QR</h3>
            
            <div className="text-center">
              <canvas
                ref={canvasRef}
                className="mx-auto mb-4 border border-gray-200 rounded"
                style={{ display: qrDataURL ? "block" : "none" }}
              />
              
              {!qrDataURL && (
                <div className="w-64 h-64 mx-auto bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <QrCode className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Tu código QR aparecerá aquí</p>
                  </div>
                </div>
              )}

              {qrDataURL && (
                <button
                  onClick={downloadQR}
                  className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  <Download className="h-4 w-4" />
                  <span>Descargar QR</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Información SEO */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Generador QR</h2>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Generador de Código QR Profesional y Gratuito
          </h3>
          <p className="text-gray-700 mb-4">
            <strong>CodigoQRonlineGratis.com</strong> es la herramienta líder en España y Latinoamérica para
            <strong> crear códigos QR gratis online</strong>. Nuestro generador de código QR permite crear códigos
            QR personalizados para cualquier propósito, desde promocionar tu negocio hasta compartir información
            personal de manera rápida y segura.
          </p>
          <p className="text-gray-700">
            Los códigos QR generados son de alta calidad, compatibles con todos los lectores de QR y se pueden
            descargar instantáneamente en formato PNG. Perfectos para uso comercial, personal o educativo.
          </p>
        </div>
      </main>

      {/* Footer con enlaces legales */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-4">Generador QR Online</h3>
              <p className="text-gray-300 text-sm">
                La herramienta más fácil y rápida para generar códigos QR personalizados de forma gratuita.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Enlaces Útiles</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                    Preguntas Frecuentes
                  </Link>
                </li>
                <li>
                  <Link href="/ejemplos" className="text-gray-300 hover:text-white transition-colors">
                    Ejemplos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/politica-privacidad" className="text-gray-300 hover:text-white transition-colors">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/terminos-uso" className="text-gray-300 hover:text-white transition-colors">
                    Términos de Uso
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="text-gray-300 hover:text-white transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-300 text-sm">
            <p>© 2024 CodigoQROnlineGratis.com. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
