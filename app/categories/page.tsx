import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { name: 'Nature', image: '/images/nature.jpg' },
  { name: 'Abstract', image: '/images/abstract.jpg' },
  { name: 'Animals', image: '/images/animals.jpg' },
  { name: 'City', image: '/images/city.jpg' },
  { name: 'Space', image: '/images/space.jpg' },
  { name: 'Technology', image: '/images/technology.jpg' },
  { name: 'Art', image: '/images/art.jpg' },
  { name: 'Minimalist', image: '/images/minimalist.jpg' },
];

export default function CategoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Wallpaper Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link href={`/categories/${category.name.toLowerCase()}`} key={category.name}>
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <Image
                src={category.image}
                alt={`${category.name} wallpapers`}
                width={300}
                height={200}
                className="object-cover w-full h-48"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-white text-xl font-semibold">{category.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
