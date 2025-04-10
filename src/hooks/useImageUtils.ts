import { useCallback } from "react";

export default function useImageUtils() {

  // convert an image file into base64
  const imtobase64 = useCallback((images: File[]) => {
    const promises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(image);

        reader.onload = () => {
          const result = reader.result as string
          resolve(result.split(',')[1])
        }

        reader.onerror = (error) => reject(error)
      })
    })

    return Promise.all(promises) as Promise<string[]>
  }, [])


  return { imtobase64 }

}
