import fs from "node:fs";
import path from "node:path";
import { runRefresh } from "./src/lib/refresh";

const board = await runRefresh({ trigger: "schedule" });
const target = path.join(process.cwd(), "reports", "board-full.json");
fs.mkdirSync(path.dirname(target), { recursive: true });
fs.writeFileSync(target, `${JSON.stringify(board, null, 2)}\n`);
console.log(
  JSON.stringify(
    {
      roundStatus: board.roundStatus,
      sourceHealth: board.sourceHealth,
      activeCount: board.activeCount,
      newCount: board.newCount,
      failures: board.failures,
    },
    null,
    2,
  ),
);
