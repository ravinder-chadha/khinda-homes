export interface Service {
  id: number;
  title: string;
  description?: string;
}

export const mainServices: Service[] = [
  {
    id: 1,
    title: "Project Planning & Coordination"
  },
  {
    id: 2,
    title: "Residential Renovations"
  },
  {
    id: 3,
    title: "Interiors, Exteriors & Finishing"
  }
];

export const galleryServices: Service[] = [
  {
    id: 1,
    title: "Flooring, Tiling, Painting"
  },
  {
    id: 2,
    title: "Installing & Exterior work"
  },
  {
    id: 3,
    title: "Custom Cabinets & Finishing"
  }
];
