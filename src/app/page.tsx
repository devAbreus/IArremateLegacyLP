import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/backgrounds1.png"
          alt="Background"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        {/* Overlay com a cor exata solicitada (#1f2b3b) com 85% de opacidade */}
        <div
          className="absolute inset-0 z-10"
          style={{ backgroundColor: "rgba(31, 43, 59, 0.85)" }}
        ></div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-20 min-h-screen">
        {/* Header with logo */}
        <header className="p-8 md:p-10 lg:p-12">
          <Image
            src="/images/iArremateLegacyWhite.png"
            alt="Legacy Logo"
            width={160}
            height={48}
            className="h-12 w-auto"
            priority
          />
        </header>

        {/* Main content */}
        <main className="flex items-center min-h-[calc(100vh-160px)] px-8 md:px-10 lg:px-12 -mt-16">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-5xl">
              {/* Main title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#D4A574] leading-[1.1] mb-6">
                <span className="whitespace-nowrap">O MERCADO DE ARTE COMO VOCÊ</span><br />
                <span className="whitespace-nowrap">NUNCA VIU: EM NÚMEROS</span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-base md:text-lg font-normal text-[#EEEAD6] mb-10 leading-[1.6] max-w-2xl">
                Transforme seu olhar sobre arte. Tenha acesso a métricas exclusivas<br />
                que revelam o verdadeiro potencial de um acervo, com a mesma<br />
                clareza dos índices financeiros.
              </p>
              
              {/* CTA Button */}
              <button className="bg-[#B69355] hover:bg-[#C89A64] text-[#1A1F2E] font-semibold px-8 py-3.5 text-sm rounded-md transition-all duration-300 hover:shadow-lg uppercase tracking-wider">
                QUERO ACESSO ANTECIPADO
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}



