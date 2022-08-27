import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
function TypeWriter() {
  return (
    <div>
      <TypeWriterEffect
        text="Stand-up meeting"
        startDelay={1000}
        textSpeed={100}
        cursorColor="white"
        hideCursorAfterText={true}
      />
    </div>
  );
}

export default TypeWriter;
