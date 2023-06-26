import CardsSwiper from "@/components/CardsSwiper/CardsSwiper";
import "swiper/css";
import "swiper/css/effect-cards";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-around h-[90vh] overflow-hidden">
      <h1 className="p-8 text-center text-2xl">Menu Swiper</h1>
      <CardsSwiper />
    </main>
  );
}
