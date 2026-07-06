import Link from "next/link";

export default function PortalCard({
  href,
  onClick, // NEW: makes the card clickable (e.g. to open a popup)
  className = "",
  variant = "default",

  // stat props
  label,
  value,

  // analytics props
  badgeText,
  badgeColor,
  title,
  description,

  // shared
  icon,
  iconBg,
  leading, // NEW: custom left-side content, overrides title/description/icon block when provided
  children, // NEW: right-side content (buttons etc.)
}) {
  const isStat = variant === "stat";

  const Content = leading ? (
    leading
  ) : (
    <>
      {/* ICON */}
      {icon && (
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl shrink-0 ${iconBg}`}
        >
          {icon}
        </div>
      )}

      {/* STAT MODE */}
      {isStat ? (
        <div className="flex flex-col flex-1 min-w-0">
          <p className="text-xs uppercase tracking-wide text-slate-500">
            {label}
          </p>

          <h2 className="mt-1 text-2xl font-bold text-slate-900">
            {value}
          </h2>
        </div>
      ) : (
        <div className="flex flex-col flex-1 min-w-0">
          {badgeText && (
            <span
              className={`w-fit rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${badgeColor}`}
            >
              {badgeText}
            </span>
          )}

          {title && (
            <h2 className="font-display text-lg font-bold text-slate-900">
              {title}
            </h2>
          )}

          {description && (
            <div className="mt-2 text-sm text-slate-600 leading-relaxed">
              {description}
            </div>
          )}
        </div>
      )}
    </>
  );

  const wrapperClass = `
    group
    ${icon && !leading ? "flex items-start gap-4" : "flex items-center"}
    ${children ? "justify-between" : ""}
    p-5
    bg-[oklch(98.5%_0.005_260)]
    backdrop-blur-md
    rounded-3xl
    border border-white/60
    shadow-[0_8px_30px_rgb(0,0,0,0.04)]
    hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]
    transition-all duration-300
    ${onClick ? "cursor-pointer text-left w-full" : ""}
    ${className}
  `;

  // onClick takes priority over href — used for opening popups instead of navigating
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={wrapperClass}>
        {Content}
        {children}
      </button>
    );
  }

  return href ? (
    <Link href={href} className={wrapperClass}>
      {Content}
      {children}
    </Link>
  ) : (
    <div className={wrapperClass}>
      {Content}
      {children}
    </div>
  );
}