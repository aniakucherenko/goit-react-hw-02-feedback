import PropTypes from 'prop-types'
import css from './Statistics.module.css'

export const Statistics = ({
    good, neutral, bad, total, positivePercentage,
}) => {
  return (
   <ul className={css.statisticsWrapper}>
<li className= {css.statisticsItem}>Good: {good}</li>
<li className= {css.statisticsItem}>Neutral: {neutral} </li>
<li className= {css.statisticsItem}>Bad: {bad} </li>
<li className= {css.statisticsItem}>Total: {total}</li>
<li className= {css.statisticsItem}>Positive feedback: {positivePercentage} %</li>

   </ul>
  )
}

Statistics.propTypes= {
   good: PropTypes.number,
   bad: PropTypes.number,
   neutral: PropTypes.number,
   total: PropTypes.number,
   positivePercentage: PropTypes.number,
}