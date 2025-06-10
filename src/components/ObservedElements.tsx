import { ComponentPropsWithoutRef, useEffect, useRef } from "react";
import { usePageContext, Sections } from "../contexts/PageContextProvider";

export default function ObservedElements(
  props: ComponentPropsWithoutRef<"div">,
) {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const { setActiveId, activeId } = usePageContext()!;

  useEffect(() => {
    const parent = parentRef.current;
    if (!parent) return;
    function handleIntersect(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          (entry.target.id as Sections) !== activeId
        ) {
          setActiveId(entry.target.id as Sections);
        }
      });
    }

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.3,
    });
    for (const element of parent.children) {
      observer.observe(element);
    }

    return () => {
      if (parent)
        for (const element of parent.children) {
          observer.unobserve(element);
        }
    };
  });

  return <div ref={parentRef} {...props} />;
}
