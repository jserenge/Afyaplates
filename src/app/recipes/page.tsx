import { RecipeCatalogue } from '@/components/recipes/RecipeCatalogue';
import { recipes } from '@/data/recipes';

export default function RecipesPage() {
  return <section className="mx-auto max-w-6xl px-5 py-14">
    <p className="text-sm font-bold uppercase tracking-widest text-afya-600">Afya Plates recipe library</p>
    <h1 className="mt-2 text-4xl font-black tracking-tight text-stone-900">Recipes arranged for real life.</h1>
    <p className="mt-4 max-w-3xl text-stone-600">Browse 47 recipes by the moment they serve: breakfast and snacks, school-ready lunch boxes, meal prep, soups, fresh sides and bakery favourites. Every card stays paired with its original visual recipe.</p>
    <div className="mt-8"><RecipeCatalogue recipes={recipes} /></div>
  </section>;
}
