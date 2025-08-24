'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import EarlyAccessPopup from '@/components/EarlyAccessPopup';
import Loader from '@/components/Loader';

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Scroll para o topo ao carregar a página e controle do loader
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Remove o loader após 4 segundos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Controlar scroll do body durante o loader
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);
  
  // Monitora o scroll para mostrar/esconder botão
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setShowScrollTop(scrollPercentage > 15);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    // Usa uma animação customizada para um scroll mais suave
    const scrollAnimation = () => {
      const currentPosition = window.pageYOffset;
      if (currentPosition > 0) {
        window.requestAnimationFrame(scrollAnimation);
        window.scrollTo(0, currentPosition - currentPosition / 8);
      }
    };
    scrollAnimation();
  };

  return (
    <>
      {/* Loader */}
      <AnimatePresence>
        {isLoading && <Loader />}
      </AnimatePresence>
      
      {/* Conteúdo principal com animação de entrada */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
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
        <header className="w-full pt-8 md:pt-10 lg:pt-12">
          <div className="max-w-[1400px] mx-auto px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6">
            <Image
              src="/images/iArremateLegacyWhite.png"
              alt="Legacy Logo"
              width={300}
              height={50}
              className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto lg:-ml-24"
              priority
            />
          </div>
        </header>

        {/* Main content */}
        <main className="relative z-20 flex items-center justify-start min-h-[calc(100vh-160px)] -mt-8 sm:-mt-12 md:-mt-8 lg:-mt-4">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 w-full">
            <motion.div 
              className="max-w-[720px] md:max-w-[800px] lg:max-w-[900px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Main title */}
              <motion.h1 
                className="text-[#B69355] font-semibold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl mb-4 sm:mb-6 text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="md:whitespace-nowrap">O MERCADO DE ARTE COMO VOCÊ</span>{" "}
                <br className="hidden md:block" />
                <span className="md:whitespace-nowrap">NUNCA VIU: EM NÚMEROS</span>
              </motion.h1>
              
              {/* Subtitle */}
              <motion.p 
                className="text-[#EEEAD6] leading-relaxed text-lg sm:text-xl md:text-xl lg:text-2xl max-w-[520px] md:max-w-[650px] lg:max-w-[900px] mb-6 sm:mb-8 text-justify lg:text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Transforme seu olhar sobre arte. Tenha acesso a métricas exclusivas
                que revelam o verdadeiro potencial de um acervo, com a mesma
                clareza dos índices financeiros.
              </motion.p>
              
              {/* CTA Button */}
              <motion.button 
                onClick={() => setIsPopupOpen(true)}
                className="bg-[#B69355] hover:bg-[#C89A64] text-[#1A1F2E] font-semibold px-6 py-4 text-sm md:text-base rounded-full transition-all duration-300 hover:shadow-lg uppercase tracking-wider w-full sm:w-auto cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                QUERO ACESSO ANTECIPADO
              </motion.button>
            </motion.div>
          </div>
        </main>
      </div>
    </div>

    {/* Section 2: O Problema */}
    <motion.section 
      className="bg-white overflow-hidden pt-8 md:pt-10 lg:pt-12 pb-20 sm:pb-24 lg:pb-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Logo vermelha com menos margem */}
        <div className="px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6">
          <Image
            src="/images/iArremateLegacyRed.png"
            alt="Legacy Logo Red"
            width={300}
            height={50}
            className="h-16 sm:h-18 md:h-20 lg:h-24 w-auto lg:-ml-24"
            priority
          />
        </div>
        
        {/* Conteúdo com margem normal */}
        <div className="px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 mt-16 sm:mt-20 md:mt-24 lg:mt-32">
          <div className="flex flex-col lg:flex-row items-start gap-10 md:gap-12 lg:gap-16">
            {/* Texto à esquerda */}
            <motion.div 
              className="max-w-[720px] md:max-w-[800px] lg:max-w-[600px]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-[#222344] font-semibold uppercase leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">O PROBLEMA</h2>
              <div className="space-y-4">
                <motion.p 
                  className="text-[#222344] font-normal leading-relaxed text-base sm:text-lg md:text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  O mercado de arte brasileiro ainda toma decisões no escuro.
                </motion.p>
                <motion.p 
                  className="text-[#222344] font-normal leading-relaxed text-base sm:text-lg md:text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Sem dados consolidados, colecionadores, galeristas e investidores dependem de percepções subjetivas, enquanto outros mercados, como ações e imóveis já operam com métricas claras e auditadas.
                </motion.p>
                <motion.p 
                  className="text-[#222344] font-normal leading-relaxed text-base sm:text-lg md:text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Essa falta de informações confiáveis deixa dinheiro na mesa e aumenta o risco de cada negociação.
                </motion.p>
              </div>
            </motion.div>

            {/* Ilustração à direita */}
            <motion.div 
              className="flex-1 flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="w-full relative" style={{ transform: 'scale(1.8)', transformOrigin: 'center' }}>
                <Image
                  src="/images/section2.png"
                  alt="Indicadores do mercado de arte"
                  width={1600}
                  height={1140}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>

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
          style={{ backgroundColor: "rgba(24, 37, 54, 0.96)" }}
        ></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 pt-8 md:pt-10 lg:pt-12 pb-20 sm:pb-24 lg:pb-32">
        <div className="max-w-[1400px] mx-auto">
          {/* Logo branca com menos margem */}
          <div className="px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6">
            <Image
              src="/images/iArremateLegacyWhite.png"
              alt="Legacy Logo White"
              width={300}
              height={50}
              className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto lg:-ml-24"
              priority
            />
          </div>

          {/* Grid de duas colunas com margem normal */}
          <div className="px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 mt-16 sm:mt-20 md:mt-24 lg:mt-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 lg:items-center">
              {/* Coluna esquerda - Título e descrição principal */}
              <motion.div 
                className="max-w-[600px] flex flex-col justify-center -mt-4 lg:-mt-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-[#B69355] font-semibold uppercase leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 lg:mb-8">
                  A SOLUÇÃO
                </h3>
                <p className="text-[#EEEAD6] text-lg sm:text-xl md:text-2xl leading-relaxed">
                  O iArremate Legacy é a primeira plataforma de análise de dados do Brasil dedicada ao mercado de arte.
                </p>
              </motion.div>

              {/* Coluna direita - Lista de features */}
              <motion.div 
                className="max-w-[600px] lg:pr-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <p className="text-[#EEEAD6] text-lg sm:text-xl md:text-2xl leading-relaxed">
                      <span className="font-bold">Índices e relatórios personalizáveis on-demand</span> para medir performance e valor.
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <p className="text-[#EEEAD6] text-lg sm:text-xl md:text-2xl leading-relaxed">
                      <span className="font-bold">Material exclusivo para estudos de caso</span> que mostram, em dados reais, como o mercado se comporta.
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <p className="text-[#EEEAD6] text-lg sm:text-xl md:text-2xl leading-relaxed">
                      <span className="font-bold">Insights inéditos</span> capazes de mudar a lógica do colecionismo e transformar a arte em um ativo comparável a qualquer outro investimento.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section 4: BENEFÍCIOS TANGÍVEIS */}
    <motion.section 
      className="bg-white overflow-hidden pt-8 md:pt-10 lg:pt-12 pb-20 sm:pb-24 lg:pb-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Logo vermelha com menos margem */}
        <div className="px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6">
          <Image
            src="/images/iArremateLegacyRed.png"
            alt="Legacy Logo Red"
            width={300}
            height={50}
            className="h-16 sm:h-18 md:h-20 lg:h-24 w-auto lg:-ml-24"
            priority
          />
        </div>

        {/* Grid de duas colunas com margem normal */}
        <div className="px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 mt-16 sm:mt-20 md:mt-24 lg:mt-32">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 xl:gap-12 items-center">
            {/* Coluna esquerda - Conteúdo de texto */}
            <motion.div 
              className="lg:flex-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[#222344] font-semibold uppercase leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl mb-6 lg:mb-8 lg:whitespace-nowrap">
                BENEFÍCIOS TANGÍVEIS
              </h2>
              
              <div className="space-y-4 text-[#222344] text-lg sm:text-xl md:text-2xl leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Com a metodologia auditada e tratada pela <span className="font-bold">EasyData</span>
                  {" "}e validada por <span className="font-bold">Thierry Chemale</span>, você ganha:
                </motion.p>
                
                <div className="space-y-3">
                  <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <span className="font-bold">Confiança:</span> dados auditados e validados por especialistas.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <span className="font-bold">Precisão:</span> análises estruturadas com rigor técnico.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <span className="font-bold">Oportunidade:</span> antecipação de tendências, valoração racional e informação exclusiva para decisões de alto impacto.
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Coluna direita - Ilustração */}
            <motion.div 
              className="flex-1 flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-full relative" style={{ transform: 'scale(2.2)', transformOrigin: 'center' }}>
                <Image
                  src="/images/section4.png"
                  alt="Análise de dados e métricas"
                  width={1600}
                  height={1140}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>

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
          style={{ backgroundColor: "rgba(24, 37, 54, 0.96)" }}
        ></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 pt-8 md:pt-10 lg:pt-12 pb-20 sm:pb-24 lg:pb-32">
        <div className="max-w-[1400px] mx-auto">
          {/* Logo branca com menos margem */}
          <div className="px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6">
            <Image
              src="/images/iArremateLegacyWhite.png"
              alt="Legacy Logo White"
              width={300}
              height={50}
              className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto lg:-ml-24"
              priority
            />
          </div>

          {/* Container do conteúdo com margem normal */}
          <div className="px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 mt-16 sm:mt-20 md:mt-24 lg:mt-32">
            <motion.div 
              className="w-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Texto do depoimento */}
              <div className="space-y-4 mb-8 lg:mb-10">
                <motion.p 
                  className="text-[#EEEAD6] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-light"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Um colecionador usou nossa plataforma para calcular a liquidez de seu acervo e descobriu obras com potencial de venda rápida e valorização acima da média.
                </motion.p>
                <motion.p 
                  className="text-[#EEEAD6] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-light"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Com isso, diversificou sua carteira e reduziu o risco de exposição do seu patrimônio, tudo com decisões 100% baseadas em dados.
                </motion.p>
              </div>

              {/* Citação destacada */}
              <motion.div 
                className="mb-12 lg:mb-16"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <p className="text-[#B69355] text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight font-semibold uppercase text-justify lg:text-left">
                  <span className="block lg:inline">&ldquo;O IARREMATE LEGACY É O QUE O </span>
                  <span className="block">MERCADO DE ARTE PRECISAVA PARA DAR O PRÓXIMO PASSO.&rdquo;</span>
                </p>
              </motion.div>

              {/* Botão CTA centralizado no mobile, alinhado à direita no desktop */}
              <motion.div 
                className="flex justify-center lg:justify-end"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.button 
                  onClick={() => setIsPopupOpen(true)}
                  className="bg-[#B69355] hover:bg-[#C89A64] text-[#1A1F2E] font-semibold px-8 py-4 text-sm md:text-base rounded-full transition-all duration-300 hover:shadow-lg uppercase tracking-wider cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  QUERO ACESSO ANTECIPADO
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    {/* Popup de Acesso Antecipado */}
    <EarlyAccessPopup 
      isOpen={isPopupOpen} 
      onClose={() => setIsPopupOpen(false)} 
    />
    
    {/* Botão flutuante de voltar ao topo */}
    <AnimatePresence>
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 w-10 h-10 sm:w-12 sm:h-12 bg-[#B69355] hover:bg-[#9A7F4A] text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 cursor-pointer group"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          aria-label="Voltar ao topo"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
    </motion.div>

    </>
  );
}



