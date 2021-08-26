import { Atom } from "shared/ui";

interface Props {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export const Checkbox = ({ checked, onChange, label }: Props) => {
  return (
    <Atom.Checkbox
      label={label}
      checked={checked}
      onChange={onChange}
      position="end"
    />
  );
};
