import type {Config} from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
    content: [
        `src/**/*.{js,ts,jsx,tsx}`,
        "../../packages/ui/*.{js,ts,jsx,tsx}",
    ],
    presets: [sharedConfig],
};

export default config;
