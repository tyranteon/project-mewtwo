import { GameModel, TrainerClass } from "@/model/model";
import { EditTrainerClassView } from "@/components/views/edit-trainer-class-view";
import { generateListComponents } from "@/components/lists/list";
import { style } from "typestyle";
import { IDDisplay } from "@/components/displays/id-display";
import { TrainerClassDefaultMoney } from "@/model/constants";

export const {
  view: TrainerClassesView,
  dialog: ChooseTrainerClassDialog
} = generateListComponents<TrainerClass>({
  viewTitle: "All Trainer Classes",
  targetView: EditTrainerClassView,
  model: () => GameModel.model.trainerClasses,
  defaultObj: () => ({
    name: "CUSTOM CLASS"
  }),
  layout: [
    {
      text: "ID",
      sort: ([id1], [id2]) => id1.localeCompare(id2),
      render: (h, [id, trainerClass]) => <IDDisplay value={id} />
    },
    {
      text: "Text",
      sort: ([, trainerClass1], [, trainerClass2]) =>
        trainerClass1.name.localeCompare(trainerClass2.name),
      render: (h, [, trainerClass]) => trainerClass.name
    },
    {
      text: "Money",
      sort: ([, trainerClass1], [, trainerClass2]) =>
        (trainerClass1.money || TrainerClassDefaultMoney) -
        (trainerClass2.money || TrainerClassDefaultMoney),
      render: (h, [id, trainerClass]) => (
        <div class={styleMoney}>{trainerClass.money || "-"}</div>
      ),
      align: "right"
    }
  ]
});

const styleMoney = style({
  textAlign: "right"
});
