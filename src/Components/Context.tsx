import type { GeoData } from "../Types/Types";
import { createContext } from "react";

const Context = createContext<GeoData | null | undefined>(null);

export default Context