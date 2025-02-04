import { ComponentPropsWithoutRef, useContext, useEffect, useRef } from "react";
import { PageContext } from "../contexts/PageContext";
import { ActiveId } from "../contexts/PageContextProvider";

export default function ObservedElements(
  props: ComponentPropsWithoutRef<"div">
) {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const { setActiveId } = useContext(PageContext)!;

  useEffect(() => {
    const parent = parentRef.current;
    if (!parent) return;
    function handleIntersect(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id as ActiveId);
        }
      });
    }

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.6,
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
