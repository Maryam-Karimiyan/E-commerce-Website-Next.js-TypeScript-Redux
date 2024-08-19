import Image from "next/image";
import styles from "./page.module.css";
import ButtonComponent from "@/components/Button";
import TextFieldComponent from "@/components/Input";
export default function Home() {
  return (
    <main className={styles.main}>
      <TextFieldComponent label="UserName" />
      <TextFieldComponent label="Password" type="password" />
      <ButtonComponent color="primary" text="llll" variant="contained" />
    </main>
  );
}
