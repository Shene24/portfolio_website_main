import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding >
  <LeftSection>
    <SectionTitle main ceter>
      Welcome to <br />
      My Personal Portfolio
    </SectionTitle>
    <SectionText>
      I am a Full Stack Web Developer with a passion for learning and creating new things. 
    </SectionText>
    <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>

  </LeftSection>

 </Section>
);

export default Hero;