/**
 * basic contact jobs component
 */

/**
 * NPM Dependencies
 */
import * as React from 'react';
import './contact-job.css';

/**
 * Local dependencies
 */

/**
 * Props for the contact jobs component
 *
 * data
 */
interface Props {}

interface State {
  jobs: Object[];
}

class ContactJobs extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { jobs: [] };
  }

  componentDidMount() {
    this.getCareerData();
  }

  getCareerData() {
    if (typeof fetch !== 'undefined') {
      fetch('https://hire.withgoogle.com/v2/api/t/komododigitalcouk/public/jobs')
        .then((results) => {
          return results.json();
        })
        .then((data) => {
          this.setState({ jobs: data });
        });
    }
  }

  render() {
    const { jobs } = this.state;

    const jobsComponent = jobs.map((job, index) => {
      return (
        <a key={index} className="job-single-job" href={job.url}>
          <div className="job-single-job-title">{job.title}</div>
          <div className="job-single-job-text">See Job Listing</div>
        </a>
      );
    });

    return <div className="job-listings">{jobsComponent}</div>;
  }
}

export default ContactJobs;
