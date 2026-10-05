import fs from "node:fs";
import assert from "node:assert/strict";

const root = new URL("../", import.meta.url);
const html = fs.readFileSync(new URL("sayelf-youtube-workflow.html", root), "utf8");
const ops = fs.readFileSync(new URL("workflow/agent-ops.md", root), "utf8");

for (const token of [
  "sayelf-youtube-run-ledger",
  "RUN_CREATED",
  "ROUTED",
  "EXECUTE_STARTED",
  "RESULT_VERSIONED",
  "NEEDS_REVIEW",
  "NOT_CREATED",
  "result_version",
  "DRAFT_SAVED",
  "DRAFT_SAVE_FAILED"
]) assert.ok(html.includes(token), `HTML missing Agent Ops token: ${token}`);

for (const token of ["WorkItem", "Router", "MinimumPlanner", "StateEngine", "append-only", "NOT_CREATED", "COMPLETED"]) {
  assert.ok(ops.includes(token), `Agent Ops contract missing: ${token}`);
}

console.log("agent-ops-contract: pass");
