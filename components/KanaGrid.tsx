import type { KanaItem } from "@/data/kana";

type KanaGridProps = {
  items: KanaItem[];
};

export default function KanaGrid({ items }: KanaGridProps) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
      {items.map((item) => (
        <div
          key={item.kana}
          className="bg-white border border-gray-200 rounded-xl p-3 text-center shadow-sm hover:shadow-md hover:border-rose-300 transition-all"
        >
          <p className="text-3xl font-bold text-gray-800 mb-1">{item.kana}</p>
          <p className="text-sm text-rose-600 font-semibold mb-1">{item.romaji}</p>
          <p className="text-xs text-gray-500">{item.example}</p>
          <p className="text-xs text-gray-400">{item.meaning}</p>
        </div>
      ))}
    </div>
  );
}
