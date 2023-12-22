'use client'

import Contact from "@/components/landingPage/Contact"
import Hero from "@/components/landingPage/Hero"
import Who from "@/components/landingPage/Who"
import Works from "@/components/landingPage/Works"
import styled from "styled-components"

const Container = styled.div`
    height          : 100vh;
    color: white;
    background: url("./img/bg.jpeg");
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar{
        display: none;
`

export default function Home() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  )
}
