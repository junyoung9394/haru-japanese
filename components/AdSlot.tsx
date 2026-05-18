import AdUnit from "./AdUnit";

type AdSlotProps = {
  type?: "horizontal" | "vertical" | "inArticle" | "relaxed";
  className?: string;
};

const AD_UNITS = {
  horizontal: { slot: "8080905265", format: "auto", fullWidthResponsive: true },
  vertical: { slot: "3083729457", format: "auto", fullWidthResponsive: true },
  inArticle: {
    slot: "5445109426",
    format: "fluid",
    layout: "in-article",
    style: { display: "block", textAlign: "center" as const },
    fullWidthResponsive: false,
  },
  relaxed: {
    slot: "9202415241",
    format: "autorelaxed",
    fullWidthResponsive: false,
  },
};

export default function AdSlot({
  type = "horizontal",
  className = "",
}: AdSlotProps) {
  const unit = AD_UNITS[type];
  return <AdUnit {...unit} className={className} />;
}
