import './Select.scss'

type SelectType ={
  labelStatus: string,
}

export function SelectStatus({labelStatus}: SelectType) {
  return (
    <label className="select">
      Status
      <select name="status" className="select__element">
        <option value="PENDING" disabled>{labelStatus}</option>
        <option value="PENDING">PENDING</option>
        <option value="IN_PROGRESS">IN_PROGRESS</option>
        <option value="COMPLETED">COMPLETED</option>
      </select>
    </label>
  )
}
