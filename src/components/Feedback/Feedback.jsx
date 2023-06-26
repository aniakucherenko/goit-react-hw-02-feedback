import PropTypes from 'prop-types'
import css from './Feedback.module.css';


export const Feedback = ({ options, onLeaveFeedback}) => {
    return (
      
      <ul className={css.wrapper}>
{options.map(option => (
  <li key={option}>
   <button className = {css.btn} type ='button' onClick={() => onLeaveFeedback(option)} > {option} </button>

  </li>
))}
      </ul>
     
    );
  }

  Feedback.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback:PropTypes.func
  }
