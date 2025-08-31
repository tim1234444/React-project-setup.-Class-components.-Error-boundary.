import { memo } from "react"

type Props = {
    value: number | string
}
function TableRow({value}: Props){
    return (
        <td>{value}</td>
    )
}
export default memo(TableRow)