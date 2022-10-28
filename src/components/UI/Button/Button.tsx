import classes from './Button.module.scss';

interface Props {
    color: string;
    children: React.ReactNode;
    click: () => void;
}

const Button = ({ color, children, click }: Props) => {
    return (
        <button
            className={classes.btn}
            style={{
                backgroundColor: color === 'green' ? 'rgb(38, 125, 38)' : color === 'regular' ? '' : color === 'red' ? 'rgb(178, 26, 26)' : '',
                borderColor: color === 'green' ? 'rgb(38, 125, 38)' : color === 'regular' ? '' : color === 'red' ? 'rgb(178, 26, 26)' : '',
                color: color === 'green' ? 'white' : color === 'regular' ? '' : color === 'red' ? 'white' : '',
            }}
            onClick={click}
        >
            {children}
        </button >
    )
}

export default Button;