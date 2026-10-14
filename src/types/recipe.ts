export type RecipeCategory = 'Breakfast & snacks' | 'Lunch boxes' | 'Mains & meal prep' | 'Soups & stews' | 'Salads & sides' | 'Bakery & spreads';
export type RecipeAudience = 'Family' | 'School lunch' | 'Adults' | 'Older adults' | 'Plant-based';
export interface Recipe {
  id: string;
  slug: string;
  name: string;
  category: RecipeCategory;
  audiences: RecipeAudience[];
  tags: string[];
  image: string;
  description: string;
  clinicalNote: string;
}
