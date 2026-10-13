import wheyCho from '../Img/Produts/wheyCho.png'
import doseWhey from '../Img/Produts/doseWhey.png'
import creatina300 from '../Img/Produts/creatina300.png'
import ripped120 from '../Img/Produts/ripped120.png'
import grenade from '../Img/Produts/grenade.png'
import omega120 from '../Img/Produts/omega120.png'
import inovit from '../Img/Produts/inovit.png'
import colageno from '../Img/Produts/colageno.png'

export const imagens = { wheyCho, doseWhey, creatina300, ripped120, grenade, omega120, inovit, colageno }

export const LOJA = 'https://www.nossaformaoficial.com.br/linha-inov-nutrition-suplementos?p=1'
export const WHATSAPP = 'https://api.whatsapp.com/send/?phone=5547988027403'

export const redes = [
  { id: 'whatsapp', nome: 'WhatsApp', contato: '+55 47 98802-7403', descricao: 'Tire dúvidas e faça seu pedido com o nosso time.', href: WHATSAPP, icone: 'whatsapp' },
  { id: 'telegram', nome: 'Telegram', contato: 'Canal Inov', descricao: 'Novidades e ofertas direto no seu celular.', href: 'https://t.me/your_username', icone: 'telegram' },
  { id: 'instagram', nome: 'Instagram', contato: '@inovnutrition', descricao: 'Bastidores, dicas de treino e lançamentos.', href: 'https://www.instagram.com/inovnutrition/', icone: 'instagram' },
  { id: 'facebook', nome: 'Facebook', contato: '/InovNutrition', descricao: 'Acompanhe a comunidade Inov.', href: 'https://www.facebook.com/InovNutrition', icone: 'facebook' },
  { id: 'loja', nome: 'Loja oficial', contato: 'nossaformaoficial.com.br', descricao: 'Compre a linha completa com entrega para todo o Brasil.', href: LOJA, icone: 'carrinho' },
]

export const paginas = [
  { to: '/', nome: 'Home' },
  { to: '/sobre', nome: 'Sobre' },
  { to: '/produtos', nome: 'Produtos' },
  { to: '/contato', nome: 'Contato' },
]

// Cartões de objetivo da Home. `categoria` aponta para a aba da página de produtos.
export const objetivos = [
  {
    title: 'Proteínas',
    subtitle: 'Aumente seus músculos',
    linkText: 'Saiba mais',
    text: 'As proteínas são essenciais para o crescimento muscular e a recuperação após o exercício. Descubra nossas opções de proteínas de alta qualidade para alcançar seus objetivos de fitness.',
    categoria: 'Proteina',
    icone: 'haltere',
  },
  {
    title: 'Aminoácidos',
    subtitle: 'Melhore seu desempenho',
    linkText: 'Confira agora',
    text: 'Os aminoácidos são os blocos de construção dos músculos. Descubra nossas opções de aminoácidos essenciais e melhore seu desempenho atlético.',
    categoria: 'Aminoacidos',
    icone: 'raio',
  },
  {
    title: 'Termogênicos',
    subtitle: 'Queime gordura mais rápido',
    linkText: 'Veja nossas opções',
    text: 'Os termogênicos aumentam a taxa metabólica e ajudam a queimar gordura mais rapidamente. Explore nossa seleção de termogênicos para alcançar seus objetivos de perda de peso.',
    categoria: 'Termogenico',
    icone: 'chama',
  },
  {
    title: 'Vitaminas',
    subtitle: 'Mantenha-se saudável',
    linkText: 'Descubra mais',
    text: 'As vitaminas desempenham um papel crucial na manutenção da saúde. Conheça nossas opções de vitaminas para fortalecer seu sistema imunológico e melhorar sua saúde geral.',
    categoria: 'Vitaminas',
    icone: 'coracao',
  },
  {
    title: 'Fitoterápicos',
    subtitle: 'Remédios naturais',
    linkText: 'Conheça nossas opções',
    text: 'Os fitoterápicos oferecem uma abordagem natural para tratar uma variedade de condições de saúde. Descubra nossas opções de fitoterápicos para uma vida mais saudável.',
    categoria: 'Vitaminas',
    icone: 'folha',
  },
  {
    title: 'Colágenos',
    subtitle: 'Pele jovem e saudável',
    linkText: 'Saiba mais aqui',
    text: 'O colágeno é essencial para a saúde da pele, cabelos e unhas. Explore nossas opções de colágeno para uma aparência jovem e uma pele saudável.',
    categoria: 'Colageno',
    icone: 'brilho',
  },
]

const descricao3Whey =
  'O 3Whey é uma mistura de três tipos de filtragens de Whey Protein: Whey Concentrado, Isolado e Hidrolisado. É uma proteína de qualidade, fornecendo 22g de Proteína, 6,8g de Glutamina e 5,4g de BCAA por porção.'

