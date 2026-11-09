/* Copyright 2026 Marimo. All rights reserved. */

/**
 * Cell status and timing read from the host's executions.
 *
 * Every atom here is derived, so it can be read but not set. The state
 * behind them changes only through `submitCells`, `withdrawCells`, and
 * `observeCellMessage`.
 */

export {
  cellExecutionInputsAtom,
  cellFreshnessAtom,
  cellOutlineAtom,
  cellOutputAtom,
  cellOutputInputsAtom,
  cellOutputsAtom,
  clearCellOutputs,
  notebookIsRunningAtom,
  notebookQueuedOrRunningCountAtom,
  observeCellMessage,
  releaseCellOutputAtoms,
  runtimeStatusAtom,
  submitCells,
  waitForRuntimeRunning,
  withdrawCells,
} from "./atoms";
export type { CellFreshness, CellFreshnessLookup } from "./freshness";
export {
  useCellExecution,
  useCellFreshness,
  useCellOutline,
  useCellOutput,
  useScratchOutput,
} from "./hooks";
export {
  type CellError,
  type CellOutput,
  cellOutputsView,
  cellOutputView,
  type HostDiagnostic,
  scratchOutputView,
} from "./output";
export {
  type CellExecutionInputs,
  type CellExecutionView,
  type CellOutcome,
  type CellRunStatus,
  cellExecutionView,
  onlyScratchRunning,
  runningCellIds,
  scratchStatus,
} from "./select";
