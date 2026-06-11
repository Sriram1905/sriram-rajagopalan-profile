import * as simpleIcons from "simple-icons";
import CareerRoadClient from "./CareerRoadClient";

type SimpleIcon = { path: string };

// Brand icon paths are extracted server-side so the simple-icons library
// never enters the client bundle; only two small path strings do.
// Companies without an icon render full-name pill badges (never monograms).
const icons = simpleIcons as unknown as Record<string, SimpleIcon | undefined>;

const ICON_PATHS: Record<string, string> = {};
if (icons.siAmazon) ICON_PATHS.Amazon = icons.siAmazon.path;
if (icons.siIbm) ICON_PATHS.IBM = icons.siIbm.path;

export default function CareerRoad() {
  return <CareerRoadClient iconPaths={ICON_PATHS} />;
}
