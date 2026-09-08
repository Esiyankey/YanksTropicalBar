import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { MenuItem } from "../data/menuData";

export const WHATSAPP_NUMBER = "233544620083";

/**
 * Prices in the menu data are free text ("Varies" today, a figure later).
 * A figure gets the full GH-cedi treatment; anything else is rendered as the
 * note it is, so the card never reads as broken.
 */
function formatPrice(price: string) {
  const figure = price.trim().replace(/^(GH)?[¢₵]\s*/i, "");
  const isFigure = /^[\d,]+(\.\d+)?\+?$/.test(figure);

  return isFigure
    ? { text: `GH₵ ${figure.replace(/\+$/, "")}+`, isFigure: true }
    : { text: price, isFigure: false };
}

function orderLink(name: string) {
  const message = `Hello Yanks Tropical Bar, I would like to order ${name}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function MenuCard({
  item,
  className = "",
}: {
  item: MenuItem;
  className?: string;
}) {
  const price = formatPrice(item.price);
  const badge = item.tag ?? item.category;

  return (
    <article
      className={`group relative aspect-4/5 overflow-hidden rounded-3xl bg-slate-200 ${className}`}
    >
      <Image
        src={item.image}
        alt={item.name}
        fill
        sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Badge */}
      <span
        className={`absolute right-3 top-3 z-10 rounded-full px-3 py-1 text-[10px] font-semibold capitalize shadow-lg ${
          item.tag ? "bg-gold text-slate-900" : "bg-black/45 text-white backdrop-blur-sm"
        }`}
      >
        {badge}
      </span>

      {/* Scrim: tall enough that the copy sits on solid tone, not on the food */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-linear-to-t from-black via-black/75 to-transparent" />

      {/* Copy */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5">
        <h3 className="font-display text-base font-semibold leading-tight text-white sm:text-lg">
          {item.name}
        </h3>

        <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-white/60">
          {item.description}
        </p>

        <p
          className={`mt-1.5 font-display font-bold text-gold ${
            price.isFigure ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
          }`}
        >
          {price.text}
        </p>

        <a
          href={orderLink(item.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold text-white transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          Order via WhatsApp
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
}
