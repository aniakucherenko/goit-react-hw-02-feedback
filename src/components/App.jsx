import React, {Component} from 'react';
import { Feedback } from './Feedback/Feedback';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = feedback => {
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1}))
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  }

  countPositivePercentageFeedback = total => {
return Number.parseInt((this.state.good * 100) / total)
  }

render() {
 const {good, neutral, bad} = this.state;
 const totalFeedback = this.countTotalFeedback()
 const positivePercentage = this.countPositivePercentageFeedback(totalFeedback)
 return (
  <>
  <Section title= 'Please leave feedback'>
  <Feedback 
  options = {Object.keys(this.state)}
  onLeaveFeedback={this.handleLeaveFeedback}
  />
  
  </Section>
  <Section title= "Statistics">
{totalFeedback ? (
   <Statistics 
   good={good}
   neutral={neutral}
   bad={bad}
   total = {totalFeedback}
   positivePercentage={positivePercentage}
   /> )
   : 
 (<Notification message ='There is no feedback yet'/>) }
  </Section>

  </>
 )

}

};




  