/**
 * Centralized smooth scroll & navigation helper for Himastech
 * Handles same-page anchor scrolls with fixed navbar offset (-85px)
 * and seamless cross-page navigation to sections.
 */
export function scrollToSection(targetId: string) {
  if (typeof window === "undefined") return;

  const cleanId = targetId.replace(/^\/?#/, "");
  const element = document.getElementById(cleanId);

  if (element) {
    const navbarHeight = 85;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    window.history.pushState(null, "", `#${cleanId}`);
  }
}

export function handleNavAnchorClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  onNavigate?: () => void
) {
  if (typeof window === "undefined") return;

  if (href.startsWith("/#") || href.startsWith("#")) {
    const cleanId = href.replace(/^\/?#/, "");
    const isHomePage = window.location.pathname === "/";

    if (isHomePage) {
      const element = document.getElementById(cleanId);
      if (element) {
        e.preventDefault();
        scrollToSection(cleanId);
        if (onNavigate) onNavigate();
      }
    } else {
      // Allow default Next.js Link navigation to /#id
      if (onNavigate) onNavigate();
    }
  } else {
    if (onNavigate) onNavigate();
  }
}
