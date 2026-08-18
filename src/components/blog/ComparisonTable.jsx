import './ComparisonTable.css'

function ComparisonTable({ leftHeader, rightHeader, rows }) {
  return (
    <div className="comparison-table">
      <table>
        <thead>
          <tr>
            <th>{leftHeader}</th>
            <th>{rightHeader}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ComparisonTable