export const categorias = [
  {
    id: 'Proteina',
    nome: 'Proteínas',
    icone: 'haltere',
    produtos: [
      {
        nome: '3Whey',
        imagem: wheyCho,
        descricao: [descricao3Whey],
        rotuloOpcoes: 'Sabores',
        opcoes: ['Chocolate', 'Baunilha', 'Morango', 'Paçoca'],
        nutrientes: [
          { name: 'Proteína', amount: '22g', percentage: 73 },
          { name: 'Carboidratos', amount: '3.6g', percentage: 12 },
          { name: 'Glutamina', amount: '6.8g', percentage: 22 },
          { name: 'BCAA', amount: '5.4g', percentage: 18 },
        ],
      },
      {
        nome: '3Whey',
        imagem: doseWhey,
        descricao: [descricao3Whey],
        rotuloOpcoes: 'Sabores',
        opcoes: ['Chocolate', 'Baunilha', 'Morango', 'Paçoca'],
      },
    ],
  },
  {
    id: 'Aminoacidos',
    nome: 'Aminoácidos',
    icone: 'raio',
    produtos: [
      {
        nome: 'Creatina 100% Pure',
        imagem: creatina300,
        descricao: [
          'A Creatina 100% Pura Inov Nutrition é recomendada para o aumento da força, da potência e da massa muscular (hipertrofia). A creatina traz esses ganhos para o treino quando aliada a uma boa dieta e um programa de exercícios adequado, por estar envolvida na produção de ATP, fonte de energia usada pelos músculos em exercícios predominantemente anaeróbicos (de alta intensidade e curta duração), como musculação, saltos, arremessos de peso e corridas.',
        ],
        rotuloOpcoes: 'Tamanhos',
        opcoes: ['1Kg', '300g', '100g'],
        nutrientes: [
          { name: 'Creatina', amount: '3g', percentage: 100 },
          { name: 'Carboidratos', amount: '0g', percentage: 0 },
        ],
      },
    ],
  },
  {
    id: 'Termogenico',
    nome: 'Termogênicos',
    icone: 'chama',
    produtos: [
      {
        nome: 'Ripped Full',
        imagem: ripped120,
        descricao: [
          'Ripped Full é um termogênico que tem a formulação perfeita para quem deseja mais pique para o dia a dia, eliminar a retenção de líquidos e auxiliar a queimar aquela gordurinha indesejada. Para quem pratica atividade física, ele auxilia muito na definição.',
        ],
        destaque: 'Nova fórmula: Agora com Picolinato de Cromo e Psillium!',
        rotuloOpcoes: 'Apresentações',
        opcoes: ['120 caps', '60 caps'],
        nutrientes: [
          { name: 'Cafeína', amount: '420mg', percentage: 42 },
          { name: 'Chá Verde', amount: '200mg', percentage: 20 },
          { name: 'Psyllium', amount: '200mg', percentage: 20 },
          { name: 'Citrus Aurantion', amount: '5mg', percentage: 0.5 },
          { name: 'Chromium Picolinate', amount: '25mcg', percentage: 0.2 },
        ],
      },
    ],
  },
  {
    id: 'PreTreino',
    nome: 'Pré Treino',
    icone: 'alvo',
    produtos: [
      {
        nome: 'Grenade',
        imagem: grenade,
        descricao: [
          'Quem pratica atividade física não se cansa de buscar a melhora da sua performance nos treinos e melhorar seus resultados. O Pré Treino Grenade contém na sua composição uma dose incrível de ingredientes que te ajudam a aumentar sua energia e disposição.',
        ],
        rotuloOpcoes: 'Sabores',
        opcoes: ['Laranja', 'Guaraná com Açaí', 'Limão'],
        nutrientes: [
          { name: 'Beta Alanina', amount: '2g', percentage: 20 },
          { name: 'Arginina', amount: '2g', percentage: 20 },
          { name: 'Creatina', amount: '2g', percentage: 20 },
          { name: 'L-Taurina', amount: '1g', percentage: 10 },
          { name: 'Cafeína', amount: '300mg', percentage: 1 },
          { name: 'L-Inositol', amount: '60mg', percentage: 0.5 },
          { name: 'Carboidratos', amount: '1,6g', percentage: 16 },
        ],
      },
    ],
  },
  {
    id: 'Vitaminas',
    nome: 'Vitaminas',
    icone: 'coracao',
    produtos: [
      {
        nome: 'Omega 3',
        imagem: omega120,
        descricao: [
          'O ômega 3 é um tipo de gordura boa que tem ação anti-inflamatória, podendo ser utilizado para controlar os níveis de colesterol e glicemia ou prevenir doenças cardiovasculares e cerebrais, além de melhorar a memória e a disposição.',
        ],
        rotuloOpcoes: 'Apresentações',
        opcoes: ['240 caps', '120 caps', '60 caps'],
        nutrientes: [
          { name: 'EPA', amount: '540mg', percentage: 54 },
          { name: 'DHA', amount: '360mg', percentage: 36 },
        ],
      },
      {
        nome: 'Inovit',
        imagem: inovit,
        descricao: [
          'Na nossa vida cada vez mais corrida, deixamos de consumir uma variedade de alimentos. Principalmente frutas, legumes e verduras. E o que essa falta pode causar? Pode causar a ausência de nutrientes para o nosso corpo exercer sua função normalmente! Podendo assim gerar uma carência nutricional e assim ser refletida em uma desordem metabólica!',
          'E você sabia que esse cansaço e essa fadiga muscular, unhas e cabelos quebradiços, pode ser a falta de um ou mais nutrientes e minerais.',
        ],
        rotuloOpcoes: 'Apresentações',
        opcoes: ['120 caps'],
        composicao: [
          { name: 'Vitamina A', amount: '400mcg' },
          { name: 'Vitamina D', amount: '5mcg' },
          { name: 'Vitamina C', amount: '45mcg' },
          { name: 'Vitamina E', amount: '15mg' },
          { name: 'Vitamina B1', amount: '1.2mg' },
          { name: 'Vitamina B2', amount: '1.3mg' },
          { name: 'Vitamina B6', amount: '1.3mg' },
          { name: 'Vitamina K', amount: '65mcg' },
          { name: 'Vitamina B5', amount: '5mg' },
          { name: 'Niacina', amount: '16mg' },
          { name: 'Ácido Fólico', amount: '240mg' },
          { name: 'Biotina', amount: '30mcg' },
        ],
      },
    ],
  },
  {
    id: 'Colageno',
    nome: 'Colágeno',
    icone: 'brilho',
    produtos: [
      {
        nome: 'Colágeno Premium Verisol Hidrolisado',
        nomeCurto: 'Colágeno',
        imagem: colageno,
        descricao: [
          'Colágeno Hidrolisado Verisol Plus promove aumento da elasticidade da pele, redução de rugas de expressão, diminuição da celulite, maior crescimento capilar, fortalecimento das unhas e desacelera os efeitos do envelhecimento da pele.',
        ],
        rotuloOpcoes: 'Sabores',
        opcoes: ['Guaraná com Açaí'],
        nutrientes: [
          { name: 'Colageno', amount: '7g', percentage: 70 },
          { name: 'Biotina', amount: '1.5g', percentage: 15 },
          { name: 'Maca Peruana', amount: '1g', percentage: 10 },
          { name: 'Vitamina C', amount: '200mg', percentage: 2 },
          { name: 'Hyaluronic Acid', amount: '100mg', percentage: 1 },
          { name: 'Vitamina B', amount: '40mg', percentage: 0.4 },
        ],
      },
    ],
  },
]

