'use client'

import { Gallery, type Image } from "react-grid-gallery";
import { fetchSearchPhotos } from "@/app/lib/unsplash"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  params: {
    category: string;
  }
}

export default function Page({ params }: Props) {
  const [galleryImages, setGalleryImages] = useState<Image[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      setError(null);

      const query: Parameters<typeof fetchSearchPhotos>[0] = {
        query: params.category,
        page: 1,
        perPage: 20,
        orientation: "portrait",
        orderBy: "latest"
      };

      try {
        const response = await fetch(`/api/unsplash?fn=fetchSearchPhotos&params=${JSON.stringify(query)}`);
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        const data = await response.json();

        setGalleryImages(data.data?.results?.map((image: any) => ({
          key: image.id,
          src: image.urls.small,
          width: image.width,
          height: image.height,
          caption: image.alt_description,
        })) || []);
      } catch (err) {
        console.error('Error fetching images:', err);
        setError('Failed to load images. Please try again later.');
      } finally {
      }
    };

    fetchImages();
  }, [params.category]);

  const router = useRouter()

  if (error) return <div>{error}</div>;

  const clickImage = (index: number, item: Image) => {
    console.log(index, item)
    router.push(`/photo/${item.key}`)
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">{params.category} Gallery</h1>
      <div className="bg-gray-100 rounded-lg shadow-md p-6">
        <Gallery
          rowHeight={280}
          enableImageSelection={false}
          images={galleryImages}
          onClick={clickImage}
          margin={5}
        />
      </div>
    </div>
  )
}