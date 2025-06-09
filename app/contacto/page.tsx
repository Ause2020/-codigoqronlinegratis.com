import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { ContactForm } from './components';

export const metadata: Metadata = {
  title: 'Contacto | CodigoQROnlineGratis.com',
  description: 'Contáctanos para resolver dudas sobre nuestro generador de códigos QR gratuito. Soporte técnico, consultas comerciales y sugerencias.',
  keywords: 'contacto, soporte, ayuda QR, consultas, generador código QR, atención cliente',
  robots: 'index, follow',
  openGraph: {
    title: 'Contacto | CodigoQROnlineGratis.com',
    description: 'Contáctanos para resolver dudas sobre nuestro generador de códigos QR gratuito.',
    type: 'website',
    locale: 'es_ES',
  },
  alternates: {
    canonical: 'https://codigoqronlinegratis.com/contacto'
  }
};

export default function Contacto() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-4 mb-4">
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Volver al Generador</span>
            </Link>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <MessageCircle className="w-8 h-8 text-indigo-600" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Contacto
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ¿Tienes alguna pregunta o sugerencia? Estamos aquí para ayudarte
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Formulario de Contacto */}
            <ContactForm />

            {/* Información de Contacto */}
            <div className="space-y-6">
              
              {/* FAQ Rápidas */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Preguntas frecuentes
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">¿Es realmente gratis?</h4>
                    <p className="text-gray-600 text-sm">Sí, nuestro generador es 100% gratuito sin límites.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">¿Tiempo de respuesta?</h4>
                    <p className="text-gray-600 text-sm">Respondemos lo antes posible.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">¿Colaboraciones?</h4>
                    <p className="text-gray-600 text-sm">Abiertos a partnerships y colaboraciones.</p>
                  </div>
                </div>

                <Link
                  href="/faq"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium mt-4"
                >
                  Ver todas las FAQ
                  <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <p className="text-gray-300 text-sm">
              <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              {' · '}
              <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
              {' · '}
              <Link href="/ejemplos" className="hover:text-white transition-colors">Ejemplos</Link>
              {' · '}
              <Link href="/politica-privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link>
              {' · '}
              <Link href="/terminos-uso" className="hover:text-white transition-colors">Términos de Uso</Link>
            </p>
            <p className="text-gray-400 text-xs mt-2">
              © 2024 CodigoQROnlineGratis.com - Todos los derechos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 