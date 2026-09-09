export type Tool = {
  slug: string; name: string; description: string; category: string; pricing: string; website: string;
};

export const tools: Tool[] = [
  { slug: 'notion', name: 'Notion', description: 'Espacio de trabajo flexible para notas, proyectos y conocimiento.', category: 'Productividad', pricing: 'Freemium', website: 'https://www.notion.so' },
];
