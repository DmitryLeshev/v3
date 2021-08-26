import { createStyles, makeStyles } from "@material-ui/core";
import { UI, config } from "entities/agreement-user";
import { Theme } from "shared/types";

export type UserAgreementCardProps = {
  data: config.License;
  numeric?: string;
};

export const UserAgreementList = ({
  data,
  numeric,
}: UserAgreementCardProps) => {
  return (
    <ul className="agreement__list list">
      {data.map((item, idx) => (
        <UI.UserAgreementItem
          key={idx}
          numeric={numeric ? `${numeric}${idx + 1}.` : `${idx + 1}.`}
          {...item}
        />
      ))}
    </ul>
  );
};

const useStyles = makeStyles((theme: Theme) => createStyles({}));
