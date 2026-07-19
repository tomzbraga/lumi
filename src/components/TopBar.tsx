import Logo from "./Logo";
import ButtonMenu from "./ButtonMenu";
import UserIcon from "./UserIcon";

interface TopBarProps {
  onTabChange: (tab: string) => void;
}

export default function TopBar({ onTabChange }: TopBarProps) {
  return (
    <section className="flex flex-row items-center justify-between border border-black bg-white p-6">
      <Logo />
      <nav className="flex gap-24 mr-44">
        <ButtonMenu title="Tarefas" id="tasks" onTabChange={onTabChange} />
        <ButtonMenu title="Cronômetro" id="pomodoro" onTabChange={onTabChange} />
        <ButtonMenu title="Arquivos" id="files" onTabChange={onTabChange} />
      </nav>
      <div className="mr-4">
        <UserIcon />
      </div>
    </section>
  );
}
