"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `The Random Feedback Hub is an interactive web app designed to facilitate the exchange of feedback between individuals. Whether you want to send a compliment, share constructive criticism, or simply offer words of encouragement, this platform makes it easy to connect with others. Users can send feedback to anyone, fostering a culture of openness and continuous improvement. 
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
