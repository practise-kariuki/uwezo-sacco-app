import React from 'react';
import { Grid, Header, Container} from 'semantic-ui-react';
import '../App.css';


function About() {
    return (
      <div id='section1'>
        <Container className='about-container'>
          <Header as="h1">About Us</Header>
          <Grid columns={2}>
            <Grid.Column>
              <p>I have recently completed a diploma in Computer Science and a coding bootcamp program from Moringa School.I have gained a foundational understanding of programming concepts, tools, and techniques.</p>
                <p>I am passionate about technology and also excited about building softwares that solve real-world problems. I am committed to learning and growing as a developer and eager to contribute my skills and knowledge to the development team.</p>
            </Grid.Column>
            <Grid.Column>
    
              <p>I want to create intuitive and visually appealing interfaces that enhance the user experience of software products.I am committed to staying up-to-date with the latest design trends and technologies and constantly seeking ways to improve my designs and processes. I would describe myself as a creative problem solver who enjoys collaborating with others to create effective and engaging interfaces. </p>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
  
  export default About;