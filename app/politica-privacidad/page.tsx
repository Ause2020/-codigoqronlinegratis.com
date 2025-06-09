import type { Metadata } from "next"
import { QrCode, Shield, FileText, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Política de Privacidad | Generador QR - CodigoQRonlineGratis.com",
  description: "Política de privacidad y protección de datos de CodigoQRonlineGratis.com - Generador de códigos QR gratuito",
  robots: "index, follow",
  openGraph: {
    title: "Política de Privacidad | Generador QR",
    description: "Política de privacidad de CodigoQRonlineGratis.com. Protegemos tu privacidad.",
    url: "https://codigoqronlinegratis.com/politica-privacidad",
  },
}

export default function PoliticaPrivacidad() {
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
            <Shield className="h-8 w-8 text-indigo-600" aria-hidden="true" />
            <h1 className="text-3xl font-bold text-gray-900">Política de Privacidad</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Información que Recopilamos</h2>
              <p className="text-gray-700 mb-4">
                En <strong>CodigoQRonlineGratis.com</strong>, respetamos tu privacidad. Nuestro generador de código QR 
                funciona completamente en tu navegador, por lo que no almacenamos ni procesamos la información que 
                ingresas para crear códigos QR.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>No guardamos el contenido de los códigos QR que generas</li>
                <li>No requerimos registro ni información personal</li>
                <li>Podemos recopilar datos de navegación anónimos para mejorar el servicio</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Cookies y Tecnologías Similares</h2>
              <p className="text-gray-700 mb-4">
                Utilizamos cookies esenciales para el funcionamiento básico del sitio web. No utilizamos cookies 
                de seguimiento o publicitarias.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Seguridad de Datos</h2>
              <p className="text-gray-700 mb-4">
                Al procesar todo localmente en tu navegador, garantizamos que tu información privada nunca sale 
                de tu dispositivo cuando usas nuestro generador de código QR gratis.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Contacto</h2>
              <p className="text-gray-700 mb-4">
                Si tienes preguntas sobre esta política de privacidad o sobre el tratamiento de tus datos personales, 
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
                href="/terminos-uso" 
                className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-700 transition-colors"
              >
                <FileText className="h-5 w-5" aria-hidden="true" />
                <span>Términos de Uso</span>
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