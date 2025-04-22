export interface Show {
  date: Date;
  place: string;
}

export const shows: Show[] = [
  { date: new Date(2025, 8, 20), place: "Rockneck (Jyväskylä)" },
  { date: new Date(2025, 6, 25), place: "Monkey Island (Alavus)" },
  { date: new Date(2025, 4, 17), place: "Club Labra (Oulu)" },
  { date: new Date(2025, 3, 12), place: "Wanha Mestari (Riihimäki)" },
  { date: new Date(2024, 8, 27), place: "Varjobaari (Tampere)" },
  { date: new Date(2024, 8, 7), place: "Maanalainen (Tampere)" },
  { date: new Date(2024, 5, 28), place: "Varjobaari (Tampere)" },
  { date: new Date(2024, 3, 12), place: "Wanha Mestari (Riihimäki)" },
  { date: new Date(2024, 1, 2), place: "Maanalainen (Tampere)" },
  {
    date: new Date(2024, 0, 6),
    place: "Hardrock House Roihuvuori (Helsinki)",
  },
  { date: new Date(2023, 5, 10), place: "Myllyranta Rock (Lempäälä)" },
];

/**
 * 
 * {
  future: [
    "20.9.2025 Rockneck (Jyväskylä)",
    "25.7.2025 Monkey Island (Alavus)",
    "17.5.2025 Club Labra (Oulu)",
    "12.4.2025 Wanha Mestari (Riihimäki)",
  ],
  past: [
    "28.6.2024 Varjobaari (Tampere)",
    "12.4.2024 Wanha Mestari (Riihimäki)",
    "2.2.2024 Maanalainen (Tampere)",
    "6.1.2024 Hardrock House Roihuvuori (Helsinki)",
    "10.6.2023 Myllyranta Rock (Lempäälä)",
  ],
};

 */
