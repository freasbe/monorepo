// lib/gtag.js
export const GA_TRACKING_ID = 'G-19YC4LZ1VR'; // Remplacez par votre propre ID de mesure

export const pageview = (url) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', GA_TRACKING_ID, {
            page_path: url,
        });
    }
};

// Fonction pour envoyer des événements personnalisés à GA
export const event = ({ action, category, label, value }) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }
};
