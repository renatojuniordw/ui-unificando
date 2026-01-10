
export enum Page {
  Home = 'home',
  Solutions = 'solutions',
  CustomerService = 'customer-service',
  Productivity = 'productivity',
  DigitalPresence = 'digital-presence',
  HowItWorks = 'how-it-works',
  Plans = 'plans',
  About = 'about',
  Contact = 'contact'
}

export interface NavItem {
  label: string;
  page: Page;
}
