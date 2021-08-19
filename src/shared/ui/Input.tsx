import React, { ReactElement } from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  InputAdornment,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import clsx from "clsx";
import { Theme } from "shared/types";

interface Props {
  className?: string;
  onChange?: any;
  value?: string;
  name?: string;
  type?: string;
  label?: string;
  helper?: string;
  icon?: React.ReactElement;
  placeholder?: string;
  disabled?: boolean;
  validations?: any;
  error?: string | boolean;
  touched?: boolean;
  onBlur?: () => void;
  fullWidth?: boolean;
  start?: React.ReactElement | string;
  end?: React.ReactElement | string;
  onPressCallback?: {
    code: "Enter";
    cb: () => void;
  };
}

export default function Input(props: Props): ReactElement {
  const {
    onChange,
    value,
    type,
    label,
    helper,
    className,
    placeholder,
    error,
    touched,
    onBlur,
    fullWidth,
    start,
    end,
    onPressCallback,
  } = props;

  const classes = useStyles({ type });
  return (
    <FormControl
      className={clsx(className)}
      variant="outlined"
      size="small"
      error={!!error}
      fullWidth={fullWidth}
    >
      {label && <InputLabel>{label}</InputLabel>}
      <OutlinedInput
        type={type && type !== "password" ? type : "text"}
        value={value}
        onChange={onChange}
        label={label}
        placeholder={placeholder}
        disabled={props.disabled}
        name={props.name}
        onBlur={onBlur}
        classes={{ root: clsx({ [classes.root]: true }) }}
        onKeyPress={(e) =>
          e.code === onPressCallback?.code && onPressCallback.cb()
        }
        inputProps={{ className: classes.input }}
        endAdornment={
          end && <InputAdornment position="end">{end}</InputAdornment>
        }
        startAdornment={
          start && <InputAdornment position="start">{start}</InputAdornment>
        }
      />
      {helper && <FormHelperText>{helper}</FormHelperText>}
      {error && touched && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: ({ type }: { type: string | undefined }) => {
      const exports: any = {};
      if (type === "password") exports.fontFamily = "Password";
      return exports;
    },
    root: { borderRadius: 40 },
  })
);
