import { createApi } from "unsplash-js";
import { RandomParams } from "unsplash-js/dist/methods/photos";
import { PaginationParams } from "unsplash-js/dist/types/request"

export const api = createApi({
  accessKey: process.env.NEXT_UNSPLASH_ACCESS_KEY!,
});

export async function fetchRandomPhoto(params: RandomParams) {
  const { response } = await api.photos.getRandom(params);
  if (!response) {
    return null;
  }
  const images = Array.isArray(response) ? response : [response];
  return images;
}

export async function fetchPhotoById(params: Parameters<typeof api.photos.get>[0]) {
  const { response } = await api.photos.get(params);
  if (!response) {
    return null;
  }
  const image = response;
  return image;
}

export async function fetchListOfPhotos(params: PaginationParams) {
  const { response } = await api.photos.list(params);
  if (!response) {
    return null;
  }
  const images = response;
  return images;
}

export async function fetchSearchPhotos(params: Parameters<typeof api.search.getPhotos>[0]) {
  const { response } = await api.search.getPhotos(params);
  if (!response) {
    return null;
  }
  const images = response;
  return images;
}