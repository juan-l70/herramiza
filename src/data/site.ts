export const site = {
  name: 'Herramiza',
  tagline: 'Herramientas digitales para hacer más.',
  url: 'https://herramiza.vercel.app',
  locale: 'es_ES',
  organization: { name: 'Herramiza', url: 'https://herramiza.vercel.app' },
} as const;

export const categories = [
  { slug: 'ia', name: 'Inteligencia artificial', description: 'Herramientas y guías de IA para trabajar mejor.' },
  { slug: 'software', name: 'Software', description: 'Aplicaciones y software para tu día a día.' },
  { slug: 'productividad', name: 'Productividad', description: 'Métodos y aplicaciones para hacer más con foco.' },
  { slug: 'herramientas', name: 'Herramientas', description: 'Fichas prácticas de herramientas digitales.' },
  { slug: 'tutoriales', name: 'Tutoriales', description: 'Guías claras, paso a paso.' },
  { slug: 'comparativas', name: 'Comparativas', description: 'Comparaciones honestas para elegir mejor.' },
] as const;
