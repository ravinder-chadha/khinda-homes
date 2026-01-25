export interface Testimonial {
  id: number;
  text: string;
  author: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Khinda Limited did an excellent job on our renovation. The quality of work and attention to detail were impressive, and everything was completed on time. We appreciated the clear communication throughout the project.",
    author: "Jason Miller"
  },
  {
    id: 2,
    text: "We hired Khinda Limited for interior finishing and flooring, and we're very happy with the results. Professional team, clean work, and fair pricing. Would definitely recommend them.",
    author: "Amanda Thompson"
  },
  {
    id: 3,
    text: "From start to finish, Khinda Limited was reliable and easy to work with. The attention to detail really showed in the final finish. We would use them again for future projects.",
    author: "Michael Peterson"
  }
];
