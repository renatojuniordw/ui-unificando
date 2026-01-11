export const PRICING = {
    atendimento: {
        base: {
            setup: 300,
            monthly: 80,
            includes: {
                inboxes: 1,
                attendants: 1
            }
        },
        extras: {
            inbox: {
                priceMonthly: 50,
                description: "Canal adicional (WhatsApp, Instagram, Telegram ou Site)"
            },
            attendant: {
                priceMonthly: 20,
                description: "Usuário adicional no painel"
            }
        }
    },

    ia: {
        essential: {
            setup: 1200,
            monthly: 250,
            features: [
                "Resposta automática inteligente",
                "Triagem inicial de contatos",
                "Atendimento fora do horário",
                "Escalonamento para humano"
            ]
        },
        advanced: {
            setup: 2500,
            monthly: 450,
            features: [
                "Atendimento 24/7",
                "Entendimento de mensagens e áudios",
                "Qualificação avançada",
                "Agendamento automático",
                "Vendas assistidas por IA",
                "Escalonamento inteligente"
            ]
        }
    },

    site: {
        landing: {
            setup: 1300,
            pagesIncluded: 1,
            features: [
                "Design responsivo",
                "Alta performance",
                "SEO básico",
                "Domínio grátis (1 ano)",
                "Hospedagem grátis (1 ano)",
                "Integração com WhatsApp e formulários"
            ]
        },
        extraPage: {
            priceSetup: 130,
            description: "Página adicional (blog, serviços, portfólio)"
        }
    },

    calculadora: {
        rules: {
            minimumInboxes: 1,
            minimumAttendants: 1,
            diagnosticRequired: {
                iaEnabled: true,
                automationComplexity: "medium_or_high"
            }
        }
    },

    observations: [
        "Não fornecemos números de WhatsApp ou contas de Instagram",
        "Os canais utilizados são sempre do cliente",
        "Não nos responsabilizamos por bloqueios ou banimentos das plataformas",
        "Valores válidos para soluções padrão; cenários complexos podem exigir diagnóstico"
    ]
} as const;
