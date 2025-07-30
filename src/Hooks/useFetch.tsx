import type { GeoData } from "../Types/Types";
import { useEffect, useState } from "react";

function useFetch(path: string) {
    const [data, setData] = useState<GeoData | null | undefined>();

    const fetching = async (fetchLink: string): Promise<void> => {
        try {
            const response = await fetch(fetchLink);

            if (!response.ok) {
                throw new Error("Something went wrong!");
            }

            const json = await response.json();

            setData(json);
        } catch (error) {
            console.error("Fetching error:", error);

            setData(null);
        }
    }

    useEffect(() => {
        fetching(path);
    }, [path]);

    return data;
}

export default useFetch