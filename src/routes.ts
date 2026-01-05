import { Page } from './types';

export const ROUTES: Record<Page, string> = {
    [Page.Home]: '/',
    [Page.CustomerService]: '/atendimento',
    [Page.Automation]: '/automacao',
    [Page.DigitalPresence]: '/presenca-digital',
    [Page.Solutions]: '/solucoes',
    [Page.HowItWorks]: '/como-funciona',
    [Page.Plans]: '/planos',
    [Page.About]: '/sobre',
    [Page.Contact]: '/contato'
};
