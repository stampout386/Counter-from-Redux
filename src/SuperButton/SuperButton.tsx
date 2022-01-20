import s from './SuperButton.module.css'
import {Button} from "@material-ui/core";

type SuperButtonPropsType = {
    title: string
    onClick: () => void
    disabled?: boolean
}

export function SuperButton(props: SuperButtonPropsType) {
    const onClickCallback = () => {
        props.onClick()
    }

    return (
        <div>
            <Button variant="outlined" disabled={props.disabled} onClick={onClickCallback}>{props.title}</Button>
        </div>
    )

}