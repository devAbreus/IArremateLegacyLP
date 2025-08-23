'use client';

import { useState } from 'react';
import Image from "next/image";
import EarlyAccessPopup from '@/components/EarlyAccessPopup';

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
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
          style={{ backgroundColor: "rgba(24, 37, 54, 0.96)" }}
        ></div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-20 min-h-screen">
        {/* Header with logo */}
        <header className="pt-8 md:pt-10 lg:pt-12 px-6 sm:px-8 md:px-10 lg:px-12">
          <Image
            src="/images/iArremateLegacyWhite.png"
            alt="Legacy Logo"
            width={1080}
            height={60}
            className="h-20 sm:h-14 md:h-20 w-auto"
            priority
          />
        </header>

        {/* Main content */}
        <main className="relative z-20 flex items-center justify-start min-h-[calc(100vh-160px)] px-6 sm:px-8 md:px-10 lg:px-12 -mt-8 sm:-mt-12 md:-mt-8 lg:-mt-4">
          <div className="max-w-7xl md:mx-32 w-full">
            <div className="max-w-[720px] md:max-w-[800px] lg:max-w-[900px]">
              {/* Main title */}
              <h1 className="text-[#B69355] font-semibold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl mb-4 sm:mb-6 text-center md:text-left">
                <span className="md:whitespace-nowrap">O MERCADO DE ARTE COMO VOCÊ</span>
                <br className="hidden md:block" />
                <span className="md:whitespace-nowrap">NUNCA VIU: EM NÚMEROS</span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-[#EEEAD6] leading-relaxed text-lg sm:text-xl md:text-xl lg:text-2xl max-w-[520px] md:max-w-[650px] lg:max-w-[900px] mb-6 sm:mb-8 text-justify lg:text-left">
                Transforme seu olhar sobre arte. Tenha acesso a métricas exclusivas
                que revelam o verdadeiro potencial de um acervo, com a mesma
                clareza dos índices financeiros.
              </p>
              
              {/* CTA Button */}
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="bg-[#B69355] hover:bg-[#C89A64] text-[#1A1F2E] font-semibold px-6 py-4 text-sm md:text-base rounded-full transition-all duration-300 hover:shadow-lg uppercase tracking-wider w-full sm:w-auto"
              >
                QUERO ACESSO ANTECIPADO
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>

    {/* Section 2: O Problema */}
    <section className="bg-white overflow-hidden">
      {/* Logo vermelha no mesmo padrão de tamanho e alinhamento */}
      <div className="px-6 sm:px-8 md:px-10 lg:px-12 pt-12 sm:pt-16 lg:pt-20">
        <Image
          src="/images/iArremateLegacyRed.png"
          alt="Legacy Logo Red"
          width={1080}
          height={60}
          className="h-20 sm:h-14 md:h-20 w-auto mb-8 sm:mb-10 lg:mb-12"
          priority
        />
      </div>

      {/* Conteúdo alinhado com primeira seção */}
      <div className="px-6 sm:px-8 md:px-10 lg:px-12 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-[1440px] 2xl:max-w-[1600px] md:mx-32 w-full">
          <div className="flex flex-col lg:flex-row items-start gap-10 md:gap-12 lg:gap-16">
            {/* Texto à esquerda */}
            <div className="max-w-[720px] md:max-w-[800px] lg:max-w-[600px]">
              <h2 className="text-[#222344] font-semibold uppercase leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">O PROBLEMA</h2>
              <div className="space-y-4">
                <p className="text-[#222344] font-normal leading-relaxed text-base sm:text-lg md:text-xl">
                  O mercado de arte brasileiro ainda toma decisões no escuro.
                </p>
                <p className="text-[#222344] font-normal leading-relaxed text-base sm:text-lg md:text-xl">
                  Sem dados consolidados, colecionadores, galeristas e investidores dependem de percepções subjetivas, enquanto outros mercados, como ações e imóveis já operam com métricas claras e auditadas.
                </p>
                <p className="text-[#222344] font-normal leading-relaxed text-base sm:text-lg md:text-xl">
                  Essa falta de informações confiáveis deixa dinheiro na mesa e aumenta o risco de cada negociação.
                </p>
              </div>
            </div>

            {/* Ilustração à direita */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <Image
                src="/images/section2.png"
                alt="Indicadores do mercado de arte"
                width={1600}
                height={1140}
                className="w-full max-w-[1000px] sm:max-w-[1150px] md:max-w-[1250px] lg:max-w-[1300px] xl:max-w-[1500px] 2xl:max-w-[1600px] h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section 3: A SOLUÇÃO */}
    <section className="relative overflow-hidden">
      {/* Background image cobrindo toda a seção */}
      <div className="absolute inset-0">
        <Image
          src="/images/backgrounds3.png"
          alt="Background seção 3"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay azul escuro sobre toda a imagem */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(44, 57, 74, 0.92)" }}
        ></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10">
        {/* Container com padding padrão */}
        <div className="px-6 sm:px-8 md:px-10 lg:px-12 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20">
          {/* Logo branca com mais espaçamento abaixo */}
          <Image
            src="/images/iArremateLegacyWhite.png"
            alt="Legacy Logo White"
            width={1080}
            height={60}
            className="h-20 sm:h-14 md:h-20 w-auto mb-12 sm:mb-14 lg:mb-16 pb-4"
            priority
          />

          {/* Grid de duas colunas */}
          <div className="max-w-[1440px] 2xl:max-w-[1600px] md:mx-32 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20">
              {/* Coluna esquerda - Título e descrição principal */}
              <div className="max-w-[600px]">
                <h3 className="text-[#B69355] font-semibold uppercase leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 lg:mb-8">
                  A SOLUÇÃO
                </h3>
                <p className="text-white text-lg sm:text-xl md:text-2xl leading-relaxed">
                  O iArremate Legacy é a primeira plataforma de análise de dados do Brasil dedicada ao mercado de arte.
                </p>
              </div>

              {/* Coluna direita - Lista de features */}
              <div className="max-w-[600px] lg:pr-8">
                <div className="space-y-6">
                  <div>
                    <p className="text-white text-lg sm:text-xl md:text-2xl leading-relaxed">
                      <span className="font-bold">Índices e relatórios personalizáveis on-demand</span> para medir performance e valor.
                    </p>
                  </div>
                  <div>
                    <p className="text-white text-lg sm:text-xl md:text-2xl leading-relaxed">
                      <span className="font-bold">Material exclusivo para estudos de caso</span> que mostram, em dados reais, como o mercado se comporta.
                    </p>
                  </div>
                  <div>
                    <p className="text-white text-lg sm:text-xl md:text-2xl leading-relaxed">
                      <span className="font-bold">Insights inéditos</span> capazes de mudar a lógica do colecionismo e transformar a arte em um ativo comparável a qualquer outro investimento.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section 4: BENEFÍCIOS TANGÍVEIS */}
    <section className="bg-white overflow-hidden">
      {/* Container com padding padrão */}
      <div className="px-6 sm:px-8 md:px-10 lg:px-12 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20">
        {/* Logo vermelha */}
        <Image
          src="/images/iArremateLegacyRed.png"
          alt="Legacy Logo Red"
          width={1080}
          height={60}
          className="h-20 sm:h-14 md:h-20 w-auto mb-12 sm:mb-14 lg:mb-16"
          priority
        />

        {/* Grid de duas colunas */}
        <div className="max-w-[1440px] 2xl:max-w-[1600px] md:mx-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">
            {/* Coluna esquerda - Conteúdo de texto */}
            <div className="max-w-[700px]">
              <h2 className="text-[#222344] font-semibold uppercase leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 lg:mb-8">
                BENEFÍCIOS TANGÍVEIS
              </h2>
              
              <div className="space-y-4 text-[#222344] text-lg sm:text-xl md:text-2xl leading-relaxed">
                <p>
                  Com a metodologia auditada e tratada pela <span className="font-bold">EasyData</span>
                  {" "}e validada por <span className="font-bold">Thierry Chemale</span>, você ganha:
                </p>
                
                <div className="space-y-3">
                  <p>
                    <span className="font-bold">Confiança:</span> dados auditados e validados por especialistas.
                  </p>
                  
                  <p>
                    <span className="font-bold">Precisão:</span> análises estruturadas com rigor técnico.
                  </p>
                  
                  <p>
                    <span className="font-bold">Oportunidade:</span> antecipação de tendências, valoração racional e informação exclusiva para decisões de alto impacto.
                  </p>
                </div>
              </div>
            </div>

            {/* Coluna direita - Ilustração */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/section4.png"
                alt="Análise de dados e métricas"
                width={800}
                height={600}
                className="w-full max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section 5: Depoimento/Caso de sucesso */}
    <section className="relative overflow-hidden">
      {/* Background image com overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/backgrounds5.png"
          alt="Background seção 5"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay azul escuro */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(31, 43, 59, 0.92)" }}
        ></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10">
        <div className="px-6 sm:px-8 md:px-10 lg:px-12 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20">
          {/* Logo branca */}
          <Image
            src="/images/iArremateLegacyWhite.png"
            alt="Legacy Logo White"
            width={1080}
            height={60}
            className="h-20 sm:h-14 md:h-20 w-auto mb-12 sm:mb-14 lg:mb-16"
            priority
          />

          {/* Container do conteúdo */}
          <div className="max-w-[1440px] 2xl:max-w-[1600px] md:mx-32 w-full">
            <div className="max-w-[1100px]">
              {/* Texto do depoimento */}
              <div className="space-y-6 mb-8 lg:mb-10">
                <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed font-light">
                  Um colecionador usou nossa plataforma para calcular
                  a liquidez de seu acervo e descobriu obras com potencial
                  de venda rápida e valorização acima da média.
                </p>
                <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed font-light">
                  Com isso, diversificou sua carteira e reduziu o risco de
                  exposição do seu patrimônio, tudo com decisões 100%
                  baseadas em dados.
                </p>
              </div>

              {/* Citação destacada */}
              <div className="mb-12 lg:mb-16">
                <p className="text-[#B69355] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold uppercase">
                  “O IARREMATE LEGACY É O QUE O MERCADO
                  <br />
                  DE ARTE PRECISAVA PARA DAR O PRÓXIMO PASSO.”
                </p>
              </div>

              {/* Botão CTA alinhado à direita */}
              <div className="flex justify-end">
                <button 
                  onClick={() => setIsPopupOpen(true)}
                  className="bg-[#B69355] hover:bg-[#C89A64] text-[#1A1F2E] font-semibold px-8 py-4 text-sm md:text-base rounded-full transition-all duration-300 hover:shadow-lg uppercase tracking-wider"
                >
                  QUERO ACESSO ANTECIPADO
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Popup de Acesso Antecipado */}
    <EarlyAccessPopup 
      isOpen={isPopupOpen} 
      onClose={() => setIsPopupOpen(false)} 
    />

    </>
  );
}



