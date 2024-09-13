import Image from "next/image";
import { fetchPhotoById, fetchRandomPhoto } from "@/app/lib/unsplash";
import { Full } from "unsplash-js/dist/methods/photos/types";
import Link from "next/link";

type Props = {
  params: {
    id: string;
  }
};

export default async function Page({ params }: Props) {

  const res: Full | null = await fetchPhotoById({ photoId: params.id });
  const imageInfo: Partial<Full & { views: number, downloads: number }> = res || {}
  // 获取关联集合随机图片
  const relateIds = imageInfo.related_collections?.results?.map((collection) => collection.id) || []
  const res2 = await fetchRandomPhoto({ collectionIds: relateIds, count: 5 })
  const relatePhotos = res2 || []

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 text-gray-800">{imageInfo.description || imageInfo.alt_description || ''}</h1>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16 sm:mb-20">
        <div className="lg:flex-[2] flex justify-center">
          <div className="relative w-full h-fit max-w-[480px] aspect-ratio-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={imageInfo.urls!.regular}
              width={1200}
              height={900}
              layout="responsive"
              objectFit="contain"
              alt="Featured Image"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
        <div className="lg:flex-1 flex flex-col gap-6 bg-white shadow-lg rounded-lg p-6 h-fit">
          <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
            <Image
              src={imageInfo.user?.profile_image?.medium || "/images/default-avatar.jpg"}
              width={64}
              height={64}
              alt={imageInfo.user?.name || "User"}
              className="rounded-full"
            />
            <div>
              <h3 className="font-bold text-lg">{imageInfo.user?.name}</h3>
              <p className="text-sm text-gray-600">@{imageInfo.user?.username}</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 pb-6 border-b border-gray-200">
            {[
              { label: "Views", value: imageInfo.views },
              { label: "Downloads", value: imageInfo.downloads },
              { label: "Likes", value: imageInfo.likes }
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col items-center">
                <span className="text-sm text-gray-600">{label}</span>
                <span className="font-bold text-lg sm:text-xl">{value}</span>
              </div>
            ))}
          </div>
          <div className="space-y-4 sm:space-y-6">
            {[
              { icon: "/svg/camera.svg", text: `${imageInfo.exif?.make} ${imageInfo.exif?.model}` },
              { icon: "/svg/date.svg", text: new Date(imageInfo.created_at!).toLocaleDateString() },
              { icon: "/svg/location.svg", text: `${imageInfo.location?.name}, ${imageInfo.location?.city}, ${imageInfo.location?.country}` },
              { icon: "/svg/iso.svg", text: `ISO ${imageInfo.exif?.iso}` },
              { icon: "/svg/aperture.svg", text: imageInfo.exif?.aperture },
              { icon: "/svg/exposure.svg", text: `${imageInfo.exif?.exposure_time}s` }
            ].map(({ icon, text }) => (
              <div key={icon} className="flex items-center gap-3">
                <Image src={icon} width={24} height={24} alt="" className="text-gray-600 shrink-0" />
                <span className="font-medium text-sm sm:text-base">{text}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-3">
            <h4 className="font-bold text-lg mb-2">Download</h4>
            <button className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              <Link href={imageInfo.urls!.full} target="_blank" download>
                Large ({imageInfo.width}x{imageInfo.height})
              </Link>
            </button>
            <button className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              <Link href={imageInfo.urls!.regular} target="_blank" download>
                Medium ({Math.round(imageInfo.width! / 2)}x{Math.round(imageInfo.height! / 2)})
              </Link>
            </button>
            <button className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              <Link href={imageInfo.urls!.small} target="_blank" download>
                Small ({Math.round(imageInfo.width! / 4)}x{Math.round(imageInfo.height! / 4)})
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="mb-16 sm:mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-800">Recommended</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {relatePhotos.map((img, index) => (
            <Link key={img.id} href={`/photo/${img.id}`}>
              <div className="aspect-ratio-[3/4] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 relative size-full h-60">
                <Image
                  src={img.urls!.regular}
                  // width={180}
                  // height={240}
                  fill={true}
                  objectFit="cover"
                  alt={img.description || img.alt_description || `Recommended Image ${index + 1}`}
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}