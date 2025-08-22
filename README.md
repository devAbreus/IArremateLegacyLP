# IArremate Landing Page

Este projeto é uma landing page desenvolvida com Next.js, React, Tailwind CSS e outras tecnologias modernas.

## Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **React** - Biblioteca para construção de interfaces
- **TypeScript** - Superset tipado do JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Iconify** - Biblioteca de ícones
- **Montserrat Font** - Fonte Google Fonts (Regular e Semibold)

## Paleta de Cores

- **Primária**: `#B69355` - Dourado
- **Background**: `#EEEAD6` - Bege claro
- **Secundária**: `#222344` - Azul escuro
- **Branco**: `#FFFFFF`

## Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página inicial
└── components/              # Componentes reutilizáveis
```

## Configurações

### Fontes
- **Montserrat Regular (400)**: Para textos normais
- **Montserrat Semibold (600)**: Para títulos e destaques

### Classes Tailwind Personalizadas
- `bg-primary` - Cor primária como background
- `text-primary` - Cor primária para texto
- `bg-secondary` - Cor secundária como background
- `text-secondary` - Cor secundária para texto
- `bg-background` - Cor de fundo
- `font-montserrat-regular` - Fonte Montserrat regular
- `font-montserrat-semibold` - Fonte Montserrat semibold

## Como Executar

1. Instale as dependências:
```bash
npm install
```

2. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

3. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Desenvolvimento

O projeto está configurado com:
- Hot reload para desenvolvimento
- TypeScript para tipagem estática
- ESLint para linting
- Tailwind CSS para estilização
- Suporte completo ao Iconify para ícones

## Próximos Passos

Agora você pode:
1. Adicionar suas seções da landing page
2. Criar componentes reutilizáveis
3. Implementar responsividade
4. Adicionar animações e interações

---

Projeto criado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
