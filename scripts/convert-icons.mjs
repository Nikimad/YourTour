import fs from "node:fs";
import path from "node:path";

const ICONS_DIR = path.join(process.cwd(), "src", "icons");

const files = fs
  .readdirSync(ICONS_DIR)
  .filter((file) => file.endsWith(".jsx"));

for (const file of files) {
  const filePath = path.join(ICONS_DIR, file);
  const componentName = path.basename(file, ".jsx");

  let content = fs.readFileSync(filePath, "utf8");

  // Убираем ...props из параметров компонента
  content = content.replace(
    `({ className = "", ...props })`,
    `({ className = "" })`
  );

  // Убираем {...props} из SVG
  content = content.replace(/\s*\{\.\.\.props\}/g, "");

  fs.writeFileSync(filePath, content, "utf8");

  console.log(`✓ ${componentName}.jsx`);
}

console.log("\n✅ ...props удалён из всех иконок.");
