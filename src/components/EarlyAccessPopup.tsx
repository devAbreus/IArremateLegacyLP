'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface EarlyAccessPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EarlyAccessPopup({ isOpen, onClose }: EarlyAccessPopupProps) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    ocupacao: '',
    termos: false
  });
  const [isSuccess, setIsSuccess] = useState(false);

  // Controlar scroll do body quando popup abrir/fechar
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup quando componente desmontar
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Função para formatar telefone
  const formatPhoneNumber = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');
    
    // Limita a 11 dígitos
    const truncated = numbers.substring(0, 11);
    
    // Aplica a formatação
    if (truncated.length <= 2) {
      return truncated;
    } else if (truncated.length <= 7) {
      return `(${truncated.substring(0, 2)}) ${truncated.substring(2)}`;
    } else if (truncated.length <= 10) {
      return `(${truncated.substring(0, 2)}) ${truncated.substring(2, 6)}-${truncated.substring(6)}`;
    } else {
      return `(${truncated.substring(0, 2)}) ${truncated.substring(2, 7)}-${truncated.substring(7)}`;
    }
  };

  // Função para validar apenas letras e espaços
  const validateOnlyLetters = (value: string) => {
    return value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
      return;
    }
    
    let processedValue = value;
    
    // Aplicar validações específicas por campo
    switch (name) {
      case 'nome':
      case 'ocupacao':
        processedValue = validateOnlyLetters(value);
        break;
      case 'telefone':
        processedValue = formatPhoneNumber(value);
        break;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: processedValue
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Formulário enviado:', formData);
    // Mostra a tela de sucesso
    setIsSuccess(true);
  };

  const handleClosePopup = () => {
    setIsSuccess(false);
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      ocupacao: '',
      termos: false
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Overlay semi-transparente para manter o fundo visível */}
          <motion.div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleClosePopup}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          
          {/* Container do popup - mais elegante e moderno */}
          <motion.div 
            className="relative w-full max-w-[1100px] shadow-2xl rounded-xl overflow-hidden my-2 sm:my-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
        {/* Botão de fechar elegante */}
        <button
          onClick={handleClosePopup}
          className="absolute top-6 right-6 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group cursor-pointer"
          aria-label="Fechar"
        >
          <svg className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Conteúdo condicional - Formulário ou Sucesso */}
        {isSuccess ? (
          /* Tela de Sucesso */
          <div className="relative min-h-[600px]">
            {/* Background image */}
            <Image
              src="/images/sucess.png"
              alt="Success Background"
              fill
              className="object-cover"
              quality={100}
              priority
            />
            {/* Overlay azul escuro */}
            <div
              className="absolute inset-0"
              style={{ backgroundColor: "rgba(31, 43, 59, 0.92)" }}
            />

            {/* Conteúdo da mensagem de sucesso */}
            <div className="relative z-10 flex flex-col items-center justify-between min-h-[600px] px-6 sm:px-8 lg:px-12 py-8 sm:py-10">
              {/* Badge BETA no canto superior esquerdo */}
              <div className="w-full flex justify-start -mt-2 sm:-mt-0">
                <span className="bg-[#B69355] text-[#1f2b3b] px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                  BETA
                </span>
              </div>

              {/* Mensagem de sucesso centralizada */}
              <div className="max-w-[900px] mx-auto text-center space-y-4 sm:space-y-5 -mt-12 sm:-mt-10 lg:-mt-8">
                <h2 className="text-[#EEEAD6] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-normal leading-tight mb-4 sm:mb-6">
                  Inscrição recebida com sucesso!
                </h2>
                
                <p className="text-[#EEEAD6] text-base sm:text-lg lg:text-xl xl:text-2xl font-light leading-relaxed">
                  Obrigado por se cadastrar na lista prioritária de acesso antecipado ao iArremate Legacy.
                </p>
                
                <p className="text-[#EEEAD6] text-sm sm:text-base lg:text-lg xl:text-xl font-light leading-relaxed px-4 sm:px-8">
                  Em breve, você receberá um e-mail com instruções para ativar sua assinatura e aproveitar os recursos exclusivos antes do lançamento oficial.
                </p>
                
                <p className="text-[#EEEAD6] text-base sm:text-lg lg:text-xl font-normal mt-6 sm:mt-8 pt-2 sm:pt-4">
                  São poucas vagas.
                </p>
              </div>

              {/* Logo na parte inferior centralizada */}
              <div className="flex justify-center w-full">
                <Image
                  src="/images/iArremateLegacyWhite.png"
                  alt="Legacy Logo"
                  width={240}
                  height={40}
                  className="h-14 lg:h-16 w-auto"
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="relative flex flex-col lg:flex-row min-h-[500px] sm:min-h-[550px] lg:min-h-[650px]">
          {/* Lado esquerdo com overlay azul e background */}
          <div className="relative lg:w-[55%] min-h-[200px] sm:min-h-[250px] lg:min-h-[650px]">
            {/* Background image */}
            <Image
              src="/images/backgrounds5.png"
              alt="Background"
              fill
              className="object-cover"
              quality={100}
              priority
            />
            {/* Overlay azul escuro elegante */}
            <div
              className="absolute inset-0"
              style={{ 
                background: 'linear-gradient(135deg, rgba(24, 37, 54, 0.96) 0%, rgba(24, 37, 54, 0.96)100%)'
              }}
            />

            {/* Conteúdo do lado esquerdo */}
            <div className="relative z-10 px-3 py-4 sm:p-6 lg:p-12 h-full flex flex-col">
              {/* Logo */}
              <div className="mb-4 sm:mb-6 lg:mb-12">
                <Image
                  src="/images/iArremateLegacyWhite.png"
                  alt="Legacy Logo"
                  width={260}
                  height={40}
                  className="h-12 sm:h-14 lg:h-16 w-auto -ml-1"
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>

              {/* Textos com melhor hierarquia */}
              <div className="flex-1 flex flex-col justify-center space-y-3 sm:space-y-4 lg:space-y-6 px-1">
                <h2 className="text-[#B69355] font-bold text-base sm:text-lg lg:text-2xl xl:text-3xl leading-tight uppercase tracking-wide">
                  Ao se inscrever, você garante prioridade para assinar o iArremate Legacy antes do lançamento oficial.
                </h2>
                
                <p className="text-[#B69355]/90 text-xs sm:text-sm lg:text-lg leading-relaxed">
                  Esta é uma versão beta, exclusiva para membros fundadores, que poderá receber ajustes e melhorias até a disponibilização final.
                </p>

                <p className="text-[#B69355]/90 text-xs sm:text-sm lg:text-lg leading-relaxed">
                  Sua participação ajudará a moldar a plataforma que vai redefinir a análise de dados no mercado de arte.
                </p>
              </div>
            </div>
          </div>

          {/* Lado direito com formulário - fundo claro e elegante */}
          <div className="relative lg:w-[45%] bg-white">
            {/* Padrão sutil no fundo */}
            <div className="absolute inset-0 opacity-5">
              <Image
                src="/images/backgrounds5.png"
                alt="Background Pattern"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Formulário elegante */}
            <form onSubmit={handleSubmit} className="relative z-10 p-4 sm:p-6 lg:p-12 h-full flex flex-col justify-center">
              <div className="space-y-3 sm:space-y-4 lg:space-y-5">
                {/* Nome completo */}
                <div className="group">
                  <label className="text-gray-600 text-sm font-medium mb-2 block transition-colors group-focus-within:text-[#B69355]">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    placeholder="Digite seu nome completo"
                    className="w-full px-4 py-2.5 sm:py-3 lg:py-3.5 rounded-lg border border-gray-200 bg-white/95 backdrop-blur-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B69355]/30 focus:border-[#B69355] transition-all duration-300"
                    required
                  />
                </div>

                {/* Email */}
                <div className="group">
                  <label className="text-gray-600 text-sm font-medium mb-2 block transition-colors group-focus-within:text-[#B69355]">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-2.5 sm:py-3 lg:py-3.5 rounded-lg border border-gray-200 bg-white/95 backdrop-blur-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B69355]/30 focus:border-[#B69355] transition-all duration-300"
                    required
                  />
                </div>

                {/* Telefone */}
                <div className="group">
                  <label className="text-gray-600 text-sm font-medium mb-2 block transition-colors group-focus-within:text-[#B69355]">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    placeholder="(00) 00000-0000"
                    className="w-full px-4 py-2.5 sm:py-3 lg:py-3.5 rounded-lg border border-gray-200 bg-white/95 backdrop-blur-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B69355]/30 focus:border-[#B69355] transition-all duration-300"
                    required
                  />
                </div>

                {/* Ocupação Profissional */}
                <div className="group">
                  <label className="text-gray-600 text-sm font-medium mb-2 block transition-colors group-focus-within:text-[#B69355]">
                    Ocupação Profissional
                  </label>
                  <input
                    type="text"
                    name="ocupacao"
                    value={formData.ocupacao}
                    onChange={handleInputChange}
                    placeholder="Ex: Colecionador, Galerista, Investidor"
                    className="w-full px-4 py-2.5 sm:py-3 lg:py-3.5 rounded-lg border border-gray-200 bg-white/95 backdrop-blur-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B69355]/30 focus:border-[#B69355] transition-all duration-300"
                    required
                  />
                </div>

                {/* Checkbox de termos elegante */}
                <div className="flex items-center mt-4 sm:mt-5 lg:mt-6 group">
                  <input
                    type="checkbox"
                    name="termos"
                    id="termos"
                    checked={formData.termos}
                    onChange={handleInputChange}
                    className="w-4 h-4 rounded border-gray-300 text-[#B69355] focus:ring-[#B69355] focus:ring-offset-0 transition-colors cursor-pointer flex-shrink-0"
                    required
                  />
                  <label htmlFor="termos" className="ml-3 text-xs text-gray-600 cursor-pointer select-none hover:text-gray-800 transition-colors">
                    ACEITO OS TERMOS E A POLÍTICA DE PRIVACIDADE
                  </label>
                </div>

                {/* Botão de enviar elegante */}
                <button
                  type="submit"
                  className="w-full mt-4 sm:mt-5 lg:mt-6 bg-[#B69355] hover:bg-[#9A7F4A] text-white font-bold py-3 sm:py-3.5 lg:py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl uppercase tracking-wider text-xs sm:text-sm cursor-pointer">
                  Confirmar inscrição
                </button>
              </div>
            </form>
          </div>
          </div>
        )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
