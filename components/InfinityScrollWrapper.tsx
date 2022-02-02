import React, { useState, useEffect, useRef } from "react";
import styles from "./InfinityScrollWrapper.module.css";
import useIntersection from "./helper/useIntersection";

const InfinityScrollWrapper = ({ options = {} }) => {
  const rootRef = useRef(null);
  const targetRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Array<string>>([]);

  const handleIntersection = () => {
    if (loading) {
      return;
    }

    setLoading(true);
    setData([...data, ""]);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useIntersection({
    root: rootRef,
    target: targetRef,
    rootMargin: "100px",
    onIntersction: handleIntersection,
  });

  return (
    <div className={styles.wrapper} ref={rootRef}>
      {data.map((_, index) => (
        <div className={styles.box} key={"box" + index}>
          box {index}
        </div>
      ))}
      <div ref={targetRef}>
        더보기
      </div>
    </div>
  );
};

export default InfinityScrollWrapper;
