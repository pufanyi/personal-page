import { Printer } from '@phosphor-icons/react'

function PrintButton() {
  return (
    <button
      className="print-button"
      onClick={() => window.print()}
      aria-label="Export as PDF"
      title="Export as PDF / Print"
    >
      <Printer size={20} weight="duotone" />
    </button>
  )
}

export default PrintButton
