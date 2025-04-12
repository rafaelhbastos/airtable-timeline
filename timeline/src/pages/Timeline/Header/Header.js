import { MonthBar } from "../../../components/MonthBar/MonthBar"


export const Header = () => {
  return (
    <div style={{
      gridColumn: `1 / -1`,
      gridRow: 1,
      borderBottom: "1px solid rgb(72, 83, 88)"
    }}>
        <MonthBar />
    </div>
  )
}
