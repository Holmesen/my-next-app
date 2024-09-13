import type { Metadata } from "next";
import Image from "next/image";
import { fetchSearchPhotos } from "@/app/lib/unsplash"
import { Basic } from "unsplash-js/dist/methods/photos/types";
import { Suspense } from "react";

type Props = {
  children: React.ReactNode;
  params: {
    category: string;
  }
};

export const metadata: Metadata = {
  title: "Wallpaper Haven - Category",
  description: "Explore our curated collection of wallpapers for your device.",
}

export default async function Layout({ children, params }: Props) {
  const res = await fetchSearchPhotos({
    query: params.category,
    page: 1,
    perPage: 1,
    orientation: "portrait",
    orderBy: "latest"
  })
  const images: Basic[] = [...(res?.results || [])];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
                {params.category}
              </h1>
              <p className="text-lg text-gray-600">
                Explore our curated collection of {params.category.toLowerCase()} wallpapers.
                Find the perfect backdrop to express your style and personality.
              </p>
            </div>
            <Suspense fallback={<div className="w-full h-64 bg-gray-200 rounded-lg"></div>}>
              <div className="md:w-1/3">
                <div className="relative w-64 h-64 mx-auto">
                  <Image
                    src={images[0]?.urls?.small || "/images/tiago.jpg"}
                    layout="fill"
                    objectFit="cover"
                    alt={`${params.category} Wallpaper Preview`}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </Suspense>
          </div>
          <div className="mt-16">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}