export type Testimonial = {
  id: string;
  quote: string;
  credit: string;
  context?: string;
  sourceNote?: string;
};

export const TESTIMONIALS: Testimonial[] = [
 
];

export const featuredTestimonials = (count = 3): Testimonial[] => TESTIMONIALS.slice(0, count);