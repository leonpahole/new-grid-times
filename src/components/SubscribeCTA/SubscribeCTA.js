import React from "react";
import styled from "styled-components/macro";

const SubscribeCTA = (props) => {
  return (
    <Wrapper {...props}>
      <SubscribeLink href="#">Subscribe</SubscribeLink>
      <AlreadySubscribedLink href="#">
        Already a subscriber?
      </AlreadySubscribedLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const SubscribeLink = styled.a`
  color: var(--color-white);
  padding: 11px 24px;
  font-size: 1rem;
  text-transform: uppercase;
  font-family: var(--font-family-sans-serif);
  background-color: var(--color-primary);
  border-radius: 4px;
  font-weight: var(--font-weight-bold);
`;

const AlreadySubscribedLink = styled.a`
  color: var(--color-gray-900);
  font-family: var(--font-family-serif);
  font-size: 0.875rem;
  font-style: italic;
  font-weight: var(--font-weight-normal);
  text-decoration-line: underline;
`;

export default SubscribeCTA;
