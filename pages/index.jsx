import styled from "styled-components";
import { Routes } from "@config/routes";
import { useState } from "react";

const Header = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

const ContactButton = styled.button`
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
  padding: 1rem;
  background: #7f56d9;
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: none;
  cursor: pointer;

  &:hover {
    background: #6941c6;
  }
`;

const PrimaryButton = styled.a`
  border-radius: 8px;
  border: 1px solid var(--primary-600, #7f56d9);
  background: var(--primary-600, #7f56d9);
  /* Shadow/xs */
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  display: flex;
  padding: 10px 18px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #ffffff;
  text-decoration: none;
`;

const HeaderLink = styled.a`
  display: flex;
  align-items: flex-start;
  color: #667085;
  text-decoration: none;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

const ModalContainer = styled.div`
  width: 100%;
`;

const ModalCard = styled.div`
  margin: auto;
  display: flex;
  width: 400px;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  border-radius: 12px;
  background: var(--white, #fff);
  /* Shadow/xl */
  box-shadow: 0px 8px 8px -4px rgba(16, 24, 40, 0.04),
    0px 20px 24px -4px rgba(16, 24, 40, 0.1);
`;

const ModalHeader = styled.h1`
  color: var(--gray-900, #101828);
  text-align: center;
  /* Text lg/Medium */
  font-size: 18px;
  font-family: Inter;
  font-weight: 500;
  line-height: 28px;
  display: flex;
  flex-direction: column;
  align-self: stretch;
`;

const ModalBody = styled.p`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  color: var(--gray-500, #667085);
  text-align: center;
  /* Text sm/Normal */
  font-size: 14px;
  font-family: Inter;
  line-height: 20px;
`;

const CancelButton = styled.button`
  display: flex;
  padding: 10px 18px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 8px;
  border: 1px solid var(--gray-300, #d0d5dd);
  background: var(--white, #fff);
  /* Shadow/xs */
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
`;

const IssuesPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  // https://profy.dev/rjs-challenge-modal
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const ContactModal = () => {
    const emailLink = `mailto:"prolog@profy.dev"`;
    return (
      <ModalContainer>
        <ModalCard>
          <ModalHeader>Contact Us Via Email</ModalHeader>
          <ModalBody>
            Any questions? Send us an email at prolog@profy.dev. We usually
            answer within 24 hours.
          </ModalBody>
          <ButtonContainer>
            <CancelButton onClick={toggleModal}>Cancel</CancelButton>
            <PrimaryButton href={emailLink}>Open Email App</PrimaryButton>
          </ButtonContainer>
        </ModalCard>
      </ModalContainer>
    );
  };

  return (
    <div>
      <Header>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo-large.svg" alt="Prolog logo" />
        <LinksContainer>
          <HeaderLink href="/">Home</HeaderLink>
          <HeaderLink href="/products">Products</HeaderLink>
          <HeaderLink href="/docuentation">Documentation</HeaderLink>
          <HeaderLink href="pricing">Pricing</HeaderLink>
        </LinksContainer>
        <PrimaryButton href="/projects">Open Dashboard</PrimaryButton>
      </Header>
      <ContactButton onClick={toggleModal}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </ContactButton>
      {isOpen && <ContactModal />}
    </div>
  );
};

export default IssuesPage;
