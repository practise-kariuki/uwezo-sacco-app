import React from 'react';
import '../App.css';
import { Card, Container,  Grid, Image } from 'semantic-ui-react';



const Services = () =>{
    return(
        <div id='section2' >
        <Container textAlign="center" className='services-container'>
        <h1>Our Services</h1>
        <Grid columns={3} stackable>
          <Grid.Column>
            <Card>
              <Image src="https://www.pngmart.com/files/7/Savings-PNG-File.png" />
              <Card.Content>
                <Card.Header>Savings</Card.Header>
                <Card.Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum est eget mauris pretium, sed sollicitudin odio pretium.
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Image src="https://www.pngall.com/wp-content/uploads/1/Deposit-Transparent.png" />
              <Card.Content>
                <Card.Header>Deposit</Card.Header>
                <Card.Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum est eget mauris pretium, sed sollicitudin odio pretium.
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Image src="https://png.pngtree.com/png-vector/20220113/ourmid/pngtree-ccb-teller-machine-atm-withdrawal-cash-red-envelope-financial-2-5d-png-image_4158641.png" />
              <Card.Content>
                <Card.Header>Withdraw</Card.Header>
                <Card.Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum est eget mauris pretium, sed sollicitudin odio pretium.
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Container>
      </div>
      
    );
}


export default Services;