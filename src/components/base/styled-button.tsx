import { fontFamily } from '@/plugins/mui/config';
import Spinner from '@atlaskit/spinner';
import { Theme } from '@mui/material';
import Box from '@mui/material/Box';
import { ButtonProps } from '@mui/material/Button';
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { FC, MouseEvent, ReactElement, ReactNode } from 'react';

const selectorCircleSvgSpinner = "& [class$='-Spinner'] > svg > circle";

interface BaseButtonProps
  extends Pick<ButtonProps, 'variant' | 'type' | 'startIcon' | 'endIcon' | 'fullWidth' | 'sx' | 'type' | 'children'> {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void | undefined;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'default' | 'primary' | 'secondary' | 'dark' | 'light' | 'error';
  size?: 'small' | 'medium' | 'large';
  disableHoverEffect?: boolean;
  isLoading?: boolean;
}

interface StyledButtonRootProps extends BaseButtonProps {
  theme?: Theme;
}

const StyledButtonRoot = styled('button', {
  shouldForwardProp: (prop) =>
    prop !== 'variant' &&
    prop !== 'color' &&
    prop !== 'size' &&
    prop !== 'disableHoverEffect' &&
    prop !== 'fullWidth' &&
    prop !== 'isLoading',
})<StyledButtonRootProps>(({ theme, color, variant, size, disableHoverEffect, fullWidth, isLoading }) => ({
  fontFamily,
  cursor: 'pointer',
  minWidth: 40,
  lineHeight: 1.5,
  borderRadius: 5,

  display: 'inline-flex',
  alignItems: 'center',
  userSelect: 'none',
  transform: 'unset',
  position: 'relative',
  overflow: 'hidden',
  border: 'none',
  whiteSpace: 'nowrap',
  WebkitTapHighlightColor: 'transparent',
  verticalAlign: 'middle',
  outline: 'none !important',
  transition: theme.transitions.create(['transform']),

  // Full width button
  ...(fullWidth && {
    width: '100%',
    justifyContent: 'center',
  }),

  // hover
  '&:hover': {
    ...(!disableHoverEffect && {
      transform: 'translateY(-2px)',
    }),
  },

  '& svg': {
    fontSize: 20,
  },

  // sizes and variants
  ...(size === 'small' &&
    variant === 'outlined' && {
      padding: '4px 10px',
    }),
  ...(size === 'medium' &&
    variant === 'outlined' && {
      padding: '6px 14px',
    }),
  ...(size === 'large' &&
    variant === 'outlined' && {
      padding: '10px 18px',
      fontSize: 15,
    }),

  ...(size === 'small' &&
    variant !== 'outlined' && {
      padding: '6px 12px',
    }),
  ...(size === 'medium' &&
    variant !== 'outlined' && {
      padding: '8px 16px',
    }),
  ...(size === 'large' &&
    variant !== 'outlined' && {
      padding: '12px 26px',
      fontSize: 15,
    }),

  // variants
  ...(variant !== 'contained' && {
    backgroundColor: 'transparent',
    boxShadow: 'none !important',
  }),

  // colors & variants
  ...(color === 'default' &&
    variant === 'contained' && {
      backgroundColor: theme.palette.text.primary,
      color: theme.palette.primary.contrastText,
      [selectorCircleSvgSpinner]: {
        stroke: `${theme.palette.primary.contrastText} !important`,
      },
    }),
  ...(color === 'primary' &&
    variant === 'contained' && {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      // boxShadow: '0 6px 22px 0 rgb(18 124 113 / 12%)',
      [selectorCircleSvgSpinner]: {
        stroke: `${theme.palette.primary.contrastText} !important`,
      },
    }),
  ...(color === 'secondary' &&
    variant === 'contained' && {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.contrastText,
      [selectorCircleSvgSpinner]: {
        stroke: `${theme.palette.secondary.contrastText} !important`,
      },
    }),
  ...(color === 'dark' &&
    variant === 'contained' && {
      backgroundColor: '#313d56',
      color: theme.palette.primary.contrastText,
      [selectorCircleSvgSpinner]: {
        stroke: `${theme.palette.primary.main} !important`,
      },
    }),
  ...(color === 'light' &&
    variant === 'contained' && {
      backgroundColor: theme.palette.primary.contrastText,
      color: theme.palette.text.primary,
      [selectorCircleSvgSpinner]: {
        stroke: `${theme.palette.primary.contrastText} !important`,
      },
    }),
  ...(color === 'error' &&
    variant === 'contained' && {
      backgroundColor: red[500],
      color: theme.palette.primary.contrastText,
      [selectorCircleSvgSpinner]: {
        stroke: `${theme.palette.primary.contrastText} !important`,
      },
    }),

  ...(color === 'primary' &&
    variant === 'outlined' && {
      border: `2px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
      [selectorCircleSvgSpinner]: {
        stroke: `${theme.palette.primary.main} !important`,
      },
    }),
  ...(color === 'secondary' &&
    variant === 'outlined' && {
      border: `2px solid ${theme.palette.secondary.main}`,
      color: theme.palette.secondary.main,
      [selectorCircleSvgSpinner]: {
        stroke: `${theme.palette.secondary.main} !important`,
      },
    }),
  ...(color === 'dark' &&
    variant === 'outlined' && {
      border: `2px solid #313d56`,
      color: '#313d56',
      [selectorCircleSvgSpinner]: {
        stroke: `${theme.palette.text.primary} !important`,
      },
    }),
  ...(color === 'light' &&
    variant === 'outlined' && {
      border: `2px solid #fbfbfb`,
      color: `#fbfbfb`,
      [selectorCircleSvgSpinner]: {
        stroke: `${theme.palette.primary.contrastText} !important`,
      },
    }),
  ...(color === 'error' &&
    variant === 'outlined' && {
      border: `2px solid ${red[500]}`,
      color: `${red[500]}`,
      [selectorCircleSvgSpinner]: {
        stroke: `${theme.palette.primary.contrastText} !important`,
      },
    }),

  ...(color === 'primary' &&
    variant === 'text' && {
      color: theme.palette.primary.main,
      [selectorCircleSvgSpinner]: {
        stroke: `${theme.palette.primary.main} !important`,
      },
    }),
  ...(color === 'secondary' &&
    variant === 'text' && {
      color: theme.palette.secondary.main,
      [selectorCircleSvgSpinner]: {
        stroke: `${theme.palette.secondary.main} !important`,
      },
    }),
  ...(color === 'dark' &&
    variant === 'text' && {
      color: '#313d56',
      [selectorCircleSvgSpinner]: {
        stroke: `${theme.palette.text.primary} !important`,
      },
    }),
  ...(color === 'light' &&
    variant === 'text' && {
      color: theme.palette.primary.contrastText,
      [selectorCircleSvgSpinner]: {
        stroke: `${theme.palette.primary.contrastText} !important`,
      },
    }),
  ...(color === 'error' &&
    variant === 'text' && {
      color: red[500],
      [selectorCircleSvgSpinner]: {
        stroke: `${theme.palette.primary.contrastText} !important`,
      },
    }),
}));

