import { PropsWithChildren, useState } from "react";
import { createStyles } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useTranslation } from "react-i18next";

import clsx from "clsx";

import { Atom, Molec } from "shared/ui";
import { Theme } from "shared/types";

import { UI, config, model } from "entities/agreement-user";

export type UserAgreementCardProps = PropsWithChildren<{
  data: config.License;
  title: string;
}>;

export const UserAgreementCard = ({ data, title }: UserAgreementCardProps) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const checked = model.selectors.useAgreement();

  const [step, setStep] = useState(1);

  return (
    <Molec.Card
      className={clsx("agreement__card", classes.card)}
      header={
        <Atom.Typography className="agreement__title" variant="h5">
          Пользовательское соглашение
        </Atom.Typography>
      }
      body={
        <div className={classes.wrapper}>
          <Molec.ScrollableContentiner className={classes.scroll}>
            <Atom.Typography variant="h6">{title}</Atom.Typography>
            <UI.UserAgreementList data={data} />
          </Molec.ScrollableContentiner>
        </div>
      }
      footer={
        <>
          <UI.Checkbox
            label={t(`agereement:checkbox-label`)}
            checked={checked}
            onChange={model.events.toggleAgreement}
          />
          <UI.Button
            className={classes.btn}
            label={t(`agereement:button-label`)}
            disabled={!checked}
            action={() => setStep((prev) => ++prev)}
          />
        </>
      }
    />
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: { maxWidth: 600, minWidth: 600, marginBottom: theme.spacing(6) },
    scroll: { position: "absolute", height: "100%", width: "100%" },
    wrapper: { position: "relative", height: 500 },
    btn: { marginLeft: "auto", borderRadius: theme.spacing(3) },
    field: {
      marginBottom: theme.spacing(2),
      "&:last-child": { margin: 0 },
    },
  })
);
