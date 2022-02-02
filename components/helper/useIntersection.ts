import { useEffect, MutableRefObject } from "react";

export const useIntersection = ({
  root = null,
  target,
  onIntersction,
  threshold = 1,
  rootMargin = "0px",
}: {
  root?: null | MutableRefObject<Element | null>;
  target: MutableRefObject<Element | null>;
  onIntersction: Function;
  threshold?: number;
  rootMargin?: string;
}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onIntersction();
        }
      },
      {
        root: root?.current,
        threshold,
        rootMargin,
      }
    );

    if (!target.current) {
      return;
    }

    observer.observe(target.current);
    return () => {
      if (target.current) {
        observer.unobserve(target.current);
      }
    };
  }, [target, root, onIntersction, threshold, rootMargin]);
};

export default useIntersection;
