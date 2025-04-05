import { Highlight, themes } from "prism-react-renderer";
import CopyButton from "./CopyButton";

const CodeBlock = ({ language, code }: { language: string; code: string }) => {
  const trimmedCode = code
    .split("\n") // split into lines
    .map((line) => line.trimEnd()) // remove trailing spaces from each line
    .join("\n"); // join back into a single string

  return (
    <div className="my-4 bg-[#0a0a0f] rounded-lg overflow-hidden border border-[#ffffff0a]">
      {/* header bar showing language and copy button */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#ffffff08]">
        {/* language indicator with icon */}
        <div className="flex items-center gap-2">
          <img src={`/${language}.png`} alt={language} className="size-4 object-contain" />
          <span className="text-sm text-gray-400">{language || "plaintext"}</span>
        </div>
        {/* button to copy code to clipboard */}
        <CopyButton code={trimmedCode} />
      </div>

      {/* code block with syntax highlighting */}
      <div className="relative">
        <Highlight
          theme={themes.oneDark}
          code={trimmedCode}
          language={language || "plaintext"}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={className}
              style={{
                ...style,
                padding: "1rem",
                background: "transparent",
                margin: 0,
                overflow: "auto",
              }}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })} style={{ display: "flex" }}>
                  <span style={{ userSelect: "none", marginRight: "1em", opacity: 0.5 }}>
                    {i + 1}
                  </span>
                  <span>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </span>
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};

export default CodeBlock;
