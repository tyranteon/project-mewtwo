import { Component, Vue, Watch } from "vue-property-decorator";
import { ViewManager } from "@/modules/view-manager";
import { ProjectManager } from "@/modules/project-manager";
import { persistStore, store } from "@/store";
import RecentProjectsView from "@/views/recent-projects-view";
import { MainView } from "@/views/main-view";
import { GameModel } from "@/model/model";
import { DialogManager } from "@/modules/dialog-manager";

@Component({
  name: "App"
})
export default class App extends Vue {
  // Everything in the store is automatically persisted
  store = store;

  // These are not automatically persisted!
  model = GameModel;
  dm = DialogManager;

  @Watch("store", { deep: true })
  onStoreChanged() {
    persistStore();
  }

  render(h: any) {
    let CurView: any;

    if (ProjectManager.enableEditing) {
      CurView = MainView;
    } else {
      CurView = RecentProjectsView;
    }

    return (
      <v-app id="app">
        {DialogManager.dialogs.map((d, index) => {
          const Dialog: any = d.dialogOpts.component;
          return (
            <v-dialog value={true} oninput={() => DialogManager.reject()}>
              <v-card>
                <Dialog params={d.params} />
              </v-card>
            </v-dialog>
          );
        })}
        <CurView />
      </v-app>
    );
  }
}
