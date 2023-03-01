import React from 'react';
import '../App.css';
import { Accordion, Container, Header, Icon } from 'semantic-ui-react';




const Faqs = () =>{
    return(
        <div id='section3' >
    <Container className='faq-container' textAlign="center">
  <h2>FAQs</h2>
  <Accordion styled>
    <Accordion.Title className='faq-title'>
      <Icon name="dropdown" />
      What is the minimum balance required to open an account?
    </Accordion.Title>
    <Accordion.Content className='faq-content' >
      <p>
        The minimum balance required to open an account varies depending on the type of account. Please refer to our website or visit a branch for more information.
      </p>
    </Accordion.Content>

    <Accordion.Title className='faq-title' >
      <Icon name="dropdown" />
      How do I apply for a loan?
    </Accordion.Title>
    <Accordion.Content className='faq-content' >
      <p>
        You can apply for a loan online, by phone, or by visiting a branch. Please refer to our website for more information.
      </p>
    </Accordion.Content>

    <Accordion.Title className='faq-title' >
      <Icon name="dropdown" />
      What is the interest rate on savings accounts?
    </Accordion.Title>
    <Accordion.Content className='faq-content' >
      <p>
        The interest rate on savings accounts varies depending on the balance and type of account. Please refer to our website or visit a branch for more information.
      </p>
    </Accordion.Content>
  </Accordion>
</Container>
</div>

    );
}


export default Faqs;