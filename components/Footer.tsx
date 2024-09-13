import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const categories = ['Abstract', 'Nature', 'People', 'Animals', 'Food', 'Travel', 'Architecture', 'Technology', 'Cars'];
  const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Orange'];
  const styles = ['Texture', 'Pattern', 'Colorful', 'Monochromatic', 'Abstract', 'Digital'];
  const socialLinks = [
    { name: 'github', src: '/svg/github.svg' },
    { name: 'codepen', src: '/svg/codepen.svg' },
    { name: 'twitter', src: '/svg/twitter.svg' },
    { name: 'facebook', src: '/svg/facebook.svg' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Categories</h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category}><Link href="#" className="hover:text-indigo-400 transition-colors duration-200">{category}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Color</h3>
            <ul className="space-y-3">
              {colors.map((color) => (
                <li key={color}><Link href="#" className="hover:text-indigo-400 transition-colors duration-200">{color}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Style</h3>
            <ul className="space-y-3">
              {styles.map((style) => (
                <li key={style}><Link href="#" className="hover:text-indigo-400 transition-colors duration-200">{style}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href="#" className="hover:opacity-80 transition-opacity duration-200">
                  <Image
                    src={social.src}
                    width={32}
                    height={32}
                    className="object-cover"
                    alt={social.name}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>&copy; 2024 Wallpaper Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}