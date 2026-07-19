import { Tab } from "@/app/page";

interface MainProps {
  tab: Tab;
}

export default function Main({ tab }: MainProps) {
  {
    if (tab == "tasks") {
      return (
        <section>
          <h1 className="text-white">Tarefas</h1>
        </section>
      );
    } else if (tab == "pomodoro") {
      return (
        <section>
          <h1 className="text-white">Pomodoro</h1>
        </section>
      );
    } else if (tab == "files") {
      return (
        <section>
          <h1 className="text-white">files</h1>
        </section>
      );
    } else return <h1>Não encontrada</h1>;
  }
}
