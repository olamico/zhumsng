import ProductList from "@/components/ProductList";

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;
  return (
    <div className="">
      <section className="relative h-screen overflow-hidden">
        <video
          src="/video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
      </section>
      <ProductList category={category} params="homepage"/>
    </div>
  );
};

export default Homepage;
