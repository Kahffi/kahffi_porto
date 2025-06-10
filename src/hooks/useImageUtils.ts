import { useCallback } from "react";

export default function useImageUtils() {
  // convert an image file into base64
  /**
     * `imtoBase64 would change an images into a string
     */
  const imtobase64 = useCallback((images: File[]) => {
    const promises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(image);

        reader.onload = () => {
          const result = reader.result as string;
          resolve(result.split(",")[1]);
        };

        reader.onerror = (error) => reject(error);
      });
    });

    return Promise.all(promises) as Promise<string[]>;
  }, []);

  /**
     * `stageImage` would recieve an event from input:file then convert them into string
     * 
     * use onValue() as a callback to update the desired state 
     */
    const stageImage = useCallback(async (e: React.ChangeEvent<HTMLInputElement>, onValue: (imgStr: string) => void) => {
    if (!e.target.files || e.target.files?.length < 1) {
      return;
    }
    try {
      const file = e.target.files[0];
      const base64Img = await imtobase64([file]);
      const imgStr = `data:image/webp;base64,${base64Img[0]}`;
      onValue(imgStr)
    } catch (e) {
      console.error(e);
    }
  }, [imtobase64])
  return { imtobase64, stageImage };
}
