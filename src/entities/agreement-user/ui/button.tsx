import { Atom } from "shared/ui";

interface Props {
  className?: string;
  label: string;
  disabled?: boolean;
  action?: () => void;
}

export const Button = ({ label, className, disabled, action }: Props) => {
  return (
    <Atom.Button disabled={disabled} className={className} onClick={action}>
      {label}
    </Atom.Button>
  );
};
