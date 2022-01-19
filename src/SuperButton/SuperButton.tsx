import s from './SuperButton.module.css'


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
            <button disabled={props.disabled} onClick={onClickCallback} className={s.superButton}>{props.title}</button>
        </div>
    )

}