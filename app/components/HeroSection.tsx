import Image from "next/image";

type HeroSectionProps = {
  title: string;
  description: string;
  image: string;
  height?: string; // optional for flexibility
};

export default function HeroSection({
  title,
  description,
  image,
  height = "h-[60vh]",
}: HeroSectionProps) {
  return (
    <header
      className={`relative ${height} flex items-center justify-center text-center text-white overflow-hidden`}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover brightness-[0.45]"
        priority
      />

      <div className="relative z-10 max-w-3xl mt-20 px-6">
        <h1 className="text-5xl md:text-6xl mb-6 leading-tight">
          {title}
        </h1>

        <p className="text-lg md:text-xl font-light leading-relaxed text-gray-200">
          {description}
        </p>
      </div>
    </header>
  );
}