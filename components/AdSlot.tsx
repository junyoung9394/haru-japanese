type AdSlotProps = {
  className?: string;
};

export default function AdSlot({ className = "" }: AdSlotProps) {
  return (
    <div
      className={`w-full bg-gray-100 border border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-sm py-8 ${className}`}
    >
      광고 영역
    </div>
  );
}
