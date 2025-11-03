import { useEffect, useState } from "react";
import "./Typewriter.css";

export default function Typewriter({ segments = [], speed = 120 }) {
  const [displayedText, setDisplayedText] = useState(""); 
  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentSegmentIndex >= segments.length) return;

    const currentSegment = segments[currentSegmentIndex];

    const interval = setInterval(() => {
      if (currentCharIndex < currentSegment.text.length) {
        setDisplayedText((prev) => prev + currentSegment.text[currentCharIndex]);
        setCurrentCharIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
        setCurrentCharIndex(0);
        setCurrentSegmentIndex((prev) => prev + 1);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [currentCharIndex, currentSegmentIndex, segments, speed]);

  // blinking cursor
  const [cursorVisible, setCursorVisible] = useState(true);
  useEffect(() => {
    const blink = setInterval(() => setCursorVisible((v) => !v), 500);
    return () => clearInterval(blink);
  }, []);

  const allDone = currentSegmentIndex >= segments.length;

  // split displayed text into segments for styling
  let output = [];
  let pointer = 0;
  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i];
    const segText = displayedText.slice(pointer, pointer + seg.text.length);
    if (!segText) break;
    output.push({ text: segText, className: seg.className });
    pointer += seg.text.length;
  }

  return (
    <span className="typewriter">
      {output.map((seg, i) => {
        const isLastSegment = i === output.length - 1;
        return (
          <span key={i} className={seg.className}>
            {seg.text}
            {!allDone && isLastSegment && cursorVisible && (
              <span className="cursor" />
            )}
          </span>
        );
      })}
    </span>
  );
}
