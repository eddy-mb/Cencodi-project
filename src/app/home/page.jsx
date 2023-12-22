import HomeAside from "@/components/home/HomeAside";
import HomeCard from "@/components/home/HomeCard";

export default function HomePage() {
  return (
    <div className="flex space-x-4 p-2">
      <HomeAside />
      <HomeCard />
    </div>
  );
}
