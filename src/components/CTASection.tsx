export interface CTASectionProps {
  eyebrow?: string | null;
  heading?: string;
  body?: string;
  callLabel?: string;
  messageLabel?: string;
  microcopy?: string | null;
}

// Intentionally renders nothing. The "Let's Talk / Not Sure Where to Start?" CTA
// block was removed site-wide from every professional and service provider page.
// Kept as a no-op export so existing and future imports remain safe.
const CTASection = (_props: CTASectionProps = {}) => null;

export default CTASection;
