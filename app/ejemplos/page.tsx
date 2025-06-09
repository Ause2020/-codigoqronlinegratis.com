import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Globe, Mail, Phone, Wifi, MapPin, Calendar, User, QrCode } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ejemplos de Códigos QR | CodigoQROnlineGratis.com',
  description: 'Descubre todos los tipos de códigos QR que puedes crear: URLs, WiFi, contactos, ubicaciones, eventos y más. Ejemplos prácticos y casos de uso.',
  keywords: 'ejemplos códigos QR, tipos QR, QR WiFi, QR contacto, QR ubicación, QR URL, casos de uso QR',
  robots: 'index, follow',
  openGraph: {
    title: 'Ejemplos de Códigos QR | CodigoQROnlineGratis.com',
    description: 'Descubre todos los tipos de códigos QR que puedes crear con ejemplos prácticos.',
    type: 'website',
    locale: 'es_ES',
  },
  alternates: {
    canonical: 'https://codigoqronlinegratis.com/ejemplos'
  }
};

export default function Ejemplos() {
  const ejemplos = [
    {
      icon: Globe,
      titulo: "Sitios Web y URLs",
      descripcion: "Comparte enlaces de forma rápida y elegante",
      ejemplo: "https://mi-negocio.com",
      casos: [
        "Tarjetas de visita digitales",
        "Menús de restaurantes online",
        "Enlaces a redes sociales",
        "Promociones y ofertas especiales"
      ],
      color: "bg-blue-500"
    },
    {
      icon: Wifi,
      titulo: "Redes WiFi",
      descripcion: "Comparte tu WiFi sin revelar la contraseña",
      ejemplo: "WIFI:T:WPA;S:MiWiFi;P:mipassword;H:false;;",
      casos: [
        "Hoteles y restaurantes",
        "Oficinas y espacios de coworking",
        "Eventos y conferencias",
        "Hogares para invitados"
      ],
      color: "bg-green-500"
    },
    {
      icon: Phone,
      titulo: "Números de Teléfono",
      descripcion: "Permite llamadas directas con un escaneo",
      ejemplo: "tel:+34600123456",
      casos: [
        "Tarjetas de visita",
        "Publicidad impresa",
        "Servicio al cliente",
        "Contacto de emergencia"
      ],
      color: "bg-orange-500"
    },
    {
      icon: Mail,
      titulo: "Correos Electrónicos",
      descripcion: "Facilita el envío de emails con asunto predefinido",
      ejemplo: "mailto:info@empresa.com?subject=Consulta&body=Hola,",
      casos: [
        "Formularios de contacto",
        "Soporte técnico",
        "Consultas comerciales",
        "Feedback de productos"
      ],
      color: "bg-red-500"
    },
    {
      icon: User,
      titulo: "Información de Contacto (vCard)",
      descripcion: "Comparte datos de contacto completos",
      ejemplo: "BEGIN:VCARD\nVERSION:3.0\nFN:Juan Pérez\nORG:Mi Empresa\nTEL:+34600123456\nEMAIL:juan@empresa.com\nEND:VCARD",
      casos: [
        "Networking profesional",
        "Tarjetas de visita digitales",
        "Directorios empresariales",
        "Eventos de networking"
      ],
      color: "bg-purple-500"
    },
    {
      icon: MapPin,
      titulo: "Ubicaciones GPS",
      descripcion: "Comparte ubicaciones exactas para navegación",
      ejemplo: "geo:40.7128,-74.0060?q=Nueva York",
      casos: [
        "Ubicación de eventos",
        "Direcciones de negocios",
        "Puntos de encuentro",
        "Ubicaciones turísticas"
      ],
      color: "bg-indigo-500"
    },
    {
      icon: Calendar,
      titulo: "Eventos de Calendario",
      descripcion: "Crea eventos que se añaden automáticamente al calendario",
      ejemplo: "BEGIN:VEVENT\nSUMMARY:Reunión\nDTSTART:20241215T100000Z\nDTEND:20241215T110000Z\nEND:VEVENT",
      casos: [
        "Invitaciones a eventos",
        "Recordatorios de citas",
        "Conferencias y seminarios",
        "Eventos corporativos"
      ],
      color: "bg-pink-500"
    },
    {
      icon: QrCode,
      titulo: "Texto Plano",
      descripcion: "Cualquier texto que necesites compartir",
      ejemplo: "¡Bienvenido a nuestro restaurante! Menú especial del día disponible.",
      casos: [
        "Mensajes promocionales",
        "Instrucciones rápidas",
        "Códigos de descuento",
        "Información adicional"
      ],
      color: "bg-gray-500"
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
              <QrCode className="w-8 h-8 text-indigo-600" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Ejemplos de Códigos QR
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Descubre todos los tipos de códigos QR que puedes crear y cómo usarlos en diferentes situaciones
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Introducción */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Qué puedes hacer con códigos QR?
            </h2>
            <p className="text-gray-700 mb-4">
              Los códigos QR son mucho más versátiles de lo que imaginas. Con nuestro generador gratuito, 
              puedes crear códigos para prácticamente cualquier tipo de información digital.
            </p>
            <p className="text-gray-700">
              Aquí te mostramos los tipos más populares con ejemplos reales de cómo usarlos en tu negocio, 
              eventos o vida personal.
            </p>
          </div>

          {/* Grid de Ejemplos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {ejemplos.map((ejemplo, index) => {
              const IconComponent = ejemplo.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`${ejemplo.color} p-4`}>
                    <div className="flex items-center space-x-3">
                      <IconComponent className="w-6 h-6 text-white" />
                      <h3 className="text-xl font-bold text-white">
                        {ejemplo.titulo}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">
                      {ejemplo.descripcion}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Ejemplo:</h4>
                      <code className="bg-gray-100 p-2 rounded text-sm text-gray-800 block break-all">
                        {ejemplo.ejemplo}
                      </code>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Casos de uso:</h4>
                      <ul className="space-y-1">
                        {ejemplo.casos.map((caso, casoIndex) => (
                          <li key={casoIndex} className="text-gray-600 text-sm flex items-start">
                            <span className="text-indigo-600 mr-2">•</span>
                            {caso}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tips y Consejos */}
          <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Consejos para crear códigos QR efectivos
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">✅ Mejores prácticas:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Mantén el contenido conciso y claro</li>
                  <li>• Prueba el código en varios dispositivos</li>
                  <li>• Usa colores con buen contraste</li>
                  <li>• Incluye instrucciones claras para escanear</li>
                  <li>• Considera el contexto de uso</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">❌ Evita estos errores:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Códigos demasiado pequeños para escanear</li>
                  <li>• Colores con poco contraste</li>
                  <li>• Enlaces rotos o temporales</li>
                  <li>• Información desactualizada</li>
                  <li>• Sobrecargar con demasiada información</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-indigo-600 rounded-lg shadow-lg p-8 mt-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              ¿Listo para crear tu código QR personalizado?
            </h2>
            <p className="text-indigo-100 mb-6">
              Ahora que conoces todas las posibilidades, ¡crea el código QR perfecto para tus necesidades!
            </p>
            <Link
              href="/"
              className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              <QrCode className="w-5 h-5 mr-2" />
              Crear Código QR Ahora
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
              <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
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