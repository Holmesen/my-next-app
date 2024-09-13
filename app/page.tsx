'use client'
import Image from "next/image";
import CustomizeCard from "@/components/CustomizeCard";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const customizeCards = [
    {
      title: "Choose Your Colors",
      description: "Pick colors you love, and we'll suggest matching wallpapers.",
      image: {
        src: "/images/Palette-amico.png",
        width: 200,
        height: 150,
        alt: "Choose Your Colors",
      },
    },
    {
      title: "Select Your Category",
      description: "Explore our categories and find your perfect wallpaper.",
      image: {
        src: "/images/Collection-amico.png",
        width: 200,
        height: 150,
        alt: "Select Your Category",
      },
    },
    {
      title: "Pick Your Style",
      description: "Choose a style that fits your personal taste.",
      image: {
        src: "/images/Images-amico.png",
        width: 200,
        height: 150,
        alt: "Pick Your Style",
      },
    }
  ]

  const categories = [
    'Nature',
    'Abstract',
    'Sports',
    'People',
    'Animals',
    'Food',
    'Travel',
    'Architecture',
    'Technology',
    'Cars',
    'Celebrities',
    'Fashion',
    'Business',
    'Education',
    'Music',
    'Art',
    'History',
  ]

  const router = useRouter()
  const clickCategory = (category: string) => () => {
    router.push(`/categories/${category}`)
  }

  return (
    <>
      <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Wallpaper Haven
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Where Beautiful Screens Begin</h2>
            <p className="text-lg text-gray-700 mb-8">
              Unleash the potential of your screen with our carefully curated collection of artistic wallpapers, designed to inspire and delight.
            </p>
            <motion.button
              className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Now
            </motion.button>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/images/Portfolio-cuate.png"
              width={600}
              height={450}
              className="object-cover rounded-lg"
              alt="Wallpaper Haven Portfolio"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Customize Your Perfect Wallpaper</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customizeCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <CustomizeCard card={card} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <div className="relative">
              <Image src="/images/paid.png" width={182} height={260} className="object-cover rounded-lg shadow-lg" alt="Paid wallpaper" />
              <Image src="/images/phone.png" width={120} height={228} className="object-cover rounded-lg shadow-lg absolute -bottom-4 -right-4" alt="Phone wallpaper" />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-6">Experience Your Design Live</h2>
            <p className="text-lg text-gray-700">
              Preview your chosen wallpapers on real devices. See how your favorite designs look on the latest smartphones and tablets. Whether it&apos;s a vibrant color scheme, an elegant category, or a unique style, our preview tool brings your vision to life right before your eyes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Categories & Themes</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.span
                key={category}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-indigo-800 font-medium hover:from-blue-200 hover:to-indigo-200 transition duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={clickCategory(category)}
              >
                {category}
              </motion.span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
