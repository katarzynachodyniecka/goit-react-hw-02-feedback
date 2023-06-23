// import { Component } from 'react';
// import { PropTypes } from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => (
  <div>
    <h2>Statistics</h2>
    <p> Good: {good}</p>
    <p> Neutral: {neutral}</p>
    <p> Bad: {bad}</p>
    <p> Total: {total}</p>
    <p> Positive feedback: {positiveFeedback}%</p>
  </div>
);

// export class Statistics extends Component {
//   reder() {
//     const { good, neutral, bad, total, positiveFeedback } = this.props;
//     return (
//       <div>
//         <h2>Statistics</h2>
//         <p> Good: {good}</p>
//         <p> Neutral: {neutral}</p>
//         <p> Bad: {bad}</p>
//         <p> Total: {total}</p>
//         <p> Positive feedback: {positiveFeedback}%</p>
//       </div>
//     );
//   }
// }

// Statistics.propTypes = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
//   total: PropTypes.number.isRequired,
//   positive: PropTypes.number.isRequired,
// };
