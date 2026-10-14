'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { Recipe } from '@/types/recipe';
import { recipeCategories } from '@/data/recipes';

const audienceFilters = ['All ages', 'Family', 'School lunch', 'Adults', 'Older adults', 'Plant-based'] as const;

export function RecipeCatalogue({ recipes }: { recipes: Recipe[] }) {
  const [category, setCategory] = useState<string>('All recipes');
  const [audience, setAudience] = useState<string>('All ages');
  const [query, setQuery] = useState('');
  const visible = useMemo(() => recipes.filter((recipe) => {
    const matchesCategory = category === 'All recipes' || recipe.category === category;
    const matchesAudience = audience === 'All ages' || recipe.audiences.includes(audience as Recipe['audiences'][number]);
    const haystack = `${recipe.name} ${recipe.category} ${recipe.tags.join(' ')} ${recipe.description}`.toLowerCase();
    return matchesCategory && matchesAudience && haystack.includes(query.toLowerCase());
  }), [recipes, category, audience, query]);

  return <div>
    <div className="rounded-3xl border border-afya-100 bg-afya-50 p-5">
      <label className="block text-sm font-bold text-afya-900">Find a recipe<input value={query} onChange={(event) => setQuery(event.target.value)} className="mt-2 w-full rounded-xl border border-afya-100 bg-white px-4 py-3 font-normal outline-none focus:border-afya-500" placeholder="Search chicken, lunch box, vegan, soup…" /></label>
      <div className="mt-4 flex flex-wrap gap-2">{['All recipes', ...recipeCategories].map((item) => <button key={item} onClick={() => setCategory(item)} className={`rounded-full px-3 py-2 text-xs font-bold ${category === item ? 'bg-afya-600 text-white' : 'bg-white text-afya-900 ring-1 ring-afya-100'}`}>{item}</button>)}</div>
      <div className="mt-3 flex flex-wrap gap-2">{audienceFilters.map((item) => <button key={item} onClick={() => setAudience(item)} className={`rounded-full px-3 py-2 text-xs font-bold ${audience === item ? 'bg-stone-800 text-white' : 'bg-white text-stone-600 ring-1 ring-stone-200'}`}>{item}</button>)}</div>
    </div>
    <p className="mt-6 text-sm text-stone-500">{visible.length} recipes shown. Clinical tags are prompts for review, not medical clearance.</p>
    <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{visible.map((recipe) => <Link key={recipe.id} href={`/recipes/${recipe.slug}`} className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><img src={recipe.image} alt={`Recipe card for ${recipe.name}`} className="h-52 w-full object-cover object-top" /><div className="p-5"><p className="text-xs font-bold uppercase tracking-wider text-afya-600">{recipe.category}</p><h2 className="mt-1 text-lg font-black text-stone-900">{recipe.name}</h2><p className="mt-2 text-sm text-stone-600">{recipe.description}</p><div className="mt-3 flex flex-wrap gap-1.5">{recipe.tags.slice(0, 3).map((tag) => <span key={tag} className="rounded-full bg-stone-100 px-2 py-1 text-[10px] font-bold text-stone-600">{tag}</span>)}</div><p className="mt-4 text-sm font-bold text-afya-600">Open recipe card →</p></div></Link>)}</div>
  </div>;
}
