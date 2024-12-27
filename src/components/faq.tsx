import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    pregunta: "¿Cómo se registra el ingreso y la salida de personas?",
    respuesta:
      "Puedes registrar el ingreso y la salida de personas a través de un formulario sencillo en la aplicación, donde podrás seleccionar el tipo de entrada (paga, free, QR, etc.) y confirmar la salida.",
  },
  {
    pregunta: "¿Qué opciones tengo para clasificar los tipos de entrada?",
    respuesta:
      "La aplicación ofrece varias opciones para clasificar las entradas, incluyendo entradas pagas, gratuitas, con código QR y embajadoras.",
  },
  {
    pregunta: "¿Cómo puedo monitorear la ocupación en tiempo real?",
    respuesta:
      "La app proporciona una visualización en tiempo real del número actual de personas en el lugar, así como notificaciones cuando se alcanzan niveles críticos de ocupación.",
  },
  {
    pregunta: "¿Qué tipo de alertas puedo enviar desde la aplicación?",
    respuesta:
      "Puedes enviar alertas para situaciones como disturbios, intervención de autoridades, necesidad de ayuda adicional y más, utilizando un botón de alerta dedicado.",
  },
  {
    pregunta: "¿Cómo se gestionan las preguntas de monitoreo en la pista?",
    respuesta:
      "Puedes parametrizar preguntas sobre el ambiente en intervalos definidos y recibir respuestas rápidas sobre la acumulación de personas en diferentes áreas.",
  },
  {
    pregunta: "¿Es posible acceder a datos históricos de ocupación e ingresos?",
    respuesta:
      "Sí, la aplicación permite comparar los datos actuales con noches anteriores y analizar tendencias en el rendimiento.",
  },
  {
    pregunta: "¿Puedo usar la aplicación en múltiples locales?",
    respuesta:
      "Sí, la app permite gestionar y comparar múltiples locales desde un solo panel, facilitando el acceso a información relevante para cada uno.",
  },
  {
    pregunta: "¿Cómo funciona el chat interno?",
    respuesta:
      "El chat interno permite una comunicación efectiva entre usuarios de seguridad y visualizadores para responder a alertas o eventos en tiempo real, mejorando la coordinación del equipo.",
  },
  {
    pregunta: "¿Es fácil configurar la capacidad máxima del lugar?",
    respuesta:
      "Sí, puedes establecer fácilmente la capacidad máxima del lugar y recibir notificaciones cuando se alcance un porcentaje específico de ocupación.",
  },
  {
    pregunta: "¿La aplicación es compatible con dispositivos móviles?",
    respuesta:
      "La aplicación está diseño para ser compatible con dispositivos móviles y tablets, permitiendo un acceso fácil y rápido desde cualquier lugar.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="container mx-auto px-4 py-16">
      <h2 className="mb-16 text-center text-3xl font-bold">
        Preguntas frecuentes
      </h2>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqData.map((item, index) => (
          <AccordionItem key={`item-${index + 1}`} value={`item-${index + 1}`}>
            <AccordionTrigger className="text-lg">
              {item.pregunta}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {item.respuesta}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
