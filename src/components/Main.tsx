import { Tab } from "@/app/page";
import Tasks from "./tasks/Tasks";
import Pomodoro from "./pomodoro/Pomodoro";
import Files from "./files/Files";

interface MainProps {
  tab: Tab;
}

export default function Main({ tab }: MainProps) {
  {
    if (tab == "tasks") {
      return <Tasks />;
    } else if (tab == "pomodoro") {
      return <Pomodoro />;
    } else if (tab == "files") {
      return <Files />;
    } else return <h1>Não encontrada</h1>;
  }
}
