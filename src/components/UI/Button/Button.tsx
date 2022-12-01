import {useState} from 'react';
import classes from './Button.module.scss';

interface Props {
    color: string;
    children: React.ReactNode;
    click?: any;
    disabled?: boolean;
}

const Button = ({color, children, click, disabled}: Props) => {
    const [onMouseEnter, setOnMouseEnter] = useState(false);

    return (
        <button
            className={classes.btn}
            style={{
                backgroundColor:
                    color === 'green'
                        ?
                        onMouseEnter
                            ?
                            'transparent'
                            :
                            'rgb(38, 125, 38)'
                        :
                        (onMouseEnter && color === 'regular')
                            ?
                            'transparent'
                            : color === 'red'
                                ?
                                onMouseEnter
                                    ?
                                    'rgba(38, 125, 38, .8)'
                                    :
                                    'rgb(38, 125, 38)'
                                :
                                'black',
                borderColor:
                    color === 'green'
                        ?
                        onMouseEnter
                            ?
                            'rgba(38, 125, 38, .8)'
                            :
                            'rgb(38, 125, 38)'
                        :
                        (onMouseEnter && color === 'regular')
                            ?
                            'black'
                            : color === 'red'
                                ?
                                onMouseEnter
                                    ?
                                    'rgba(38, 125, 38, .8)'
                                    :
                                    'rgb(38, 125, 38)'
                                :
                                '',
                color:
                    color === 'green'
                        ?
                        onMouseEnter
                            ?
                            'rgb(38, 125, 38)'
                            :
                            'white'
                        :
                        (onMouseEnter && color === 'regular')
                            ?
                            'black'
                            :
                            color === 'red'
                                ?
                                'white'
                                :
                                'white',
            }}
            onClick={(e) => {
                if (click) {
                    click(e)
                }
            }}
            onMouseEnter={() => setOnMouseEnter(true)}
            onMouseLeave={() => setOnMouseEnter(false)}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button;