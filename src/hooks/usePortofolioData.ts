import { useEffect, useState } from "react";
import { AdminFormData } from "../pages/Admin";
import { onValue, ref } from "firebase/database";
import { database } from "../firebase";

type PortofolioData = AdminFormData

export default function usePortofolioData() {
    const [portofolioData, setPortofolioData] = useState<PortofolioData>({
        header: "",
        selfIntro: "",
        skills: [],
        subHeader: "",
        tools: [],
    })
    const [profileImage, setProfileImage] = useState<string>("");

    // Fetch Portofolio data from firebase
    useEffect(() => {
        const portoRef = ref(database, 'portofolio/');
        const unsub = onValue(portoRef, (snapshot) => {
            const data = snapshot.val() as AdminFormData;
            setPortofolioData({ ...data })
        })

        return () => unsub()
    }, [])

    // Fetch image from firebase
    useEffect(() => {
        const portoImageRef = ref(database, 'portofolioImage');
        const unsub = onValue(portoImageRef, (snapshot) => {
            const data = snapshot.val() as string;
            setProfileImage(data)
        })

        return () => unsub()
    }, [])

    return { portofolioData, profileImage, setPortofolioData }

}