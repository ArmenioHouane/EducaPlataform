
# EducaPlatform

Uma plataforma criada usando TypeScript + React + Tailwind.

## Projeto React com Tailwind CSS - Modo Claro e Escuro

Esta parte demonstra como configurar e usar modos claro e escuro neste projeto.

### Usando as Classes

Você pode usar as classes fornecidas para definir o modo claro e escuro em diferentes elementos do seu projeto.

```tsx

//Por exemplo bg-backdarklm dark:bg-backdarkdm
Configura os o background para backdarkdm e quando o modo dark esta ativo o outro sera usado

// Dark Mode Colors
const colors = {
  backdarkdm: '#1C1B1E', // Dark Mode Background
  whitextdm: '#FFFFFF', // Dark Mode Text and Title
  cardColorbm: '#25242A', // Dark Mode Card Color
  innerTextColordm: '#575360', // Dark Mode Inner Card Text Color
  darkbtncolordm: '#A688FA', // Dark Mode Button Color
  darklinkcolordm: '#BA9FFB', // Dark Mode Link Color
  darkinnercolordm: '#000000', // Dark Mode Button Inner Text Color
  dropMenulbackdm: '#E1DFFD', // Dark Mode DropDown Background Color
  dropMenudm: '#423F4D', // Dark Mode DropDown Item Color
  bgHoverlm: '#1F75FE', // Hover button
  bgHoverdm: '#87CEEB', // Hover button

  // Light Mode Colors
  backWhitelm: '#F5F4FE', // Light Mode Background 
  textWhitelm: '#000008', // Light Mode Text and Title
  cardColorlm: '#FFFFFF', // Light Mode Card Color
  innerTextColorlm: '#000008', // Light Mode Inner Card Text Color
  darkbtncolorlm: '#221A90', // Light Mode Button Color
  darklinkcolorlm: '#2341F8', // Light Mode Link Color
  darkinnercolorlm: '#FFFFFF', // Light Mode Button Inner Text Color
  dropMenulbacklm: '#E1DFFD', // Light Mode DropDown Background Color
  dropMenulm: '#D7D5FC', // Light Mode DropDown Item Color,
};

Texto

<div className="text-textWhitelm dark:text-whitextdm">
  Seu texto aqui
</div>

Botões

<button className="bg-darkbtncolorlm dark:bg-darkbtncolordm text-darkinnercolorlm dark:text-darkinnercolordm hover:bg-bgHoverlm dark:hover:bg-bgHoverdm px-4 py-2 rounded-md">
  Inscrever-se
</button>

Cards

<div className="bg-cardColorlm dark:bg-cardColorbm text-innerTextColorlm dark:text-innerTextColordm p-4 rounded-lg">
  <h3 className="text-textWhitelm dark:text-whitextdm">Título do Card</h3>
  <p className="text-innerTextColorlm dark:text-innerTextColordm">Texto do card</p>
</div>


Dropdown

<div className="bg-dropMenulbacklm dark:bg-dropMenulbackdm">
  <ul className="text-dropMenulm dark:text-dropMenudm">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</div>
