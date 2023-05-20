import styles from "@/styles/ToggleSwitch.module.css";
import { FC, useState, useEffect } from "react";

const ToggleSwitch: FC<Props> = ({ text, id, callback, defaultValue }) => {
  const [checked, setChecked] = useState<boolean>(defaultValue);

  useEffect(() => {
    setChecked(defaultValue);
  }, [defaultValue]);

  return (
    <label className={styles.toggle} htmlFor={id}>
      <input
        onChange={() => {
          setChecked(!checked);
          if (callback) {
            callback(!checked);
          }
        }}
        className={styles.toggle__input}
        type="checkbox"
        id={id}
        checked={checked}
      />
      <div className={styles.toggle__fill}></div>
      <p className="pb-1 text-sm text-[#262626] font-semibold">{text}</p>
    </label>
  );
};

export default ToggleSwitch;

type Props = {
  text: string;
  id: string;
  callback: (check: boolean) => void;
  defaultValue: boolean;
};
