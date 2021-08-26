import { createStyles, makeStyles } from "@material-ui/core";
import { UI, config } from "entities/agreement-user";
import { Theme } from "shared/types";

export type UserAgreementItemProps = config.LicenseItem & {
  numeric: string;
};
export const UserAgreementItem = ({
  numeric,
  list,
  text,
  notNumeric,
}: UserAgreementItemProps) => {
  const classes = useStyles();
  return (
    <li className={classes.item}>
      {!notNumeric && <span className={classes.numeric}>{numeric}</span>} {text}
      {list && list.length > 0 && (
        <UI.UserAgreementList data={list} numeric={numeric} />
      )}
    </li>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {},
    numeric: {},
  })
);
