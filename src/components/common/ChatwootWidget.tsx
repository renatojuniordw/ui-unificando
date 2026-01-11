import React, { useEffect } from 'react';

const CHATWOOT_BASE_URL = "https://painel.unificando.com.br";
const CHATWOOT_TOKEN = import.meta.env.VITE_CHATWOOT_TOKEN || '';

declare global {
    interface Window {
        chatwootSettings: any;
        chatwootSDK: any;
    }
}

export const ChatwootWidget: React.FC = () => {
    useEffect(() => {
        // Prevent double loading or loading if no token
        if (!CHATWOOT_TOKEN || window.chatwootSDK) return;

        // Defere o carregamento para não impactar o LCP/FCP
        const timer = setTimeout(() => {
            window.chatwootSettings = {
                position: "right",
                type: "standard",
                launcherTitle: "Fale conosco no chat"
            };

            const script = document.createElement("script");
            script.src = `${CHATWOOT_BASE_URL}/packs/js/sdk.js`;
            script.async = true;
            script.onload = () => {
                window.chatwootSDK.run({
                    websiteToken: CHATWOOT_TOKEN,
                    baseUrl: CHATWOOT_BASE_URL
                });
            };

            document.body.appendChild(script);
        }, 3000); // 3 seconds delay

        return () => clearTimeout(timer);
    }, []);

    return null;
};
