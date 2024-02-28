import Card from './UI/Card';
import './Dashboard.css';
import { Button } from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';
import TestingForm from './TestingForm';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div>
      
      <h2 id="title">COVID-19 DASHBOARD</h2>
        <div style={{margin:"20px 70px 0px 0px"}}>
          <Button
            onClick={handleLogout}
            float={'right'}
            colorScheme="blue"
            variant="outline"
          >
            Logout
          </Button>
        </div>
      <div>
        <TestingForm />
      </div>
      <Card>
        <div id="services">
          <div class="container">
            <div class="services-list">
              <div>
                <h2>COVID-19 CASES</h2>
                <p>
                  COVID-19, caused by the SARS-CoV-2 virus, is a global
                  respiratory illness. It was declared a pandemic by the World
                  Health Organization in 2020. Common symptoms include fever,
                  cough, and shortness of breath, with preventive measures
                  emphasizing vaccination, mask-wearing, and hygiene practices.
                </p>
                <a href="https://www.mygov.in/covid-19/#statewise-data">
                  Learn More
                </a>
              </div>
              <div>
                <h2>STATEWISE STATUS</h2>
                <p>
                  COVID-19 State-wise status varies globally, with reported
                  cases, recoveries, and deaths. Local health authorities
                  regularly update this information, influencing public health
                  measures. Monitoring district-level data helps tailor response
                  strategies, allocate resources effectively, and implement
                  targeted interventions to control the spread of the virus.
                </p>
                <a href="https://www.mygov.in/corona-data/covid19-statewise-status">
                  Learn More
                </a>
              </div>
              <div>
                <h2>TOTAL VACCINATED COUNT</h2>
                <p>
                  India began administration of COVID-19 vaccines on 16 January
                  2021. As of 4 March 2023, India has administered over 2.2
                  billion doses overall, including first, second and
                  precautionary (booster) doses of the currently approved
                  vaccines. In India, 95% of the eligible population (12+) has
                  received at least one shot, and 88% of the eligible population
                  (12+) is fully vaccinated.
                </p>
                <a href="https://www.mygov.in/covid-19/">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
