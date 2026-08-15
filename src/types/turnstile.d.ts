// Canonical Cloudflare Turnstile global. Declared once here so that
// Contact.tsx, ShareYourExperience.tsx, and NewsletterSignup.tsx share a
// single Window.turnstile shape instead of three conflicting ones
// (which produced TS2717 "subsequent property declarations" errors).
declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        },
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

export {};
