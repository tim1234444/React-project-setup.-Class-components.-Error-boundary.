type Props = {
    value: number | string
}
export default function TableRow({value}: Props){
    return (
        <td>{value}</td>
    )
}