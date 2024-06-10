
export default function useClickLogo(pathname, router) {
  if (pathname === "/") {
    const element = document.getElementById("home");
    
    window.scrollTo({
      top: element.offsetTop - 100,
      behavior: "smooth",
    });

  } else {
    router.push(`/#home`);
  }
}