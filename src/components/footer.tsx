export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <img
            src="/logo.png"
            alt="Flowly Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <p className="text-sm text-gray-400">
            © 2024 Flowly. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Términos y condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
