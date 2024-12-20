export function slugify(input:any) {
  // If input is a React element
  if (typeof input === "object" && input.$$typeof === Symbol.for("react.element")) {
    const textContent = input.props?.text || input.props?.children?.[0] || "";
    return textContent ? generateSlug(textContent) : "default-slug"; // Fallback for empty content
  }

  if (typeof input === "string") {
    return input.trim() ? generateSlug(input) : "default-slug";
  }

  // Fallback for unexpected types
  console.warn("Unsupported input type for slugify:", input);
  return "default-slug"; // Fallback value
}

// Helper function to generate the slug
function generateSlug(text:string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s]+/g, "-") 
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, ""); 
}
