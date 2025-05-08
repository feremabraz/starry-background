import { StarryBackground } from "@/components/starry-background";
import { ConstellationTitle } from "@/components/constellation-title";

export default function Home() {
	return (
		<main className="relative min-h-screen flex items-center justify-center">
		  <StarryBackground starCount={200} maxStars={500} constellationCount={1} />
		  <ConstellationTitle />
		</main>
	);
}
