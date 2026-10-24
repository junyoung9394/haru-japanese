type StoreButtonProps = {
  href: string;
  /** "dark": 밝은 배경 위, "light": 컬러/어두운 배경 위 */
  variant?: "dark" | "light";
  caption?: string;
  label?: string;
  className?: string;
};

/** Google Play 설치 버튼 — href(UTM 포함)는 호출하는 쪽에서 그대로 넘깁니다. */
export default function StoreButton({
  href,
  variant = "dark",
  caption = "Google Play에서",
  label = "앱 설치하기",
  className = "",
}: StoreButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`store-btn ${variant === "light" ? "store-btn-light" : ""} ${className}`}
    >
      <svg aria-hidden="true" width="24" height="26" viewBox="0 0 24 26" className="shrink-0">
        <path fill="#00D7FE" d="M1.1.6C.8.9.6 1.4.6 2v22c0 .6.2 1.1.5 1.4l.1.1L13.5 13.2v-.3L1.2.5z" />
        <path fill="#FFCE00" d="M17.6 17.3l-4.1-4.1v-.3l4.1-4.1.1.1 4.9 2.8c1.4.8 1.4 2.1 0 2.9l-4.9 2.8z" />
        <path fill="#FF3A44" d="M17.7 17.2L13.5 13 1.1 25.4c.5.5 1.2.5 2.1.1l14.5-8.3" />
        <path fill="#00F076" d="M17.7 8.8L3.2.5C2.3 0 1.6.1 1.1.6L13.5 13z" />
      </svg>
      <span>
        <small>{caption}</small>
        <strong>{label}</strong>
      </span>
    </a>
  );
}
