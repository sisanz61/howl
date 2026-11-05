const posts = [
  "Brickyard: made it across campus between classes without getting caught in the rain. Calling that a win.",
  "Hunt Library: the bookBot is still the coolest thing on campus, even when I'm supposed to be studying.",
  "Talley Student Union: grabbed a coffee and ran into three people from my freshman-year dorm. Small campus.",
  "Carmichael Gym: went in for 20 minutes and somehow stayed for two hours. Feeling good about it.",
  "The Oval: perfect weather for sitting outside and pretending my reading isn't due tomorrow.",
  "Centennial Campus: the bus was packed, but someone gave up their seat and restored my faith in humanity.",
  "Witherspoon Student Center: found a quiet table, finished my lab notes, and remembered to eat lunch.",
  "Wolfpack game day: the walk to Carter-Finley with everyone in red and white never gets old.",
  "Court of North Carolina: tour groups, frisbees, and a very determined squirrel. Just a normal afternoon.",
  "DH Hill Library: got here early enough to claim my usual spot by the window.",
  "Talley: the line for food looked long but moved faster than my queue for office hours.",
  "Centennial Engineering buildings: finally got my code to work after one semicolon and a lot of patience.",
  "Brickyard after the rain: the brick was slippery, the sky cleared up, and campus looked extra nice.",
  "Carter-Finley Stadium: the band was loud, the crowd was louder, and my voice is probably gone for tomorrow's lecture.",
  "Today felt like the kind of day that makes college make sense: I started with an early chemistry lab where the experiment did not go as planned, grabbed breakfast with a friend I had not seen since orientation, and spent the afternoon working through a problem set one question at a time. We took a break to watch the bookBot bring someone their book, then walked back across campus while talking about summer plans. I still have a paper to finish tonight, but for once it feels manageable. Go Pack."
];

const postList = document.querySelector("#posts");

for (const post of posts) {
  const item = document.createElement("li");
  item.textContent = post;
  postList.append(item);
}
