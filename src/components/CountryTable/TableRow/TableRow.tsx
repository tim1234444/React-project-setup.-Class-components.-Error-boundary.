type Props = {
    value: number
}
export default function TableRow({value}: Props){
    return (
        <td>{value || 'N/A'}</td>
    )
}