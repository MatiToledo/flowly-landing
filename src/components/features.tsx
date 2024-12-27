import { Users, BarChart3, Bell, MessageSquare } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="container mx-auto px-4 py-16">
      <h2 className="mb-16 text-center text-3xl font-bold">
        Caracteristicas principales
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <Users className="mb-4 h-8 w-8 text-blue-400" />
          <h3 className="mb-2 text-xl font-bold">
            Gestión de Ingresos y Salidas
          </h3>
          <ul className="list-disc pl-5 text-gray-400">
            <li>
              Control total de ingresos y salidas con opciones clasificatorias
            </li>
            <li>Monitoreo de ocupación en tiempo real</li>
            <li>Alertas de capacidad máxima</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <Bell className="mb-4 h-8 w-8 text-blue-400" />
          <h3 className="mb-2 text-xl font-bold">Monitoreo del Ambiente</h3>
          <ul className="list-disc pl-5 text-gray-400">
            <li>
              Evaluación rápida del ambiente mediante preguntas calificativas
            </li>
            <li>Alertas inmediatas para situaciones críticas</li>
            <li>Notificaciones de disturbios o exceso de capacidad</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <BarChart3 className="mb-4 h-8 w-8 text-blue-400" />
          <h3 className="mb-2 text-xl font-bold">Análisis y Proyección</h3>
          <ul className="list-disc pl-5 text-gray-400">
            <li>Métricas en tiempo real de ingresos y ocupación</li>
            <li>Comparativas con noches anteriores</li>
            <li>Proyección de facturación basada en datos actuales</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <MessageSquare className="mb-4 h-8 w-8 text-blue-400" />
          <h3 className="mb-2 text-xl font-bold">Comunicación Efectiva</h3>
          <ul className="list-disc pl-5 text-gray-400">
            <li>Chat interno para comunicación en tiempo real</li>
            <li>Acceso multiusuario simultáneo</li>
            <li>Gestión de múltiples locales desde una sola plataforma</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
