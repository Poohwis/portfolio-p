export  const scrollToSection = (id: string) => {
  if (id === "contact") {
    return window.scrollTo({ top: document.documentElement.scrollHeight });
  }
  const rect = document.getElementById(id)?.getBoundingClientRect();
  const currentScrollPosition =
    window.scrollY || document.documentElement.scrollTop;
  if (rect !== undefined) {
    return window.scrollTo({
      top: rect.top + currentScrollPosition,
      behavior: "smooth",
    });
  }
};

export const handleMailClick = (email: string) => {
  window.location.href = `mailto:${email}`;
};
