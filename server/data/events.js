const movies = [
  {
    id: "sr-1",
    title: "Citizen Kane",
    imdbRank: 68,
    imdbRating: 8.3,
    year: 1941,
    director: "Orson Welles",
    genre: ["Drama", "Mystery"],
    date: "2025-07-05",
    time: "7:00 PM",
    status: "upcoming",
    image:
      "https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    whyRewatch:
      "Welles' debut still invents new techniques on every rewatch — overlapping dialogue, deep focus, and non-linear time.",
    discussionPrompt:
      "Does 'Rosebud' hold up as a narrative device, or is it a red herring that misses the point?",
    venueId: "screening-room",
  },
  {
    id: "sr-2",
    title: "Casablanca",
    imdbRank: 67,
    imdbRating: 8.5,
    year: 1942,
    director: "Michael Curtiz",
    genre: ["Drama", "Romance", "War"],
    date: "2025-07-19",
    time: "7:30 PM",
    status: "upcoming",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b3/CasablancaPoster-Gold.jpg",
    whyRewatch:
      "Every line is a quotable. Bogart's performance gets richer with age — the cynicism is earned, not performed.",
    discussionPrompt:
      "Is Rick's final sacrifice selfless heroism or a man running from a decision he doesn't want to make?",
    venueId: "screening-room",
  },
  {
    id: "sr-3",
    title: "Rear Window",
    imdbRank: 42,
    imdbRating: 8.5,
    year: 1954,
    director: "Alfred Hitchcock",
    genre: ["Mystery", "Thriller"],
    date: "2025-08-02",
    time: "8:00 PM",
    status: "upcoming",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/38/Rear_Window_film_poster.jpg",
    whyRewatch:
      "A film about watching films, made by a director who knows exactly what that means. The suspense is architectural.",
    discussionPrompt:
      "Is Jefferies a voyeur or just bored? Does his gaze say more about him than about his neighbors?",
    venueId: "screening-room",
  },
  {
    id: "sr-4",
    title: "Sunset Blvd.",
    imdbRank: 72,
    imdbRating: 8.4,
    year: 1950,
    director: "Billy Wilder",
    genre: ["Drama", "Film-Noir"],
    date: "2025-06-14",
    time: "7:00 PM",
    status: "past",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTU0NTkyNzYwMF5BMl5BanBnXkFtZTgwMDU0NDk5MTI@._V1_SX300.jpg",
    communityRating: 4.7,
    communityNotes:
      "Incredible group discussion on Hollywood's self-mythologizing. The pool scene still hits hard.",
    whyRewatch:
      "The most ruthless Hollywood satire ever made — and it was made by Hollywood.",
    discussionPrompt:
      "Is Norma Desmond a tragic figure or a cautionary tale? Is there a difference?",
    venueId: "screening-room",
  },
  {
    id: "sr-5",
    title: "The Shawshank Redemption",
    imdbRank: 1,
    imdbRating: 9.3,
    year: 1994,
    director: "Frank Darabont",
    genre: ["Drama"],
    date: "2025-08-23",
    time: "7:00 PM",
    status: "upcoming",
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
    whyRewatch:
      "The hope doesn't feel cheap because Darabont earns every minute of it. The pacing is the point.",
    discussionPrompt:
      "Is Andy's escape a triumph of the human spirit or a selfish act that leaves Red behind?",
    venueId: "screening-room",
  },
  {
    id: "ah-1",
    title: "Seven Samurai",
    imdbRank: 19,
    imdbRating: 8.6,
    year: 1954,
    director: "Akira Kurosawa",
    genre: ["Action", "Adventure", "Drama"],
    date: "2025-07-12",
    time: "5:00 PM",
    status: "upcoming",
    image:
      "https://upload.wikimedia.org/wikipedia/en/c/c8/Seven_Samurai_Poster.png",
    whyRewatch:
      "At 3.5 hours, it never drags. Kurosawa's action choreography still outperforms most modern blockbusters.",
    discussionPrompt:
      "The final line is 'We've lost again.' Who really won — the samurai, the farmers, or no one?",
    venueId: "art-house",
  },
  {
    id: "ah-2",
    title: "Amélie",
    imdbRank: 61,
    imdbRating: 8.3,
    year: 2001,
    director: "Jean-Pierre Jeunet",
    genre: ["Comedy", "Romance"],
    date: "2025-07-26",
    time: "7:00 PM",
    status: "upcoming",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/53/Amelie_poster.jpg",
    whyRewatch:
      "The color grading alone is a masterclass. Every rewatch reveals a new background detail planted by Jeunet.",
    discussionPrompt:
      "Is Amélie's world genuinely whimsical or is she isolating herself from reality? Is the ending earned?",
    venueId: "art-house",
  },
  {
    id: "ah-3",
    title: "Cinema Paradiso",
    imdbRank: 55,
    imdbRating: 8.5,
    year: 1988,
    director: "Giuseppe Tornatore",
    genre: ["Drama", "Romance"],
    date: "2025-08-09",
    time: "7:30 PM",
    status: "upcoming",
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/86/CinemaParadiso.jpg",
    whyRewatch:
      "The extended cut reframes the entire film. If you've only seen the theatrical version, you owe yourself a rewatch.",
    discussionPrompt:
      "Does Alfredo's final gift feel earned, or is it manipulative? What does it say about sacrifice and art?",
    venueId: "art-house",
  },
  {
    id: "ah-4",
    title: "Parasite",
    imdbRank: 29,
    imdbRating: 8.5,
    year: 2019,
    director: "Bong Joon-ho",
    genre: ["Comedy", "Drama", "Thriller"],
    date: "2025-05-31",
    time: "7:00 PM",
    status: "past",
    image:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    communityRating: 4.9,
    communityNotes:
      "Best discussion of the year so far. The stone metaphor sparked a 45-minute debate.",
    whyRewatch:
      "On rewatch, everything is telegraphed. The horror is knowing what's coming and seeing how carefully it was built.",
    discussionPrompt:
      "Is the film's class commentary optimistic, pessimistic, or deliberately unresolved?",
    venueId: "art-house",
  },
  {
    id: "bl-1",
    title: "The Dark Knight",
    imdbRank: 3,
    imdbRating: 9.0,
    year: 2008,
    director: "Christopher Nolan",
    genre: ["Action", "Crime", "Drama"],
    date: "2025-07-18",
    time: "8:00 PM",
    status: "upcoming",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    whyRewatch:
      "Ledger's Joker is actually subtler than you remember. His first scene alone is more controlled than people give it credit for.",
    discussionPrompt:
      "Is Batman the hero of this film, or does the Joker's chaos win in the end — morally, structurally?",
    venueId: "blockbuster-lounge",
  },
  {
    id: "bl-2",
    title: "Pulp Fiction",
    imdbRank: 8,
    imdbRating: 8.9,
    year: 1994,
    director: "Quentin Tarantino",
    genre: ["Crime", "Drama"],
    date: "2025-08-01",
    time: "8:30 PM",
    status: "upcoming",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
    whyRewatch:
      "The timeline inversion isn't a trick — it completely changes what kind of story this is.",
    discussionPrompt:
      "Does Vincent deserve his fate? Is the film's structure moral or nihilistic?",
    venueId: "blockbuster-lounge",
  },
  {
    id: "bl-3",
    title: "Inception",
    imdbRank: 13,
    imdbRating: 8.8,
    year: 2010,
    director: "Christopher Nolan",
    genre: ["Action", "Adventure", "Sci-Fi"],
    date: "2025-08-15",
    time: "7:30 PM",
    status: "upcoming",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    whyRewatch:
      "The emotional core (Cobb and Mal) gets more devastating once you stop trying to solve the logic.",
    discussionPrompt:
      "Does the ending matter? If the top falls, does it change anything about the film's message?",
    venueId: "blockbuster-lounge",
  },
  {
    id: "bl-4",
    title: "Interstellar",
    imdbRank: 22,
    imdbRating: 8.7,
    year: 2014,
    director: "Christopher Nolan",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    date: "2025-06-20",
    time: "7:00 PM",
    status: "past",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    communityRating: 4.5,
    communityNotes:
      "Divided house — some found the ending earned, others thought it undercut the science. Great debate.",
    whyRewatch:
      "The docking scene is one of the most technically accurate and terrifying sequences in recent sci-fi.",
    discussionPrompt:
      "Is love a scientific force in this film or a narrative convenience? Does it matter?",
    venueId: "blockbuster-lounge",
  },
  {
    id: "ac-1",
    title: "Schindler's List",
    imdbRank: 6,
    imdbRating: 9.0,
    year: 1993,
    director: "Steven Spielberg",
    genre: ["Biography", "Drama", "History"],
    date: "2025-07-10",
    time: "6:30 PM",
    status: "upcoming",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg",
    whyRewatch:
      "The black-and-white photography forces a different kind of attention. The red coat isn't symbolism — it's a specific moral claim.",
    discussionPrompt:
      "Does Spielberg's restrained sentimentality serve the subject matter, or does it risk aestheticizing atrocity?",
    venueId: "academy-hall",
  },
  {
    id: "ac-2",
    title: "No Country for Old Men",
    imdbRank: 35,
    imdbRating: 8.2,
    year: 2007,
    director: "Coen Brothers",
    genre: ["Crime", "Drama", "Thriller"],
    date: "2025-07-24",
    time: "7:30 PM",
    status: "upcoming",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg",
    whyRewatch:
      "The ending rewards surrender. Stop trying to resolve it and the film opens up completely.",
    discussionPrompt:
      "Is the film nihilistic or deeply moral? What does Ed Tom's final dream actually mean?",
    venueId: "academy-hall",
  },
  {
    id: "ac-3",
    title: "Parasite",
    imdbRank: 29,
    imdbRating: 8.5,
    year: 2019,
    director: "Bong Joon-ho",
    genre: ["Comedy", "Drama", "Thriller"],
    date: "2025-08-07",
    time: "7:00 PM",
    status: "upcoming",
    image:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    whyRewatch:
      "This is the analysis session — not just 'did you like it' but 'what does every spatial choice mean.'",
    discussionPrompt:
      "Map the house architecturally. What does each level represent? Is the basement Marx or something else?",
    venueId: "academy-hall",
  },
  {
    id: "ac-4",
    title: "All About Eve",
    imdbRank: 88,
    imdbRating: 8.2,
    year: 1950,
    director: "Joseph L. Mankiewicz",
    genre: ["Drama"],
    date: "2025-06-07",
    time: "7:00 PM",
    status: "past",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/All_About_Eve_%281950_poster_-_retouch%29.jpg",
    communityRating: 4.6,
    communityNotes:
      "The Addison DeWitt character sparked an unexpected tangent about film criticism and power. Best quote night we've had.",
    whyRewatch:
      "The script is so dense it practically needs subtitles. Every line hides another line beneath it.",
    discussionPrompt:
      "Is Margo's arc empowering or a cautionary tale about ambition in women? How does the film treat both women?",
    venueId: "academy-hall",
  },
];

export default movies;
