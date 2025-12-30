import React from "react";
import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    HTML: { backgroundColor: "#f59e0b", color: "#fff" },
    CSS: { backgroundColor: "#06b6d4", color: "#fff" },
    JavaScript: { backgroundColor: "#eab308", color: "#000" },
    React: { backgroundColor: "#22d3ee", color: "#000" },
    default: { backgroundColor: "#f3f4f6", color: "#000" },
  };

  const styleToApply = selected ? (tagStyle[tagName] || tagStyle.default) : tagStyle.default;

  return (
    <button
      type="button"
      className="tag"
      style={{
        ...styleToApply,
        padding: "5px 12px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        fontWeight: "500",
        marginRight: "5px",
        transition: "all 0.2s",
      }}
      onClick={() => selectTag && selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default Tag;
