interface ButtonMenuProps {
  onTabChange: (tab: string) => void;
  title: string;
  id: string;
}

export default function ButtonMenu({
  onTabChange,
  title,
  id,
}: ButtonMenuProps) {
  const handleClick = () => {
    onTabChange(id);
  };

  return <button onClick={handleClick}>{title}</button>;
}
