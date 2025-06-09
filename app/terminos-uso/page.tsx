import type { Metadata } from "next"
import { QrCode, FileText, Shield, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Términos de Uso | Generador QR - CodigoQRonlineGratis.com",
  description: "Términos y condiciones de uso del generador de códigos QR gratuito online de CodigoQRonlineGratis.com",
  robots: "index, follow",
  openGraph: {
    title: "Términos de Uso | Generador QR",
    description: "Términos de uso y condiciones de servicio de CodigoQRonlineGratis.com.",
    url: "https://codigoqronlinegratis.com/terminos-uso",
  },
}

export default function TerminosUso() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b" role="banner">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <QrCode className="h-8 w-8 text-indigo-600" aria-hidden="true" />
              <h1 className="text-2xl font-bold text-gray-900">Generador QR</h1>
            </div>
            <nav className="hidden md:flex space-x-6" role="navigation">
              <a href="/" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Inicio
              </a>
              <a href="/#generador" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Generador QR
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-8">
            <FileText className="h-8 w-8 text-indigo-600" aria-hidden="true" />
            <h1 className="text-3xl font-bold text-gray-900">Términos de Uso</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Aceptación de los Términos</h2>
              <p className="text-gray-700 mb-4">
                Al acceder y utilizar <strong>CodigoQRonlineGratis.com</strong>, aceptas estar sujeto a estos 
                términos de uso. Si no estás de acuerdo con alguno de estos términos, no debes usar nuestro 
                servicio de generador de código QR.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Descripción del Servicio</h2>
              <p className="text-gray-700 mb-4">
                Ofrecemos un generador de código QR gratuito que permite crear códigos QR para diversos tipos 
                de contenido como URLs, texto, WhatsApp, redes sociales y más.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Servicio completamente gratuito</li>
                <li>Sin límites en la generación de códigos QR</li>
                <li>No requiere registro ni información personal</li>
                <li>Procesamiento local en tu navegador</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Uso Responsable</h2>
              <p className="text-gray-700 mb-4">
                Te comprometes a usar nuestro generador de código QR de manera responsable y legal:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>No crear códigos QR con contenido ilegal, ofensivo o malicioso</li>
                <li>No usar el servicio para actividades fraudulentas o engañosas</li>
                <li>Respetar los derechos de propiedad intelectual de terceros</li>
                <li>No intentar sobrecargar o dañar nuestros sistemas</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Propiedad Intelectual</h2>
              <p className="text-gray-700 mb-4">
                Los códigos QR generados son de tu propiedad. El diseño, código y contenido de 
                CodigoQRonlineGratis.com están protegidos por derechos de autor.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Limitación de Responsabilidad</h2>
              <p className="text-gray-700 mb-4">
                El servicio se proporciona "tal como está". No garantizamos que el servicio esté libre de 
                errores o que funcione sin interrupciones.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Modificaciones</h2>
              <p className="text-gray-700 mb-4">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios 
                entrarán en vigor inmediatamente después de su publicación.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Contacto</h2>
              <p className="text-gray-700 mb-4">
                Si tienes preguntas sobre estos términos de uso o necesitas aclaraciones sobre nuestros servicios, 
                puedes contactarnos a través de los siguientes medios:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li><strong>Formulario de contacto:</strong> <a href="/contacto" className="text-indigo-600 hover:text-indigo-800">https://codigoqronlinegratis.com/contacto</a></li>
              </ul>
            </section>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <a 
                href="/" 
                className="inline-flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                <QrCode className="h-5 w-5" aria-hidden="true" />
                <span>Volver al Generador QR</span>
              </a>
              <a 
                href="/politica-privacidad" 
                className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-700 transition-colors"
              >
                <Shield className="h-5 w-5" aria-hidden="true" />
                <span>Política de Privacidad</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} CodigoQRonlineGratis.com - Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
} 