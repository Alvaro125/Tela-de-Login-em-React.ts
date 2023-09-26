import {ButtonHTMLAttributes} from "react";

export interface IButtonProps extends ButtonHTMLAttributes<any>{
    title: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}