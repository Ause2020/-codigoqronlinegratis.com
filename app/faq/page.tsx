import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes - FAQ | CodigoQROnlineGratis.com',
  description: 'Encuentra respuestas a las preguntas más frecuentes sobre nuestro generador de códigos QR gratuito. Aprende a crear, personalizar y descargar códigos QR.',
  keywords: 'FAQ, preguntas frecuentes, código QR, ayuda, soporte, tutorial QR, generador QR',
  robots: 'index, follow',
  openGraph: {
    title: 'Preguntas Frecuentes - FAQ | CodigoQROnlineGratis.com',
    description: 'Encuentra respuestas a las preguntas más frecuentes sobre nuestro generador de códigos QR gratuito.',
    type: 'website',
    locale: 'es_ES',
  },
  alternates: {
    canonical: 'https://codigoqronlinegratis.com/faq'
  }
};

export default function FAQ() {
  const faqs = [
    {
      question: "¿Es completamente gratis generar códigos QR?",
      answer: "Sí, nuestro generador de códigos QR es 100% gratuito. No necesitas registrarte, no hay límites de uso y puedes descargar todos los códigos QR que necesites sin costo alguno."
    },
    {
      question: "¿Qué tipos de información puedo convertir en código QR?",
      answer: "Puedes generar códigos QR para URLs/sitios web, texto plano, números de teléfono, direcciones de email, información de WiFi, ubicaciones GPS, datos de contacto (vCard), eventos de calendario y mucho más."
    },
    {
      question: "¿Los códigos QR generados tienen fecha de caducidad?",
      answer: "No, los códigos QR estáticos generados en nuestra plataforma no caducan nunca. Una vez creados, funcionarán indefinidamente mientras la información que contienen siga siendo válida y accesible."
    },
    {
      question: "¿En qué formato puedo descargar los códigos QR?",
      answer: "Actualmente ofrecemos descarga en formato PNG de alta calidad (256x256 píxeles). Este formato es compatible con la mayoría de aplicaciones y proporciona excelente calidad para impresión y uso digital."
    },
    {
      question: "¿Puedo personalizar los colores del código QR?",
      answer: "¡Por supuesto! Puedes personalizar tanto el color del código QR como el color de fondo. Simplemente selecciona los colores que prefieras usando nuestros selectores de color antes de generar tu código QR."
    },
    {
      question: "¿Funciona en dispositivos móviles?",
      answer: "Sí, nuestro generador de códigos QR está completamente optimizado para dispositivos móviles. Puedes crear y descargar códigos QR desde tu smartphone o tablet sin problemas."
    },
    {
      question: "¿Necesito instalar algún software?",
      answer: "No necesitas instalar nada. Nuestro generador funciona completamente en tu navegador web. Solo necesitas acceso a internet y un navegador moderno (Chrome, Firefox, Safari, Edge)."
    },
    {
      question: "¿Qué aplicaciones pueden leer los códigos QR generados?",
      answer: "Los códigos QR generados son compatibles con todas las aplicaciones de lectura de QR estándar, incluyendo la cámara nativa de smartphones iOS y Android, así como aplicaciones dedicadas como QR Code Reader, Barcode Scanner, etc."
    },
    {
      question: "¿Puedo usar los códigos QR para fines comerciales?",
      answer: "Sí, puedes usar los códigos QR generados para cualquier propósito, incluyendo uso comercial, marketing, tarjetas de visita, menús de restaurantes, promociones, etc. No hay restricciones de uso."
    },
    {
      question: "¿Cómo puedo saber si mi código QR funciona correctamente?",
      answer: "Después de generar tu código QR, te recomendamos probarlo con diferentes aplicaciones de lectura QR en varios dispositivos para asegurarte de que funciona correctamente antes de imprimirlo o compartirlo."
    },
    {
      question: "¿Qué tamaño debería tener mi código QR para imprimirlo?",
      answer: "Para impresión, recomendamos un tamaño mínimo de 2x2 cm (0.8x0.8 pulgadas). Para uso digital o pantallas, nuestro formato de 256x256 píxeles es ideal. El código debe ser lo suficientemente grande para que sea fácil de escanear."
    },
    {
      question: "¿Puedo editar un código QR después de crearlo?",
      answer: "Los códigos QR estáticos no se pueden editar una vez generados. Si necesitas cambiar la información, deberás generar un nuevo código QR. Para contenido que cambia frecuentemente, considera usar códigos QR dinámicos."
    },
    {
      question: "¿Hay límite en la cantidad de texto que puedo incluir?",
      answer: "Técnicamente, los códigos QR pueden almacenar hasta 4,296 caracteres alfanuméricos. Sin embargo, a mayor cantidad de información, más complejo será el código y más difícil de escanear. Recomendamos mantener el contenido conciso."
    },
    {
      question: "¿Es seguro usar este generador de códigos QR?",
      answer: "Sí, es completamente seguro. No almacenamos la información que introduces para generar los códigos QR. Todo el procesamiento se realiza localmente en tu navegador, garantizando tu privacidad y seguridad."
    }
  ];

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
              <HelpCircle className="w-8 h-8 text-indigo-600" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Preguntas Frecuentes
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Encuentra respuestas a las preguntas más comunes sobre nuestro generador de códigos QR gratuito
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introducción */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Todo lo que necesitas saber sobre códigos QR
            </h2>
            <p className="text-gray-700 mb-4">
              En <strong>CodigoQROnlineGratis.com</strong> queremos que tengas la mejor experiencia 
              usando nuestro generador de códigos QR. Aquí encontrarás respuestas detalladas a las 
              preguntas más frecuentes de nuestros usuarios.
            </p>
            <p className="text-gray-700">
              Si no encuentras la respuesta que buscas, no dudes en contactarnos. Estamos aquí 
              para ayudarte a crear los mejores códigos QR para tus necesidades.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center group-open:bg-indigo-600 transition-colors">
                        <svg 
                          className="w-4 h-4 text-indigo-600 group-open:text-white group-open:rotate-45 transition-all duration-200" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </div>
                    </div>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-indigo-600 rounded-lg shadow-lg p-8 mt-12 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              ¿Listo para crear tu código QR?
            </h2>
            <p className="text-indigo-100 mb-6">
              Ahora que conoces todo sobre nuestros códigos QR, ¡es hora de crear el tuyo!
            </p>
            <Link
              href="/"
              className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Crear Código QR Gratis
            </Link>
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