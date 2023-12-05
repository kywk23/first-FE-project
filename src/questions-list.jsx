import React from "react";
import "./App.css";
//Template:
//   id: ,
//   question: ,
//   options: [],
//   correctAnswer: ,
//   level: ,

// track current question user is on
// track answer user put in:
// based off answers, win-lose scenarios

const QuestionsArrayList = [
  {
    question: "In which year did Singapore separate from Malaysia?",
    options: ["1957", "1965", "1971", "1980"],
    correctAnswer: "1965",
    level: 1,
  },
  {
    question: "What name is traditionally given to the party held for a woman who is expecting a baby?",
    options: ["Baby Drizzle", "Baby Shower", "Baby Downpour", "Baby Deluge"],
    correctAnswer: "Baby Shower",
    level: 1,
  },
  {
    question: "Which of the following buildings is the tallest?",
    options: ["Petronas Towers", "Eiffel Tower", "Burj Khalifa", "Empire State Building"],
    correctAnswer: "Burj Khalifa",
    level: 1,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
    level: 1,
  },
  {
    question: "What is the national language of Singapore?",
    options: ["English", "Mandarin", "Malay", "Tamil"],
    correctAnswer: "Malay",
    level: 1,
  },
  {
    question: "Who succeeded Lee Kuan Yew as the Prime Minister of Singapore?",
    options: ["Goh Chok Tong", "Tony Tan Keng Yam", "Tharman Shanmugaratnam", "Lee Hsien Loong"],
    correctAnswer: "Goh Chok Tong",
    level: 2,
  },
  {
    question: "Singapore is located at the southern tip of which Southeast Asian peninsula?",
    options: ["Malay Peninsula", "Indochinese Peninsula", "Korean Peninsula", "Arabian Peninsula"],
    correctAnswer: "Malay Peninsula",
    level: 2,
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correctAnswer: "William Shakespeare",
    level: 2,
  },
  {
    question: "An expert in sartorial matters is qualified to give advice on what subject?",
    options: ["Cooking", "Fashion", "Automobiles", "Astronomy"],
    correctAnswer: "Fashion",
    level: 2,
  },
  {
    question: "Which of the following is not a capital?",
    options: ["Hanoi", "Pyongyang", "Wellington", "Shanghai"],
    correctAnswer: "Shanghai",
    level: 2,
  },
  {
    question: "What is the capital city of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correctAnswer: "Canberra",
    level: 3,
  },
  {
    question: "What is the chemical symbol of Gold?",
    options: ["Au", "Ag", "Fe", "Hg"],
    correctAnswer: "Au",
    level: 3,
  },
  {
    question:
      "Among the listed cooking methods, which process involves the Maillard reaction and typically reaches the highest temperatures during preparation?",
    options: ["Sous Vide", "Braising", "Sautéing", "Poaching"],
    correctAnswer: "Sautéing",
    level: 3,
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    correctAnswer: "Leonardo da Vinci",
    level: 4,
  },
  {
    question: "Which famous scientist developed the theory of general relativity?",
    options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Stephen Hawking"],
    correctAnswer: "Albert Einstein",
    level: 4,
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
    correctAnswer: "Pacific Ocean",
    level: 4,
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["J.K. Rowling", "Ernest Hemingway", "Harper Lee", "George Orwell"],
    correctAnswer: "Harper Lee",
    level: 5,
  },
  {
    question: "In the Marvel Cinematic Universe, what type of doctor is Stephen Strange?",
    options: ["Cardiothoracic Surgeon", "Neurosurgeon", "Orthopedic Surgeon", "Plastic Surgeon"],
    correctAnswer: "Neurosurgeon",
    level: 5,
  },
  {
    question: "What is the capital of the United States?",
    options: ["New York City", "Washington, D.C.", "Los Angeles", "Chicago"],
    correctAnswer: "Washington, D.C.",
    level: 5,
  },
  {
    question: "Which of the following is a fruit?",
    options: ["Avocado", "Zucchini", "Persimmon", "Radish"],
    correctAnswer: "Persimmon",
    level: 5,
  },
  {
    question: "Which continent is known as the 'Land Down Under'?",
    options: ["Africa", "South America", "Australia", "Antarctica"],
    correctAnswer: "Australia",
    level: 6,
  },
  {
    question: "Which liqueur is the main ingredient in a classic Margarita cocktail?",
    options: ["Triple Sec", "Plum Liqueur", "Amaretto", "Grand Marnier"],
    correctAnswer: "Triple Sec",
    level: 6,
  },
  {
    question: "What is the value of π (pi) to three decimal places?",
    options: ["3.141", "3.187", "3.223", "3.147"],
    correctAnswer: "3.141",
    level: 6,
  },
  {
    question: "Which iconic fashion designer is known for the creation of the little black dress?",
    options: ["Coco Chanel", "Gianni Versace", "Christian Dior", "Yves Saint Laurent"],
    correctAnswer: "Coco Chanel",
    level: 7,
  },
  {
    id: 20,
    question: "What does the acronym 'URL' stand for in the context of the internet?",
    options: ["Universal Resource Locator", "Uniform Resource Link", "Unified Retrieval Link", "Ultimate Reference Locator"],
    correctAnswer: "Universal Resource Locator",
    level: 7,
  },
  {
    id: 21,
    question: "What does 'HTML' stand for in web development?",
    options: [
      "HyperText Markup Language",
      "High-Level Text Management Language",
      "Hyperlink and Text Markup Language",
      "Hypertext Transfer Protocol",
    ],
    correctAnswer: "Hypertext Transfer Protocol",
    level: 7,
  },
  {
    question: "A fawn is a young...",
    options: ["Horse", "Deer", "Elephant", "Buffalo"],
    correctAnswer: "Deer",
    level: 7,
  },
  {
    id: 22,
    question: "If a triangle has angles measuring 90 degrees, 45 degrees, and 45 degrees, what type of triangle is it?",
    options: ["Acute-angled", "Right-angled", "Obtuse-angled", "Isosceles"],
    correctAnswer: "Right-angled",
    level: 8,
  },
  {
    id: 23,
    question: "Who wrote 'The Great Gatsby'?",
    options: ["F. Scott Fitzgerald", "Ernest Hemingway", "J.D. Salinger", "Mark Twain"],
    correctAnswer: "F. Scott Fitzgerald",
    level: 8,
  },
  {
    id: 24,
    question: "In which popular game do players build and explore blocky, 3D worlds?",
    options: ["Fortnite", "Minecraft", "League of Legends", "Overwatch"],
    correctAnswer: "Minecraft",
    level: 8,
  },
  {
    question: "Which of these organs will, if it is healthy, float in water?",
    options: ["Heart", "Lung", "Kidney", "Liver"],
    correctAnswer: "Liver",
    level: 8,
  },
  {
    id: 25,
    question: "Who is the lead vocalist of the rock band Queen?",
    options: ["Freddie Mercury", "Axl Rose", "Mick Jagger", "Kurt Cobain"],
    correctAnswer: "Freddie Mercury",
    level: 9,
  },
  {
    id: 26,
    question: "Which famous rapper is known for albums like 'The Marshall Mathers LP' and 'The Slim Shady LP'?",
    options: ["Kanye West", "Jay-Z", "Eminem", "Drake"],
    correctAnswer: "Eminem",
    level: 9,
  },
  {
    id: 27,
    question: "In Italian cuisine, what does 'al dente' mean when referring to pasta?",
    options: ["Perfectly cooked", "To the mouth", "To the tooth", "On point"],
    correctAnswer: "To the tooth",
    level: 9,
  },
  {
    question: "Which element found in red blood cells helps carry oxygen?",
    options: ["Iron", "Calcium", "Boron", "Lead"],
    correctAnswer: "Iron",
    level: 9,
  },
  {
    id: 28,
    question: "In Singapore, the bus operator SBS stands for what?",
    options: ["Singapore Busway System", "Southern Breeze Services", "Synchronized Bus Solutions", "Singapore Bus Services"],
    correctAnswer: "Singapore Bus Services",
    level: 10,
  },
  {
    id: 29,
    question: "In Singapore, the expressway SLE stands for what?",
    options: ["Singapore Link Expressway", "Seletar Expressway", "Skyline Expressway", "Southern Loop Expressway"],
    correctAnswer: "Seletar Expressway",
    level: 10,
  },
  {
    id: 30,
    question: "In Singapore, the expressway BKE stands for what?",
    options: ["Bukit Kemuning Expressway", "Bukit Kallang Expressway", "Bukit Kinabalu Expressway", "Bukit Timah Expressway"],
    correctAnswer: "Bukit Timah Expressway",
    level: 10,
  },
  {
    question: "“I'm gonna make him an offer he can't refuse.” This famous line is from which movie?",
    options: ["The Godfather", "Scarface", "Goodfellas", "Casablanca"],
    correctAnswer: "The Godfather",
    level: 10,
  },
  {
    id: 31,
    question: "In which part of the body would you find the femur?",
    options: ["Arm", "Leg", "Spine", "Skull"],
    correctAnswer: "Leg",
    level: 11,
  },
  {
    id: 32,
    question: "Which part of the eye is responsible for focusing light onto the retina?",
    options: ["Cognac", "Lens", "Pupil", "Iris"],
    correctAnswer: "Lens",
    level: 11,
  },
  {
    id: 33,
    question: "What is the unit of measurement for electrical resistance?",
    options: ["Watt", "Volt", "Ohm", "Ampere"],
    correctAnswer: "Ohm",
    level: 11,
  },
  {
    id: 34,
    question: "Which of the following is not a Pokémon?",
    options: ["Gollum", "Dratini", "Jigglypuff", "Marowak"],
    correctAnswer: "Gollum",
    level: 12,
  },
  {
    id: 35,
    question: "Which Marvel superhero has the ability to manipulate probability, often referred to as the 'Scarlet Witch'?",
    options: ["Jean Grey", "Rogue", "Emma Frost", "Wanda Maximoff"],
    correctAnswer: "Wanda Maximoff",
    level: 12,
  },
  {
    id: 36,
    question: "In the Marvel movies, which actor played Hawkeye?",
    options: ["Mark Ruffalo", "Sebastian Stan", "Anthony Mackie", "Jeremy Renner"],
    correctAnswer: "Jeremy Renner",
    level: 12,
  },
  {
    id: 37,
    question: "The national flag of which of these countries does not feature three horizontal stripes?",
    options: ["Russia", "Romania", "Hungary", "Germany"],
    correctAnswer: "Romania",
    level: 13,
  },
  {
    id: 38,
    question: "According to the highway code, what shape is a stop sign?",
    options: ["Hexagonal", "Pentagonal", "Heptagonal", "Octagonal"],
    correctAnswer: "Octagonal",
    level: 13,
  },
  {
    id: 39,
    question:
      "What is the name of the snake that belongs to Lord Voldemort and is also a Horcrux in the movie 'Harry Potter and the Deathly Hallows: Part 2'?",
    options: ["Nagini", "Basilisk", "Salazar", "Serpensortia"],
    correctAnswer: "Nagini",
    level: 13,
  },
  {
    id: 40,
    question: "Which of these techniques is not a Brazilian jiu-jitsu submission?",
    options: ["Omoplata", "Americana", "Yama-Arashi", "Kimura"],
    correctAnswer: "Yama-Arashi",
    level: 14,
  },
  {
    id: 41,
    question: "Which country hosted the first FIFA World Cup in 1930?",
    options: ["Uruguay", "Brazil", "Italy", "France"],
    correctAnswer: "Uruguay",
    level: 14,
  },
  {
    id: 42,
    question: "What is the name of the unit of measurement that is used to express the pressure exerted by a column of water at a given depth?",
    options: ["Pascal", "Bar", "Atmosphere", "Torr"],
    correctAnswer: "Atmosphere",
    level: 14,
  },
  {
    id: 43,
    question: "The word 'Batrachian' describes which animals?",
    options: ["Monkeys and Apes", "Frogs and Toads", "Rats and Mice", "Hares and Rabbits"],
    correctAnswer: "Frogs and Toads",
    level: 15,
  },
  {
    id: 44,
    question: "What is the name of the Egyptian god of chaos and disorder, often depicted as a serpent?",
    options: ["Apophis", "Set", "Ammit", "Khonsu"],
    correctAnswer: "Apophis",
    level: 15,
  },
  {
    id: 45,
    question: "What is the name of the Japanese automobile manufacturer that is the largest producer of hybrid electric vehicles?",
    options: ["Honda", "Nissan", "Toyota", "Mazda"],
    correctAnswer: "Toyota",
    level: 15,
  },
];

export default QuestionsArrayList;
