'use client';

import { useState } from 'react';
import Image from 'next/image';

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay semi-transparente para manter o fundo visível */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClosePopup}
      />
      
      {/* Container do popup - mais elegante e moderno */}
      <div className="relative w-full max-w-[1100px] shadow-2xl rounded-xl overflow-hidden animate-fadeIn">
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
            <div className="relative z-10 flex flex-col items-center justify-between min-h-[600px] px-12 py-10">
              {/* Badge BETA no canto superior esquerdo */}
              <div className="w-full flex justify-start">
                <span className="bg-[#B69355] text-[#1f2b3b] px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                  BETA
                </span>
              </div>

              {/* Mensagem de sucesso centralizada */}
              <div className="max-w-[900px] mx-auto text-center space-y-5 -mt-8">
                <h2 className="text-[#EEEAD6] text-2xl lg:text-3xl xl:text-4xl font-normal leading-tight mb-6">
                  Inscrição recebida com sucesso!
                </h2>
                
                <p className="text-[#EEEAD6] text-lg lg:text-xl xl:text-2xl font-light leading-relaxed">
                  Obrigado por se cadastrar na lista prioritária de acesso antecipado ao iArremate Legacy.
                </p>
                
                <p className="text-[#EEEAD6] text-base lg:text-lg xl:text-xl font-light leading-relaxed px-8">
                  Em breve, você receberá um e-mail com instruções para ativar sua assinatura e aproveitar os recursos exclusivos antes do lançamento oficial.
                </p>
                
                <p className="text-[#EEEAD6] text-lg lg:text-xl font-normal mt-8 pt-4">
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
          <div className="relative flex flex-col lg:flex-row">
          {/* Lado esquerdo com overlay azul e background */}
          <div className="relative lg:w-[55%] min-h-[300px] lg:min-h-[650px]">
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
            <div className="relative z-10 p-8 lg:p-12 h-full flex flex-col">
              {/* Logo */}
              <div className="mb-8 lg:mb-12">
                <Image
                  src="/images/iArremateLegacyWhite.png"
                  alt="Legacy Logo"
                  width={260}
                  height={40}
                  className="h-14 lg:h-16 w-auto"
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>

              {/* Textos com melhor hierarquia */}
              <div className="flex-1 flex flex-col justify-center space-y-6">
                <h2 className="text-[#B69355] font-bold text-xl lg:text-2xl xl:text-3xl leading-tight uppercase tracking-wide">
                  Ao se inscrever, você garante prioridade para assinar o iArremate Legacy antes do lançamento oficial.
                </h2>
                
                <p className="text-[#B69355]/90 text-base lg:text-lg leading-relaxed">
                  Esta é uma versão beta, exclusiva para membros fundadores, que poderá receber ajustes e melhorias até a disponibilização final.
                </p>

                <p className="text-[#B69355]/90 text-base lg:text-lg leading-relaxed">
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
            <form onSubmit={handleSubmit} className="relative z-10 p-8 lg:p-12 h-full flex flex-col justify-center">
              <div className="space-y-5">
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
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-200 bg-white/95 backdrop-blur-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B69355]/30 focus:border-[#B69355] transition-all duration-300"
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
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-200 bg-white/95 backdrop-blur-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B69355]/30 focus:border-[#B69355] transition-all duration-300"
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
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-200 bg-white/95 backdrop-blur-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B69355]/30 focus:border-[#B69355] transition-all duration-300"
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
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-200 bg-white/95 backdrop-blur-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B69355]/30 focus:border-[#B69355] transition-all duration-300"
                    required
                  />
                </div>

                {/* Checkbox de termos elegante */}
                <div className="flex items-start mt-6 group">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      name="termos"
                      id="termos"
                      checked={formData.termos}
                      onChange={handleInputChange}
                      className="w-4 h-4 rounded border-gray-300 text-[#B69355] focus:ring-[#B69355] focus:ring-offset-0 transition-colors cursor-pointer"
                      required
                    />
                  </div>
                  <label htmlFor="termos" className="ml-3 text-xs text-gray-600 cursor-pointer select-none hover:text-gray-800 transition-colors">
                    ACEITO OS TERMOS E A POLÍTICA DE PRIVACIDADE
                  </label>
                </div>

                {/* Botão de enviar elegante */}
                <button
                  type="submit"
                  className="w-full mt-6 bg-[#B69355] hover:bg-[#9A7F4A] text-white font-bold py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl uppercase tracking-wider text-sm cursor-pointer"
                >
                  Confirmar inscrição
                </button>
              </div>
            </form>
          </div>
          </div>
        )}
      </div>
    </div>
  );
}