type Props = BaseButtonProps;

const StyledButton: FC<Props> = (props) => {
  const { children, onClick, disableHoverEffect, startIcon, endIcon, isLoading, ...rest } = props;

  const renderSpinner = (placement?: 'start' | 'end'): ReactElement => (
    <Box component="span" sx={{ display: 'inherit', mr: 1, ml: -0.25 }}>
      <Spinner size={18} appearance="inherit" />
    </Box>
  );

  // Handle button click.
  const handleClick = (e: MouseEvent<HTMLButtonElement>): void | undefined => {
    if (!onClick) return;
    else {
      if (isLoading) e.preventDefault();
      else onClick(e);
    }
  };

  return (
    <StyledButtonRoot onClick={handleClick} disableHoverEffect={disableHoverEffect} {...rest}>
      {startIcon && !isLoading && (
        <Box component="span" sx={{ display: 'inherit', mr: 1, ml: -0.5 }}>
          {startIcon}
        </Box>
      )}
      {isLoading && renderSpinner('start')}
      <Box component="span">{children}</Box>
      {endIcon && !isLoading && (
        <Box component="span" sx={{ display: 'inherit', ml: 1, mr: -0.5 }}>
          {endIcon}
        </Box>
      )}
    </StyledButtonRoot>
  );
};

StyledButton.defaultProps = {
  color: 'primary',
  variant: 'contained',
  size: 'medium',
  disableHoverEffect: false,
};

export default StyledButton;
