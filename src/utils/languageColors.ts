export const getLanguageMuiColor = (language: string | null): string => {
  if (!language) return "#A9A9A9";
  const languageKey = language.toLowerCase();
  const colors: { [key: string]: string } = {
    typescript: "#3178c6",
    javascript: "#f0db4f",
    python: "#3572A5",
    java: "#b07219",
    html: "#e34c26",
    css: "#563d7c",
    go: "#00ADD8",
    rust: "#dea584",
    shell: "#89e051",
    "c#": "#178600",
    "c++": "#f34b7d",
    php: "#4F5D95",
    ruby: "#701516",
    swift: "#F05138",
    kotlin: "#A97BFF",
    "jupyter notebook": "#DA5B0B",
  };
  return colors[languageKey] || "#A9A9A9";
};