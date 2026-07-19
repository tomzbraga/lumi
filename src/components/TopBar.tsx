import Logo from "./Logo";
import ButtonMenu from "./ButtonMenu";
import UserIcon from "./UserIcon";

export default function TopBar() {
  return (
    <section className="flex flex-row items-center justify-between border border-black bg-white p-6">
      <Logo />
      <nav className="flex gap-24 mr-44">
        <ButtonMenu title="Tarefas" path="/tasks" />
        <ButtonMenu title="Cronômetro" path="/pomodoro" />
        <ButtonMenu title="Arquivos" path="/files" />
      </nav>
      <div className="mr-4">
        <UserIcon />
      </div>
    </section>
  );
}
