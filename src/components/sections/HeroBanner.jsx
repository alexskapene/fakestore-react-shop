import * as React from "react";
import HeroBanner1 from "../../assets/images/herosection.png";
import Slide4 from "../../assets/images/slide4.png";
import Slide3 from "../../assets/images/slide3.png";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function HeroBanner() {
  const [api, setApi] = React.useState(null);
  const [current, setCurrent] = React.useState(0);

  // contenair slides desktop
  const slides = [
    {
      image: HeroBanner1,
      description: (
        <h1>
          Discover ethnical <br /> cultivated and Fair-Trade gifts
        </h1>
      ),
      button: (
        <Button variant="default" size="lg">
          Show Now
        </Button>
      ),
    },
    {
      image: Slide4,
      description: (
        <h1>
          Discover ethnical <br /> cultivated and Fair-Trade gifts
        </h1>
      ),
      button: (
        <Button variant="default" size="lg">
          Show Now
        </Button>
      ),
    },
    {
      image: Slide3,
      description: (
        <h1>
          Discover ethnical <br /> cultivated and Fair-Trade gifts
        </h1>
      ),
      button: (
        <Button variant="default" size="lg">
          Show Now
        </Button>
      ),
    },
  ];

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative w-full h-[300px] md:h-screen">
      <Carousel setApi={setApi} className="w-full h-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <Card className="w-full h-screen ">
                <CardContent className=" w-full h-full grid grid-cols-2 md:grid-cols-2 items-center  md:px-48 text-4xl font-bold bg-background  overflow-hidden ">
                  <div className=" text-center space-y-8 bg-transparent text-4xl">
                    <h1>{slide.description}</h1>
                    {slide.button}
                  </div>
                  <div className="hidden md:block h-full relative -bottom-12 ">
                    <img
                      src={slide.image}
                      alt=""
                      className=" w-full h-full object-cover object-top"
                    />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Pagination buttons */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-3 w-3 rounded-full transition-all",
              current === index
                ? "bg-primary w-6"
                : "bg-foreground hover:bg-gray-600",
            )}
          />
        ))}
      </div>
    </div>
  );
}
