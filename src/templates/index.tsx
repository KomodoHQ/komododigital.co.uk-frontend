import React from 'react';
import rehypeReact from 'rehype-react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Services from '../components/services';
import CaseStudy from '../components/casestudy';
import QuadGrid from '../components/quadgrid';
import GridItem from '../components/griditem';
import ContentSection from '../components/contentsection';
import BlogPost from '../components/blogpost';
import SeeMoreButton from '../components/seemorebutton';
import ContactSection from '../components/contactsection';
import ContactForm from '../components/contactform';

const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler;

export default (props) => {
  return (
    <Layout data={props.data}>
      <div>
        <span>People Friendly Software</span>
        <ContentSection title="This is a fairly long header with words spanning multiple lines.">
          <p>
            God gave you this gift of imagination. Use it. Just think about these things in your
            mind and drop em' on canvas. All you need is a dream in your heart, and an almighty
            knife. You could sit here for weeks with your one hair brush trying to do that - or you
            could do it with one stroke with an almighty brush.
          </p>
          <p>
            This is the time to get out all your flustrations, much better than kicking the dog
            around the house or taking it out on your spouse. Fluff it up a little and hypnotize it.
            I think there's an artist hidden in the bottom of every single one of us. You can do
            anything your heart can imagine. Steve wants reflections, so let's give him reflections.
            Don't be afraid to make these big decisions. Once you start, they sort of just make
            themselves.
          </p>
        </ContentSection>
      </div>
      <ContentSection title="About Us">
        <p>
          We don't need any guidelines or formats. All we need to do is just let it flow right out
          of us. This is gonna be a happy little seascape. Let's build some happy little clouds up
          here. It's so important to do something every day that will make you happy.
        </p>
        <div>IMAGE HERE</div>
      </ContentSection>
      <ContentSection title="Approach">
        <p>
          Here's something that's fun. Let's do that again. I can't think of anything more rewarding
          than being able to express yourself to others through painting. Brown is such a nice
          color.
        </p>
        <Services>
          <GridItem title="Discovery">
            We'll put some happy little leaves here and there. The light is your friend. Preserve
            it. Let's do it again then, what the heck.
          </GridItem>
          <GridItem title="Design">
            The very fact that you're aware of suffering is enough reason to be overjoyed that
            you're alive and can experience it.
          </GridItem>
          <GridItem title="Development" />
          Tree trunks grow however makes them happy. Everything's not great in life, but we can
          still find beauty in it.
          <GridItem title="Delivery">
            There we go. In your world you can create anything you desire. You can create the world
            you want to see and be a part of.
          </GridItem>
        </Services>
      </ContentSection>
      <ContentSection title="Case Studies">
        <p>
          All you have to do is let your imagination go wild. The secret to doing anything is
          believing that you can do it. Anything that you believe you can do strong enough, you can
          do.
        </p>
        <CaseStudy
          subtitle="Social Housing"
          title="Simplifying the customer journey to digital adoption"
        >
          The light is your friend. Preserve it. Nothing wrong with washing your brush. And right
          there you got an almighty cloud.Let's put some happy little bushes on the other side now.
          You want your tree to have some character. Make it special. In your world you can create
          anything you desire. Just make a decision and let it go.
        </CaseStudy>
        <CaseStudy
          subtitle="Start Up"
          title="Delivering a user focused solution for an on-demand courier service"
        >
          The light is your friend. Preserve it. Nothing wrong with washing your brush. And right
          there you got an almighty cloud.Let's put some happy little bushes on the other side now.
          You want your tree to have some character. Make it special. In your world you can create
          anything you desire. Just make a decision and let it go.
        </CaseStudy>
        <SeeMoreButton title="See More Work" />
      </ContentSection>
      <ContentSection title="Client Portfolio">
        <QuadGrid>
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
        </QuadGrid>
      </ContentSection>
      <ContentSection title="Insights">
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <SeeMoreButton title="See More Insights" />
      </ContentSection>
      <ContactSection>
        <ContactForm />
      </ContactSection>
    </Layout>
  );
};
