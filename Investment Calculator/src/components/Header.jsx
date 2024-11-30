import headerLogo from '../assets/investment-calculator-logo.png'
import "../index.css"

export default function Header() {
  return (
    <header id="header">
      <img src={headerLogo} alt="Money Logo" width="250"/>
      <h1>Investment Calculator</h1>
    </header>
  )
}