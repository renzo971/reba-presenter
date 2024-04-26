import React, { useState, useMemo } from "react";
import json from "../assets/data/bible/index.json";

const ScripturesContext = React.createContext({});

function ScripturesProvider({ children }) {
  const scriptures = useMemo(() => {
    let index = 0;

    const data = json.map((entry) => {
      return {
        ...entry,
        content: require(`../assets/data/bible/${entry.key}.json`),
      };
    });

    return data.reduce((verses, book) => {
      const chaptersExpanded = book.content.map((chapter, chapterIndex) => {
        return chapter.map((verse, verseIndex) => {
          return {
            // Verse data
            index: index++,
            cite: `${book.shortTitle} ${chapterIndex + 1}:${verseIndex + 1}`,
            text: verse.replaceAll("/n", "<br/>"),
            // Metadata
            bookNumber: book.number,
            chapterNumber: chapterIndex + 1,
            verseNumber: verseIndex + 1,
            chaptersCount: book.chapters,
            versesCount: book.verses,
            // Next and prev data
            nextBookNumber: Math.min(book.number + 1, 66),
            prevBookNumber: Math.max(book.number - 1, 1),
            nextChapterNumber: chapterIndex + 2,
            prevChapterNumber: chapterIndex,
          };
        });
      });

      chaptersExpanded.forEach((chapterExpanded) => {
        verses.push(...chapterExpanded);
      });

      return verses;
    }, []);
  }, []);

  const total = scriptures.length;
  const [first] = scriptures;
  const [verse, setVerse] = useState(first);

  return (
    <ScripturesContext.Provider
      value={{
        scriptures,
        verse,
        setVerse,
        total,
      }}
    >
      {children}
    </ScripturesContext.Provider>
  );
}

export { ScripturesProvider, ScripturesContext };
