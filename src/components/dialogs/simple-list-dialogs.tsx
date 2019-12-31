import { createSimpleListDialog } from "@/components/lists/list";
import {
  EncounterMusic,
  MoveEffects,
  MoveTargets,
  Types
} from "@/model/constants";

export const ChooseMoveTargetDialog = createSimpleListDialog(MoveTargets);
export const ChooseMoveEffectDialog = createSimpleListDialog(MoveEffects);
export const ChooseEncounterMusicDialog = createSimpleListDialog(
  EncounterMusic
);

export const ChooseTypeDialog = createSimpleListDialog(Types);