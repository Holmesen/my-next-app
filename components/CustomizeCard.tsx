import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  card: {
    title: string;
    description: string;
    image: {
      src: string;
      width?: number;
      height?: number;
      alt: string;
    };
  }
};

export default function CustomizeCard({ card }: Props) {
  return (
    <motion.div
      className="flex flex-col h-full items-center p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
      whileHover={{ y: -5 }}
    >
      <div className="mb-4 overflow-hidden rounded-lg">
        <Image
          src={card.image.src}
          width={card.image.width || 200}
          height={card.image.height || 150}
          className="object-cover w-full h-full"
          alt={card.image.alt}
        />
      </div>
      <h3 className="text-2xl font-bold mb-2 text-gray-800">
        {card.title}
      </h3>
      <p className="text-lg text-center text-gray-600">
        {card.description}
      </p>
    </motion.div>
  )
}
