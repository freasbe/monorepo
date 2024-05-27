// tailwind config is required for editor support

import type {Config} from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
    content: [
        "../../packages/ui/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}"
    ], // Ensure all relevant file types are included
    presets: [sharedConfig],
};

export default config;
