import fs from 'fs';
import { dirname, resolve } from 'path';

const logPath = '/Users/rodydavis/.gemini/antigravity/brain/20700412-712a-4368-aa77-83fa63f6db89/.system_generated/logs/overview.txt';
if (!fs.existsSync(logPath)) {
  console.error("Log file not found:", logPath);
  process.exit(1);
}

const content = fs.readFileSync(logPath, 'utf8');
const lines = content.split('\n');

// Track the latest code content for each target file
const filesMap = new Map();

for (const line of lines) {
  if (!line.trim()) continue;
  try {
    const data = JSON.parse(line);
    if (!data.tool_calls) continue;
    for (const call of data.tool_calls) {
      if (call.name === 'write_to_file') {
        const { TargetFile, CodeContent } = call.args;
        if (TargetFile && TargetFile.includes('tests/')) {
          const absolutePath = resolve(TargetFile);
          filesMap.set(absolutePath, CodeContent);
        }
      }
    }
  } catch (e) {
    // Ignore parsing errors
  }
}

let restoredCount = 0;
for (const [absolutePath, codeContent] of filesMap.entries()) {
  const dir = dirname(absolutePath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(absolutePath, codeContent, 'utf8');
  console.log(`Restored: ${absolutePath}`);
  restoredCount++;
}

console.log(`Successfully restored ${restoredCount} test support files.`);
