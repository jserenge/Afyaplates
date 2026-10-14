import Link from 'next/link';
import { notFound } from 'next/navigation';
import { recipes } from '@/data/recipes';

export function generateStaticParams() { return recipes.map((recipe) => ({ slug: recipe.slug })); }

export default async function RecipePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipe = recipes.find((item) => item.slug === slug);
  if (!recipe) notFound();
  return <section className="mx-auto max-w-5xl px-5 py-12"><Link href="/recipes" className="text-sm font-bold text-afya-600">← All recipes</Link><div className="mt-5 grid gap-8 lg:grid-cols-[.8fr_1.2fr]"><div className="lg:sticky lg:top-24 lg:self-start"><img src={recipe.image} alt={`Full recipe card: ${recipe.name}`} className="w-full rounded-3xl border border-stone-200 shadow-lg" /></div><article><p className="text-sm font-bold uppercase tracking-widest text-afya-600">{recipe.category}</p><h1 className="mt-2 text-4xl font-black tracking-tight">{recipe.name}</h1><p className="mt-4 text-lg leading-relaxed text-stone-600">{recipe.description}</p><div className="mt-6 rounded-2xl bg-stone-100 p-5"><h2 className="font-black">Designed for</h2><p className="mt-2 text-sm text-stone-600">{recipe.audiences.join(' · ')}</p><div className="mt-3 flex flex-wrap gap-2">{recipe.tags.map((tag) => <span key={tag} className="rounded-full bg-white px-3 py-1 text-xs font-bold text-afya-600">{tag}</span>)}</div></div><div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5"><h2 className="font-black text-amber-900">Clinical ingredient note</h2><p className="mt-2 text-sm leading-relaxed text-amber-900">{recipe.clinicalNote}</p><p className="mt-3 text-xs font-semibold text-amber-800">This catalogue supports meal planning and does not replace individual clinical nutrition advice.</p></div><p className="mt-6 text-sm text-stone-500">The original recipe card at left contains the complete ingredients and method.</p></article></div></section>;
}