export const diferenciais = [
  {
    icone: 'capsula',
    titulo: 'Pureza e qualidade em cada cápsula',
    texto: 'Cada cápsula é uma promessa de qualidade e pureza, garantindo uma experiência de suplementação confiável e eficaz. Com os mais altos padrões de controle de qualidade, oferecemos produtos que impulsionam sua jornada de bem-estar.',
  },
  {
    icone: 'subindo',
    titulo: 'Inovação para resultados excepcionais',
    texto: 'Nossa constante pesquisa e inovação resultam em produtos que superam as expectativas, oferecendo os últimos avanços em nutrição esportiva. Com nossa inovação, você alcança resultados excepcionais rapidamente.',
  },
  {
    icone: 'frasco',
    titulo: 'Excelência com matéria-prima de ponta',
    texto: 'Do início ao fim, nossa dedicação à excelência começa com a seleção cuidadosa das melhores matérias-primas. Com ingredientes de ponta e processos de fabricação avançados, garantimos qualidade em cada dose.',
  },
  {
    icone: 'sorvete',
    titulo: 'Sabores irresistíveis',
    texto: 'Descubra uma variedade de sabores irresistíveis que satisfazem até os paladares mais exigentes. De doce a cítrico, de frutado a cremoso, nossos suplementos oferecem uma ampla gama de opções para atender aos gostos de todos, garantindo uma experiência agradável e personalizada.',
  },
  {
    icone: 'etiqueta',
    titulo: 'Qualidade premium a um preço acessível',
    texto: 'Nossa missão é oferecer qualidade extrema com os melhores ingredientes e pelo melhor preço. Priorizamos a acessibilidade sem comprometer a qualidade, para que todos possam desfrutar dos benefícios de uma vida mais saudável.',
  },
  {
    icone: 'chama',
    titulo: 'Suplementos potentes para emagrecimento',
    texto: 'Alcance seus objetivos de peso com nossos suplementos potentes, formulados para impulsionar o metabolismo e queimar gordura de forma eficaz.',
  },
]
