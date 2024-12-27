import { Button } from "./ui/button";
import AppleStoreLogoSvg from "./icons/applestore_logo";
import PlaystoreLogoSvg from "./icons/playstore_logo";

export default function Main() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-72px)] flex flex-col w-full gap-4 items-center justify-center pt-2 lg:flex-row lg:gap-[150px]">
      <div className="flex flex-col justify-center gap-6 max-w-sm w-full lg:max-w-md mb-4 p-2">
        <h1 className="text-5xl font-bold max-w-sm   ">
          Gestión inteligente para tu boliche
        </h1>
        <p className="text-muted-foreground">
          Control de aforo, métricas en tiempo real y gestión de seguridad todo
          en una aplicación
        </p>
        <div className="flex gap-4 justify-center lg:justify-start">
          <Button variant={"outline"} className="">
            <AppleStoreLogoSvg className="min-w-7 min-h-7"></AppleStoreLogoSvg>
            App Store
          </Button>
          <Button variant={"outline"} className="">
            <PlaystoreLogoSvg className="min-w-6 min-h-6"></PlaystoreLogoSvg>
            Play Store
          </Button>
        </div>
      </div>
      <div className="flex relative">
        <div className="mockup-one">
          <img src="/mock4.png" alt="mock" />
        </div>
        <div className="mockup-two">
          <img src={"/mock2.png"} alt="mock"></img>
        </div>
      </div>
    </section>
  );
}
