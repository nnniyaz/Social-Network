import { useState } from 'react';
import classes from './Button.module.scss';

interface Props {
    color: string;
    children: React.ReactNode;
    click: any;
}

const Button = ({ color, children, click }: Props) => {
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
                        'white'
                        :
                        (onMouseEnter && color === 'regular')
                            ?
                            'white'
                            :
                            color === 'red'
                                ?
                                'white'
                                :
                                '',
            }}
            onClick={(e) => click(e)}
            onMouseEnter={() => setOnMouseEnter(true)}
            onMouseLeave={() => setOnMouseEnter(false)}
        >
            {children}
        </button >
    )
}

export default Button;