import Link from "next/link";

export default function ButtonMenu(props) {
  return <Link href={props.path}>{props.title}</Link>;
}
