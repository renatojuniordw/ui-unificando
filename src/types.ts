
export enum Page {
  Home = 'home',
  Solutions = 'solutions',
  Atendimento = 'atendimento',
  Automacao = 'automacao',
  Digital = 'digital',
  HowItWorks = 'how-it-works',
  Plans = 'plans',
  About = 'about',
  Contact = 'contact'
}

export interface NavItem {
  label: string;
  page: Page;
}
