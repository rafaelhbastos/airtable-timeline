import styles from "./MonthBar.module.css"

export const MonthBar = ({month = 'January', year = '2021'}) => {
  return (
    <div>
        <p className={styles.monthYear}>
            {`${month} ${year}`}
        </p>
    </div>
  )
}
