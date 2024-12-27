"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const testimonials = [
  {
    name: "Carlos Rodríguez",
    role: "Dueño",
    content:
      "Flowly ha revolucionado la forma en que manejamos nuestro club nocturno. El control de aforo en tiempo real nos ha permitido optimizar nuestras operaciones y mejorar la experiencia de nuestros clientes.",
  },
  {
    name: "Ana Martínez",
    role: "Gerente ",
    content:
      "Las métricas y proyecciones de Flowly nos han ayudado a tomar decisiones más informadas sobre nuestro negocio. Hemos visto un aumento significativo de nuestro control desde que empezamos a usar la aplicación.",
  },
  {
    name: "Diego Fernández",
    role: "Jefe de Seguridad ",
    content:
      "El sistema de alertas y comunicación en tiempo real de Flowly ha mejorado enormemente la seguridad en nuestro local. Podemos responder rápidamente a cualquier situación que surja.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className=" mx-auto px-4 py-16 ">
      <h2 className="mb-16 text-center text-3xl font-bold">
        Testimonios de quienes confian en nosotros
      </h2>
      <div className="max-w-md m-auto min-w-[300px]">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Card className="max-w-md min-w-[300px] mb-8">
                <CardHeader>
                  <CardTitle>{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <blockquote>{testimonial.content}</blockquote>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
